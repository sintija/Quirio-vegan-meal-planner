/**
 * Test Data copied from one of the Api requests during the development stages to save the API calls
 */
export default class YummlyApiService {

  get stubSearchData() {
    return {
      "data": {
        "criteria": { "allowedDiet": ["386^Vegan"], "q": null, "allowedIngredient": null, "excludedIngredient": null },
        "matches": [{
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/qSN2naIbm-l6k_6LotR75SLx7ozYNeGWWNxRJ4yBpA3pxWN-Qw_xy32NUQBqFgqRLn4PrF4HvG4-PqWTYdouc44=s90-c" },
          "sourceDisplayName": "Hello Glow",
          "ingredients": ["hazelnut milk", "apple", "banana", "cinnamon", "vanilla extract"],
          "id": "Rejuvenating-Cinnamon-Apple-Smoothie-2655758",
          "smallImageUrls": ["https://lh3.googleusercontent.com/ihOpoK-Y6aMiGXgy3CZxM-QXIY3g62yXaSsj9rQUtVvCrey4rnI8gyBi1WuaE9febi0QagGs2Wet5xyHdDE0wQ=s90"],
          "recipeName": "Rejuvenating Cinnamon Apple Smoothie",
          "totalTimeInSeconds": 600,
          "attributes": { "course": ["Beverages", "Breakfast and Brunch"] },
          "flavors": null,
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/KdBwulp0qKF8slCmvPsIcx8ikmgb3DoL8TcX_9yYhbjyoWFykGJ7mH9Xfy7403MBYosS8-DYexGU14tuX8IwTg=s90-c" },
          "sourceDisplayName": "Eating Well",
          "ingredients": ["old-fashioned rolled oats", "unsweetened nondairy milk", "light brown sugar", "vanilla extract", "ground cinnamon", "salt"],
          "id": "Cinnamon-Roll-Overnight-Oats-2648897",
          "smallImageUrls": ["https://lh3.googleusercontent.com/g3OdbFDUQC2NfLl-KWBGeVK59_RnYR1Tzr2gbEhn-npy5K3GdF45qxxxWKuZ7bp96TZenYkikhorscTIEIMX=s90"],
          "recipeName": "Cinnamon Roll Overnight Oats",
          "totalTimeInSeconds": 28800,
          "attributes": { "course": ["Breakfast and Brunch"] },
          "flavors": null,
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/3wn8P_3QGJK4cic_E9Qv9D5kopeKqMVoGzjcMsYe2tjS4RLQrxQJAz_lPnBfb4-tRa7a6jF0HiI1rQiUlmSZZQ=s90-c" },
          "sourceDisplayName": "Recipes Lover",
          "ingredients": ["banana", "peanut butter", "almond milk", "ice cubes"],
          "id": "Peanut-Butter-Banana-Breakfast-Smoothie-2553462",
          "smallImageUrls": ["https://lh3.googleusercontent.com/NvA-IzsLa5V6YibQW7RSEIWndi7RS9rZkkqKhVT1jICftP5_Mxl7TgiDn5w-CutgxUM9NZ8ZLMXwWdKPk_gwqg=s90"],
          "recipeName": "Peanut Butter Banana Breakfast Smoothie",
          "totalTimeInSeconds": 1200,
          "attributes": { "course": ["Breakfast and Brunch", "Beverages"], "cuisine": ["Kid-Friendly"] },
          "flavors": {
            "piquant": 0.0,
            "meaty": 0.16666666666666666,
            "bitter": 0.16666666666666666,
            "sweet": 0.3333333333333333,
            "sour": 0.3333333333333333,
            "salty": 0.16666666666666666
          },
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/lB16Qi3v5AonLAqm590ouvSBuUZqlv-i6RU4k1F8ZdsZWPj4bOZdK092Tor8-cMG8K0pPmoHLkAFTUPkNS370Ms=s90-c" },
          "sourceDisplayName": "My Kids Lick The Bowl",
          "ingredients": ["apple sauce", "oil", "rolled oats", "plain flour", "baking powder", "cinnamon"],
          "id": "Healthy-Apple-Cinnamon-Muffins-2656530",
          "smallImageUrls": ["https://lh3.googleusercontent.com/jhE3-QDrwGUbnJGTedTPH0pUFcZmEu7v2mhQPD54-XzeypzFUCMLAavhfZ9kkb7J5YlvTKbjBJ-cI-dHn2DquAo=s90"],
          "recipeName": "Healthy Apple Cinnamon Muffins",
          "totalTimeInSeconds": 2100,
          "attributes": { "course": ["Breakfast and Brunch", "Breads", "Lunch"] },
          "flavors": {
            "piquant": 0.0,
            "meaty": 0.3333333333333333,
            "bitter": 0.8333333333333334,
            "sweet": 0.5,
            "sour": 0.16666666666666666,
            "salty": 0.6666666666666666
          },
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/VMyVNHlTgfGtj3lqCkDxbvDzlA4sT7slyQXJZ1MXvsZEuyM0-6wCK8s2xxPY8sdd7I40pFda66kLRp1GTdiq=s90-c" },
          "sourceDisplayName": "Southern Plate",
          "ingredients": ["biscuits", "sugar", "cinnamon", "margarine", "vegetable oil"],
          "id": "Melt-In-Your-Mouth-Doughnuts-2259710",
          "smallImageUrls": ["https://lh3.googleusercontent.com/7vyXYK7jOt6zg9mxJx3N_H_M7XLO3Hb2cgB_SCQZo4w7YndQJVnMRL2O76y-TAvjFN77dQShgADJFwh1An0mqWY=s90"],
          "recipeName": "Melt In Your Mouth Doughnuts",
          "totalTimeInSeconds": 900,
          "attributes": { "course": ["Desserts", "Breakfast and Brunch", "Breads", "Lunch"] },
          "flavors": {
            "piquant": 0.0,
            "meaty": 0.6666666666666666,
            "bitter": 0.5,
            "sweet": 0.8333333333333334,
            "sour": 0.16666666666666666,
            "salty": 0.8333333333333334
          },
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/UuwpDYdAKpfUZSK7hKpobOH7EW2MePGKrDDuOCwlniXUDZ_hHtAct1o9dmMwx3hANRpULEnltRenItJP3n4J=s90-c" },
          "sourceDisplayName": "The Full Helping",
          "ingredients": ["whole grain toast", "hass avocado", "pomegranate arils", "hemp seeds", "pepper", "salt"],
          "id": "Avocado-Superfood-Breakfast-Toast-2635876",
          "smallImageUrls": ["https://lh3.googleusercontent.com/PMpNh_HBMcPKo9KLLhuIu8XrAIYLHy9WK6ozkOxPXu8eyTUFSw6xz1JeOuL_Lg8NY4RqF3aZ6loih2KZH5V7Bg=s90"],
          "recipeName": "Avocado Superfood Breakfast Toast",
          "totalTimeInSeconds": 600,
          "attributes": { "course": ["Breakfast and Brunch"] },
          "flavors": null,
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/Ek5m4pp9CrCB03eQbA2vt10UYavIcDO8vEjIDwAxmYqwKe91YNbU1tCy7wBzw5vkJK4_HOPjtmZxd3F1XQggnA=s90-c" },
          "sourceDisplayName": "REAL FOOD, MOSTLY PLANTS",
          "ingredients": ["hemp seeds", "unsweetened almond milk", "almond butter", "chia seeds"],
          "id": "Keto-Overnight-Oats-2632298",
          "smallImageUrls": ["https://lh3.googleusercontent.com/OgfoKYExOCElMbX9lxvD-ZzUa1R8_p2P2tDXIqdo98TGuxEIN3fkOsBZ7DQ8v8gfvdKHSnXPH7aHLS3kps8x=s90"],
          "recipeName": "Keto Overnight Oats",
          "totalTimeInSeconds": 300,
          "attributes": { "course": ["Breakfast and Brunch"] },
          "flavors": null,
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/HuYEdDT4yzj4WZtrA3O6PTNbbcQ9xW7RU3nP8YA1SZhBdUq8S5R6RezebbODaxikJExdjwH12PtelM276t9GUA=s90-c" },
          "sourceDisplayName": "Skinnytaste",
          "ingredients": ["raw almonds", "salt", "vanilla extract", "ground cinnamon", "maple syrup"],
          "id": "How-To-Make-Nut-Butter-2575436",
          "smallImageUrls": ["https://lh3.googleusercontent.com/I8NGPvlvpfa3zRqyzXpjKytM9iS2ZTduQ-HbRbuY6V8nsmzTcOO69cyRAom0rohGuw_shAQFr_oZP_3dkiUO5kE=s90"],
          "recipeName": "How To Make Nut Butter",
          "totalTimeInSeconds": 2400,
          "attributes": { "course": ["Breakfast and Brunch"] },
          "flavors": {
            "piquant": 0.0,
            "meaty": 0.8333333333333334,
            "bitter": 0.8333333333333334,
            "sweet": 0.6666666666666666,
            "sour": 0.16666666666666666,
            "salty": 0.6666666666666666
          },
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/kYqlngGbFi8eQ3LrsphrxXnbUY4Dn1nyOdWcXjvzTENPz47FYqbe5o9Rg7vVCcPAFSiw5b_nJAhslunqxNO76A=s90-c" },
          "sourceDisplayName": "Handful of Raspberries",
          "ingredients": ["red potatoes", "smoked paprika", "salt", "garlic powder", "onion powder", "fresh ground black pepper", "olive oil"],
          "id": "Crispy-Red-Breakfast-Potatoes-2625751",
          "smallImageUrls": ["https://lh3.googleusercontent.com/2iiqke1DeFNp7dH6G7mzibp9edj2946oWeDywB73H5XgqxyrbGVPcSrB63TUG7km2m7fAGtId1Jd3NdUm1Xb9Q=s90"],
          "recipeName": "Crispy Red Breakfast Potatoes",
          "totalTimeInSeconds": 2400,
          "attributes": { "course": ["Breakfast and Brunch"] },
          "flavors": {
            "piquant": 0.16666666666666666,
            "meaty": 0.16666666666666666,
            "bitter": 0.3333333333333333,
            "sweet": 0.16666666666666666,
            "sour": 0.5,
            "salty": 0.16666666666666666
          },
          "rating": 4
        }, {
          "imageUrlsBySize": { "90": "https://lh3.googleusercontent.com/2hWx3XBF61NZtpviLRIJVvzjX0l2RZlGRNp5G3LksThnfA3WKQRRGBjmFX9moI2FsXNeFa1oaVW-e0Z5dC_vLQ=s90-c" },
          "sourceDisplayName": "Paleo Hacks",
          "ingredients": ["bananas", "coconut milk", "cashew butter", "raw cacao powder", "vanilla extract", "ice cubes"],
          "id": "Chocolate-Breakfast-Milkshake-2421248",
          "smallImageUrls": ["https://lh3.googleusercontent.com/02EOXZv-ZuOLTbIik5VlPOVEwOfVbyLd35J-Bgcm_rqvUGnBl1u_7l56qzd62QTT3KOcyzHd51AulAqGdGjshQ=s90"],
          "recipeName": "Chocolate Breakfast Milkshake",
          "totalTimeInSeconds": 300,
          "attributes": { "course": ["Beverages", "Breakfast and Brunch"] },
          "flavors": null,
          "rating": 3
        }],
        "facetCounts": {},
        "totalMatchCount": 9248,
        "attribution": {
          "html": "Recipe search powered by <a href='http://www.yummly.co/recipes'><img alt='Yummly' src='https://static.yummly.co/api-logo.png'/></a>",
          "url": "http://www.yummly.co/recipes/",
          "text": "Recipe search powered by Yummly",
          "logo": "https://static.yummly.co/api-logo.png"
        }
      }
    };
  }

