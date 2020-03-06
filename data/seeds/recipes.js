
exports.seed = async function(knex) {
  await knex('recipes').insert([   
    { recipe_name: "Beer Glazed Brats and Sauerkraut" },
    { recipe_name: "Beef Rouladen" },
    { recipe_name: "Sauerbraten" },
    { recipe_name: "Schnitzel" },
    { recipe_name: "German Beet Salad with Caraway Seeds" },
    { recipe_name: "Spaetzle" },
    { recipe_name: "Kartoffelkloesse" }
  ]);
};
