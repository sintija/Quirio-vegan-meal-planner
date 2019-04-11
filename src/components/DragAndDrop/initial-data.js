/**
 * Icons for draggable elements
 */

import apple from '../../assets/img/Assets/preferences-icons/ic-apple.png';
import banana from '../../assets/img/Assets/preferences-icons/ic-banana.png';
import beans from '../../assets/img/Assets/preferences-icons/ic-beans.png'; 
import carrots from '../../assets/img/Assets/preferences-icons/ic-carrot.png'; 
import chilly from '../../assets/img/Assets/preferences-icons/ic-chilly.png'; 
import cucumber from '../../assets/img/Assets/preferences-icons/ic-cucumber.png';
import garlic from '../../assets/img/Assets/preferences-icons/ic-garlic.png';
import mushrooms from '../../assets/img/Assets/preferences-icons/ic-mushroom.png';
import defaultImage from '../../assets/img/Assets/preferences-icons/ic-no-img.png';
import onions from '../../assets/img/Assets/preferences-icons/ic-onion.png';
import potatoes from '../../assets/img/Assets/preferences-icons/ic-patatoe.png';
import peas from '../../assets/img/Assets/preferences-icons/ic-peas.png';
import pumpkin from '../../assets/img/Assets/preferences-icons/ic-pumkin.png';
import rice from '../../assets/img/Assets/preferences-icons/ic-rice.png';
import salad from '../../assets/img/Assets/preferences-icons/ic-salad.png';
import strawberry from '../../assets/img/Assets/preferences-icons/ic-strawberry.png';
import tomatoes from '../../assets/img/Assets/preferences-icons/ic-tomatoe.png';



import plate from "../../assets/img/Assets/PLATE.png";
import bin from "../../assets/img/Assets/BIN.png";



const initailData = {

    tasks : {
        'apple' : {id:'apple',content:'apple', img:apple}, 
        'banana' : {id:'banana',content:'banana', img:banana}, 
        'beans' : {id:'beans',content:'beans', img:beans},
        'carrots' : {id:'carrots',content:'carrots', img:carrots},
        'chilly' : {id:'chilly',content:'chilly', img:chilly},
        'cucumber' : {id:'cucumber',content:'cucumber', img:cucumber},
        'garlic' : {id:'garlic',content:'garlic', img:garlic},
        'mushrooms' : {id:'mushrooms',content:'mushrooms', img:mushrooms},
        'tofu' : {id:'tofu',content:'tofu', img:defaultImage},
        'onions' : {id:'onions',content:'onions', img:onions},
        'potatoes' : {id:'potatoes',content:'potatoes', img:potatoes},
        'peas' : {id:'peas',content:'peas', img:peas},
        'pumpkin' : {id:'pumpkin',content:'pumpkin', img:pumpkin},
        'rice' : {id:'rice',content:'rice', img:rice},
        'spinach' : {id:'spinach',content:'spinach', img:salad},
        'strawberry' : {id:'strawberry',content:'strawberry', img:strawberry},
        'tomatoes' : {id:'tomatoes',content:'tomatoes', img:tomatoes},
        'pasta' : {id:'pasta',content:'pasta', img:defaultImage},
        'avocado' : {id:'avocado',content:'avocado', img:defaultImage},







    }, 

    columns : {
        'column-1': {
            id:'column-1',
            title:'Popular Foods' ,
            taskIds: ['apple', 'banana','beans', 'carrots', 'chilly',  'cucumber',  'garlic', 'mushrooms',  'tofu', 'onions', 'potatoes', 'peas', 'pumpkin', 'rice', 'spinach', 'strawberry',  'tomatoes', "pasta" , "avocado"],
            img: null,
            columnWidths: {
                xs: 12,
                sm: 12,
                md: 4,
                lg: 4
            }
        }, 

        'column-2': {
            id:'column-2',
            title:' Drag below Ingredient/s you want to include in recipe' ,
            taskIds: [], 
            img:plate,
            columnWidths: {
                xs: 6,
                sm: 6,
                md: 4,
                lg: 4
            }
        }, 


        'column-3': {
            id:'column-3',
            title:'Drag below food you want to exclude' ,
            taskIds: [], 
            img:bin,
            columnWidths: {
                xs: 6,
                sm: 6,
                md: 4,
                lg: 4
            }
        }, 

    },

    //Facilitate reordering of the columns

    columnOrder: ['column-1', 'column-2', 'column-3'], 

}; 

export default initailData; 