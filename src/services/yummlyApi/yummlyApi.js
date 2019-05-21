import axios from "axios";
import Preferences from '../FireBase/preferences';


/**
 * Connection to the Yummly Api service
 * Making HTTP requests using axios instance to fetch data
 */
export default class YummlyApiService {

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.yummly.com/v1/",
      headers: {
        "X-Yummly-App-ID": "",
        "X-Yummly-App-Key": ""
      }
    });
  }

  /**
   *  *
   *  Gets @params from API
   * @param allowedCourse
   * @returns {Promise<AxiosPromise | *>}
   */
  async basicCourseSearch(allowedCourse) {

    const preferences = await Preferences.fetchPreferencesDoc();
      return this.axiosInstance({
        url: "api/recipes",
        method: "get",
        params: {
          "allowedDiet": ["386^Vegan"],
          "allowedCourse": [allowedCourse],
          "requirePictures": true,
          "allowedIngredient": (preferences ?  preferences.allowedIngredient : []),
          "excludedIngredient": (preferences ?  preferences.excludedIngredient : [])
        }
      });

  }

  /**
   * Search for Breakfast meals
   * @returns {Promise<AxiosPromise|*>}
   */
  breakfastSearch() {
    return this.basicCourseSearch("course^course-Breakfast and Brunch");
  }

  /**
   *Search for Lunch meals
   * @returns {Promise<AxiosPromise|*>}
   */
  lunchSearch() {
    return this.basicCourseSearch("course^course-Lunch");
  }

  /**
   *Search for Dinner meals
   * @returns {Promise<AxiosPromise|*>}
   */
  dinnerSearch() {
    return this.basicCourseSearch("course^course-Main Dishes");
  }

  /**
   *Get Nutritional Data for each recipe
   * @param recipeId
   * @returns {AxiosPromise | *}
   */
  getNutritionalInfo(recipeId) {
    return this.axiosInstance({
      url: `api/recipe/${recipeId}`,
      method: "get"
    });
  }
}
