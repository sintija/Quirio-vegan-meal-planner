import firebase from "./config";

/**
 * Data Model for Shopping list Firebase Document
 */

export default class ShoppingList {

    /**
     *  Constant for document name
     * @returns {string}
     */
    static get DOC_NAME() {
        return "shoppingList"
    }

    /**
     *  Retrieves the users shopping list
     *
     * @returns {Promise<null|any>}
     */
    static async fetchDoc() {
        if (firebase.auth().currentUser) {
            const userId = firebase.auth().currentUser.uid;
            const snapshot = await firebase.database().ref(`/${ShoppingList.DOC_NAME}/${userId}`).once("value");
            return snapshot.val();
        } else {
            return null;
        }

    }

    /**
     * Ensures all the items in the array are unique
     *
     * @param array
     * @returns {*}
     */
    static arrayUnique(array) {
        let a = array.concat();
        for (let i = 0; i < a.length; ++i) {
            for (let j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    }

    /**
     *
     *  Updates the users shopping list
     *
     * @param listItems
     */
    static updateDoc(listItems) {
        const userId = firebase.auth().currentUser.uid;
        let shoppingList = [];

        ShoppingList.fetchDoc().then((result) => {

            if (result) {
                shoppingList = ShoppingList.arrayUnique(result.concat(listItems));
            } else {
                shoppingList = listItems;
            }

            firebase.database().ref(`/${ShoppingList.DOC_NAME}/${userId}`).set(shoppingList);

        }).catch((e) => {
            console.log("Shopping list didn't update.")
        })

    }


    /**
     *  removes Item from the shopping list
     *
     * @param listItem
     * @param callback
     */
    static removeDoc(listItem, callback) {
        const userId = firebase.auth().currentUser.uid;

        ShoppingList.fetchDoc().then((shoppingList) => {

            let index = shoppingList.indexOf(listItem);
            if (index > -1) {
                shoppingList.splice(index, 1);
            }

            firebase.database().ref(`/${ShoppingList.DOC_NAME}/${userId}`).set(shoppingList).then(() => {
                callback();
            });

        }).catch((e) => {
            callback();
            console.log("Shopping list didn't update.")
        })
    }

}