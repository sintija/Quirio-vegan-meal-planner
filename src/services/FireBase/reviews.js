import firebase from "./config";

/**
 * Data Model for Reviews Firebase Document
 */
export default class Reviews {

    /**
     *  Constant for document name
     * @returns {string}
     */
    static get DOC_NAME() {
        return "Reviews"
    }

    /**
     * Makes a call to the firebase API to add a review against a
     * recipe using the unique recipe ID
     *
     * @param recipeId
     * @param description
     * @param callback
     */
    static addReview(recipeId, description, callback = () => {}) {
        if (firebase.auth().currentUser) {
            const userEmail = firebase.auth().currentUser.email;
            Reviews.getReviews(recipeId, result => {
                let dataSet = [];
                if(result){
                    dataSet = [
                        ...result,
                        {
                            "userEmail": userEmail,
                            "description": description
                        }];
                } else {
                    dataSet = [{
                        "userEmail": userEmail,
                        "description": description
                    }];
                }

                firebase.database()
                    .ref(`/${Reviews.DOC_NAME}/${recipeId}`)
                    .set(dataSet)
                    .then(() => {
                        callback();
                    })
                    .catch(e => {
                        console.log(e);
                    });
            });
        }
    }

    /**
     *
     * Gets reviews for a specific recipeID
     *
     * @param recipeId
     * @param callback
     */
    static getReviews(recipeId, callback = () => {}) {
        if (firebase.auth().currentUser) {
            firebase.database()
                .ref(`/${Reviews.DOC_NAME}/${recipeId}`)
                .once("value")
                .then(snapshot => {
                    callback(snapshot.val());
                });
        }
    }
}