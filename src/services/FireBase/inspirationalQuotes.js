import firebase from "./config";

/**
 * Data Model for Inspiration Quotes Firebase Document
 */
export default class InspirationalQuotes {

    /**
     *  Constant for document name
     * @returns {string}
     */
    static get DOC_NAME() {
        return "InspirationalQuotes"
    }

    /**
     * Passes a Random Inspirational Quote to anonymous function @param
     *
     * @param {function} callback - anonymous function executed on
     *                              successful return of the promise
     */
    static getRandomQuote(callback) {
        if (firebase.auth().currentUser) {
            firebase
                .database()
                .ref(`/${InspirationalQuotes.DOC_NAME}/`)
                .once("value")
                .then((snapshot) => {
                    const quotes = snapshot.val();
                    const randomNumber = InspirationalQuotes.getRandomInt(11);
                    callback(quotes[randomNumber])
                });
        }
    }

    /**
     * Generates a random integer with a max of the @param passed
     * @param {number} max
     * @returns {number}
     */
    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}