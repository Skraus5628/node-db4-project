
exports.seed = async function(knex) {
  await knex('ingredients').insert([   
    { ingredient_name: "celery seeds" },          // 1
    { ingredient_name: "bratwurst" },             // 2
    { ingredient_name: "Salt" },                  // 3                  
    { ingredient_name: "Pepper" },                // 4
    { ingredient_name: "vegetable oil" },         // 5
    { ingredient_name: "dill weed" },             // 6
    { ingredient_name: "bacon" },                 // 7
    { ingredient_name: "beer" },                  // 8
    { ingredient_name: "beef round" },            // 9
    { ingredient_name: "sauerkraut" },            // 10
    { ingredient_name: "mustard powder" },        // 11
    { ingredient_name: "paprika" },               // 12
    { ingredient_name: "onion" }                  // 13
  ]);
}; 