  get stubNutritionalInfo() {
    return {
      "data": {
        "yield": "makes one smoothie, equaling about 2 cups. ",
        "nutritionEstimates": [
          {
            "attribute": "K",
            "description": "Potassium, K",
            "value": 0.41,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FLD",
            "description": "Fluoride, F",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "PHYSTR",
            "description": "Phytosterols",
            "value": 0.03,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "STARCH",
            "description": "Starch",
            "value": 2.95,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FOLDFE",
            "description": "Folate, DFE",
            "value": 17.28,
            "unit": {
              "id": "4d783ee4-aa07-4958-84bf-3f4b528049dc",
              "name": "mcg_DFE",
              "abbreviation": "mcg_DFE",
              "plural": "mcg_DFE",
              "pluralAbbreviation": "mcg_DFE",
              "decimal": false
            }
          },
          {
            "attribute": "MN",
            "description": "Manganese, Mn",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "ALC",
            "description": "Alcohol, ethyl",
            "value": 0.18,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "GLUS",
            "description": "Glucose (dextrose)",
            "value": 6.59,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FOLFD",
            "description": "Folate, food",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FE",
            "description": "Iron, Fe",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "ENERC_KJ",
            "description": "Energy",
            "value": 625.38,
            "unit": {
              "id": "fea252f8-9888-4365-b005-e2c63ed3a776",
              "name": "calorie",
              "abbreviation": "kcal",
              "plural": "calories",
              "pluralAbbreviation": "kcal",
              "decimal": true
            }
          },
          {
            "attribute": "FRUS",
            "description": "Fructose",
            "value": 13.87,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "TOCPHA",
            "description": "Vitamin E (alpha-tocopherol)",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "WATER",
            "description": "Water",
            "value": 201.09,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "SUGAR",
            "description": "Sugars, total",
            "value": 25.36,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "ASH",
            "description": "Ash",
            "value": 0.6,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "SE",
            "description": "Selenium, Se",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FIBTG",
            "description": "Fiber, total dietary",
            "value": 5.58,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "PROCNT",
            "description": "Protein",
            "value": 0.6,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "CHOCDF",
            "description": "Carbohydrate, by difference",
            "value": 39.38,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FOL",
            "description": "Folate, total",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "VITK",
            "description": "Vitamin K (phylloquinone)",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "LYCPN",
            "description": "Lycopene",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "LUT+ZEA",
            "description": "Lutein + zeaxanthin",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "CARTA",
            "description": "Carotene, alpha",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "TOCPHG",
            "description": "Tocopherol, gamma",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "P",
            "description": "Phosphorus, P",
            "value": 0.03,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "CHOLN",
            "description": "Choline, total",
            "value": 0.01,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "CA",
            "description": "Calcium, Ca",
            "value": 0.02,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "MG",
            "description": "Magnesium, Mg",
            "value": 0.03,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "VITA_RAE",
            "description": "Vitamin A, RAE",
            "value": 7.28,
            "unit": {
              "id": "0fcf76b3-891a-403d-883f-58c8809ef151",
              "name": "mcg_RAE",
              "abbreviation": "mcg_RAE",
              "plural": "mcg_RAE",
              "pluralAbbreviation": "mcg_RAE",
              "decimal": false
            }
          },
          {
            "attribute": "NIA",
            "description": "Niacin",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "CRYPX",
            "description": "Cryptoxanthin, beta",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "BETN",
            "description": "Betaine",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "SUCS",
            "description": "Sucrose",
            "value": 4.82,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "CARTB",
            "description": "Carotene, beta",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "VITA_IU",
            "description": "Vitamin A, IU",
            "value": 137,
            "unit": {
              "id": "ed46fe0c-44fe-4c1f-b3a8-880f92e30930",
              "name": "IU",
              "abbreviation": "IU",
              "plural": "IU",
              "pluralAbbreviation": "IU",
              "decimal": true
            }
          },
          {
            "attribute": "ENERC_KCAL",
            "description": "Energy",
            "value": 149.47,
            "unit": {
              "id": "fea252f8-9888-4365-b005-e2c63ed3a776",
              "name": "calorie",
              "abbreviation": "kcal",
              "plural": "calories",
              "pluralAbbreviation": "kcal",
              "decimal": true
            }
          },
          {
            "attribute": "VITC",
            "description": "Vitamin C, total ascorbic acid",
            "value": 0.01,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "FAT",
            "description": "Total lipid (fat)",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "ZN",
            "description": "Zinc, Zn",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          },
          {
            "attribute": "NA",
            "description": "Sodium, Na",
            "value": 0,
            "unit": {
              "id": "12485d26-6e69-102c-9a8a-0030485841f8",
              "name": "gram",
              "abbreviation": "g",
              "plural": "grams",
              "pluralAbbreviation": "grams",
              "decimal": true
            }
          }
        ],
        "totalTime": "10 min",
        "images": [
          {
            "hostedSmallUrl": "https://lh3.googleusercontent.com/ihOpoK-Y6aMiGXgy3CZxM-QXIY3g62yXaSsj9rQUtVvCrey4rnI8gyBi1WuaE9febi0QagGs2Wet5xyHdDE0wQ=s90",
            "hostedMediumUrl": "https://lh3.googleusercontent.com/ihOpoK-Y6aMiGXgy3CZxM-QXIY3g62yXaSsj9rQUtVvCrey4rnI8gyBi1WuaE9febi0QagGs2Wet5xyHdDE0wQ=s180",
            "hostedLargeUrl": "https://lh3.googleusercontent.com/ihOpoK-Y6aMiGXgy3CZxM-QXIY3g62yXaSsj9rQUtVvCrey4rnI8gyBi1WuaE9febi0QagGs2Wet5xyHdDE0wQ=s360",
            "imageUrlsBySize": {
              "90": "https://lh3.googleusercontent.com/qSN2naIbm-l6k_6LotR75SLx7ozYNeGWWNxRJ4yBpA3pxWN-Qw_xy32NUQBqFgqRLn4PrF4HvG4-PqWTYdouc44=s90-c",
              "360": "https://lh3.googleusercontent.com/qSN2naIbm-l6k_6LotR75SLx7ozYNeGWWNxRJ4yBpA3pxWN-Qw_xy32NUQBqFgqRLn4PrF4HvG4-PqWTYdouc44=s360-c"
            }
          }
        ],
        "name": "Rejuvenating Cinnamon Apple Smoothie",
        "source": {
          "sourceDisplayName": "Hello Glow",
          "sourceSiteUrl": "helloglow.co",
          "sourceRecipeUrl": "https://helloglow.co/cinnamon-apple-smoothie/"
        },
        "id": "Rejuvenating-Cinnamon-Apple-Smoothie-2655758",
        "ingredientLines": [
          "1/2 cup hazelnut milk",
          "1 organic apple (with the peel)",
          "1/2 banana",
          "couple dashes of cinnamon",
          "drop of vanilla extract"
        ],
        "attribution": {
          "html": "<a href='http://www.yummly.co/recipe/Rejuvenating-Cinnamon-Apple-Smoothie-2655758'>Rejuvenating Cinnamon Apple Smoothie recipe</a> information powered by <img alt='Yummly' src='https://static.yummly.co/api-logo.png'/>",
          "url": "http://www.yummly.co/recipe/Rejuvenating-Cinnamon-Apple-Smoothie-2655758",
          "text": "Rejuvenating Cinnamon Apple Smoothie recipes: information powered by Yummly",
          "logo": "https://static.yummly.co/api-logo.png"
        },
        "numberOfServings": 1,
        "totalTimeInSeconds": 600,
        "attributes": {
          "course": [
            "Breakfast and Brunch",
            "Beverages"
          ]
        },
        "flavors": {},
        "rating": 4
      }
    };
  }

  constructor() {
    this.axiosInstance = Promise.resolve(this.stubSearchData);
  }

  async basicCourseSearch(allowedCourse) {
    return this.axiosInstance;
  }


  breakfastSearch() {
    return this.basicCourseSearch("course^course-Breakfast and Brunch");
  }

  lunchSearch() {
    return this.basicCourseSearch("course^course-Lunch");
  }

  dinnerSearch() {
    return this.basicCourseSearch("course^course-Main Dishes");
  }

  getNutritionalInfo(recipeId) {
    return Promise.resolve(this.stubNutritionalInfo);
  }

}