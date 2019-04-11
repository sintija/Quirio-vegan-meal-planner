import firebase from "./config";

/**
 * Data Model for Preferences Firebase Document
 */
export default class Preferences {

  /**
   *  Constant for document name
   * @returns {string}
   */
  static get DOC_NAME() {
    return "preferences"
  }

  /**
   * retrieves the Preference set by user
   *
   * @returns {Promise<null|any>}
   */
  static async fetchPreferencesDoc() {
    if(firebase.auth().currentUser){
      const userId = firebase.auth().currentUser.uid;
      const snapshot = await firebase.database().ref(`/${Preferences.DOC_NAME}/${userId}`).once("value");
      return snapshot.val();
    } else {
      return null;
    }

  }

  /**
   *  Updates the Food (likes and dislikes) Preferences in firebase
   *
   * @param popularItems
   * @param excludedIngredient
   * @param allowedIngredient
   */
  static updatePreferencesDoc(popularItems, excludedIngredient, allowedIngredient) {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`/${Preferences.DOC_NAME}/${userId}`).set({
      "popularItems": popularItems,
      "excludedIngredient": excludedIngredient,
      "allowedIngredient": allowedIngredient
    });
  }

  /**
   * Updates the user preferences in relation to their chosen vegan day,
   * maximum calorie per day, maximum preparation time for a given meal and
   * max amount of ingredients
   *
   * @param veganDay
   * @param maxCalPerMeal
   * @param maxPrepTime
   * @param maxAmountOfIng
   * @returns {Promise<void>}
   */
  static async updateMealSpecificPreferencesDoc(veganDay,  maxCalPerMeal, maxPrepTime,  maxAmountOfIng) {
    const preferences = await this.fetchPreferencesDoc();

    let popularItems = ( preferences.popularItems ? preferences.popularItems : []);
    let excludedIngredient = ( preferences.excludedIngredient ? preferences.excludedIngredient : []);
    let allowedIngredient = ( preferences.allowedIngredient ? preferences.allowedIngredient : []);

    const userId = firebase.auth().currentUser.uid;

    firebase.database().ref(`/${Preferences.DOC_NAME}/${userId}`).set({
      "popularItems": popularItems,
      "excludedIngredient": excludedIngredient,
      "allowedIngredient": allowedIngredient,
      "veganDay":veganDay,
      "maxCalPerMeal":  maxCalPerMeal,
      "maxPrepTime": maxPrepTime, 
      "maxAmountOfIng":  maxAmountOfIng

    });
  }

}











