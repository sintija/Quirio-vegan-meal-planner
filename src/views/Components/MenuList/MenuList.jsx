import React from "react";
import yummlyApi from "../../../services/yummlyApi/yummlyApi";
import Menuitems from "../MenuItems";
import MenuItemLoader from "../MenuItemLoader";


export default class Menulist extends React.Component {

  constructor(props) {
    super(props);

    this.loadNutritionInfoHandler = this
      .loadNutritionInfoHandler
      .bind(this);

    this.state = {
      activeTab: "1",
      BreakfastList: [],
      LunchList: [],
      DinnerList: [],
      BreakfastNutritionalInfo: {},
      LunchNutritionalInfo: {},
      DinnerNutritionalInfo: {}
    };

    this.mealTimes = ["Breakfast", "Lunch", "Dinner"];
  }

  /***
   * Load Nutritional Recipe data based on recipe Id @param
   * @param recipeId
   */
  loadNutritionInfoHandler(recipeId) {

    let yummlyApiService = new yummlyApi();
    yummlyApiService
      .getNutritionalInfo(recipeId)
      .then((result) => {
        this.setState({ nutritionalInfo: result });

      });

  }

  /**
   * Connection with Yummly Api to retrieve results from breakfast, lunch and dinner
   */
  componentDidMount() { //

    let yummlyApiService = new yummlyApi();

    yummlyApiService
      .breakfastSearch()
      .then((result) => {
        this.setState({ BreakfastList: result.data.matches });

        yummlyApiService
          .getNutritionalInfo(result.data.matches[0].id)
          .then((result) => {
            this.setState({ BreakfastNutritionalInfo: result });

          });

      });

    yummlyApiService
      .lunchSearch()
      .then((result) => {
        this.setState({ LunchList: result.data.matches });

        yummlyApiService
          .getNutritionalInfo(result.data.matches[0].id)
          .then((result) => {

            this.setState({ LunchNutritionalInfo: result });
          });
      });

    yummlyApiService
      .dinnerSearch()
      .then((result) => {
        this.setState({ DinnerList: result.data.matches });
        yummlyApiService
          .getNutritionalInfo(result.data.matches[0].id)
          .then((result) => {
            this.setState({ DinnerNutritionalInfo: result });
          });
      });

  }

  loadNutritionInfoHandler(recipeId, mealTime) {

    let yummlyApiService = new yummlyApi();
    yummlyApiService
      .getNutritionalInfo(recipeId)
      .then((result) => {
        switch (mealTime) {
          case "Breakfast":
            this.setState({ BreakfastNutritionalInfo: result });
            break;
          case "Lunch":
            this.setState({ LunchNutritionalInfo: result });
            break;
          case "Dinner":
            this.setState({ DinnerNutritionalInfo: result });
            break;
        }

      });

  }

  /**
   * Update  Api Data for Breakfast/Lunch and Dinnertime
   * @returns {*}
   */
  render() {

    let BreakfastItem = null;
    let LunchItem = null;
    let DinnerItem = null;

    if (this.state.BreakfastList.length !== 0) {

      BreakfastItem = <Menuitems
        matches={this.state.BreakfastList}
        nutritionalInfo={this.state.BreakfastNutritionalInfo}
        updatenutritionalInfoHander={this.loadNutritionInfoHandler}
        mealTime="Breakfast"/>;

    }

    if (this.state.LunchList.length !== 0) {

      LunchItem = <Menuitems
        matches={this.state.LunchList}
        nutritionalInfo={this.state.LunchNutritionalInfo}
        updatenutritionalInfoHander={this.loadNutritionInfoHandler}
        mealTime="Lunch"/>;

    }

    if (this.state.DinnerList.length !== 0) {

      DinnerItem = <Menuitems
        matches={this.state.DinnerList}
        nutritionalInfo={this.state.DinnerNutritionalInfo}
        updatenutritionalInfoHander={this.loadNutritionInfoHandler}
        mealTime="Dinner"/>;

    }



    return (
      <div>


 


        {BreakfastItem}
        {LunchItem}
        {DinnerItem}

      </div>

    );
  }

};
