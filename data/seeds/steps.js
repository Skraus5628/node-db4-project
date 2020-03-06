
exports.seed = async function(knex, Promise) {
  await knex('steps').insert([
    { 
      step_number: 1, 
      instruction: "Crush caraway seeds in mortar and pestle until ground; set aside.", 
      recipe_id: 1
    },
    { 
      step_number: 2, 
      instruction: "Place bratwursts into a large nonstick skillet over medium heat.",
      recipe_id: 1
    },
    { 
      step_number: 3, 
      instruction: "Mix beer, dry mustard, pepper, dill weed and caraway seeds in a bowl.", 
      recipe_id: 1
    },
    { 
      step_number: 4, 
      instruction: "Pour over the brats, bring to a boil and reduce heat to low, cover and simmer for 10 minutes.", 
      recipe_id: 1
    },
    { 
      step_number: 5, 
      instruction: "boil sauce until it reduces to a thick liquid for about 20 minutes. tilt skillet to roll brats in the sauce until thoroughly coated", 
      recipe_id: 1
    },
    { 
      step_number: 6, 
      instruction: "Transfer bratwurst to platter and keep warm. Cook and stir sauerkraut in same skillet to mix in leftover sauce, then transsfer sauerkraut to a serving platter and top with cooked bratwurst.", 
      recipe_id: 1
    },
    { 
      step_number: 1, 
      instruction: "season beef with salt and pepper. Spread one side with mustard, and place bacon strips on the mustard.", 
      recipe_id: 2
    },
    { 
      step_number: 2, 
      instruction: "Arrange onion slices cross-wise on the beef. Roll each slice of meat beginning from the wider of the two short ends, keeping all ingredients inside the roll.", 
      recipe_id: 2
    },
    { 
      step_number: 3, 
      instruction: "Secure the rolls with 3 loops of butcher's twine. Heat Vegetable oil over medium-high heat in a saucepan and cook the beef, turning browning well on all sides for about 8 minutes.", 
      recipe_id: 2
    },
    { 
      step_number: 4, 
      instruction: "Reduce heat to very low. Simmer gently, covered, turning rolls every 20 minutes or so until beef is tender, about 1/12 hours.", 
      recipe_id: 2
    },
    { 
      step_number: 5, 
      instruction: "Transfer meat to allow it to rest. Raise heat to high and bring cooking liquiad to a simmer to make a gravy.", 
      recipe_id: 2
    },
    { 
      step_number: 6, 
      instruction: "Serve rouladen with gravy.", 
      recipe_id: 2
    },
  
  ]);
}; 