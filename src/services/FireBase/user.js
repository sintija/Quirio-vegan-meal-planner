import firebase from "./config";

/**
 * Data Model for User data
 */
export default class User {

  /**
   *  Constant for document name
   * @returns {string}
   */
  static get DOC_NAME() {
    return "User"
  }

  /**
   * Implements Login functionality provided by firebase
   *
   * @param email
   * @param password
   * @param callback
   */
  static logIn(email, password, callback) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => callback())
      .catch(error => callback(error));
  }

  /**
   * Adds user info to the firebase document
   *
   * @param firstName
   * @param LastName
   */
  static addUserInfo(firstName, LastName){
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref(`/${User.DOC_NAME}/${userId}`).set({
      "firstName": firstName,
      "LastName": LastName
    });
  }

  /**
   *  Gets the user info from firebase
   *
   * @param callback
   */
  static getUserInfo(callback){
    if(firebase.auth().currentUser){
      const userId = firebase.auth().currentUser.uid;
      firebase.database().ref(`/${User.DOC_NAME}/${userId}`).once("value").then((snapshot) => {
        callback(snapshot.val());
      });
    } else {
      callback(null);
    }
  }

  /**
   *  Implements the firebase register user API
   *
   * @param email
   * @param password
   * @param callback
   */
  static registerUser(email, password, callback = () => {}) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        callback();
      })
      .catch(e => {
        callback(e.message);
      });
  }

  /**
   *  Implements the firebase logout user API
   *
   * @returns {Promise<void>}
   */
  static async logOut() {
    try {
      await firebase.auth().signOut();
      // signed out
    } catch (e) {
      // an error
    }
  }

  /**
   * event listener to check if the user is authenticated
   *
   * @param callback
   */
  static authListener(callback) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(true);
      } else {
        callback(false);
      }
    });
  }

}
