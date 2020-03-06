exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('recipe_name', 255)
                .notNullable()
                .unique()
        })
        await knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient_name', 255)
                .notNullable()
                .unique()
        })
        await knex.schema
        .createTable('recipe_ingredients', tbl => {
            tbl.increments()
            tbl.float('quantity')
            tbl.string('measurement')
            
            tbl.integer('recipe_id')
               
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
                

            tbl.integer('ingredient_id')
               
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
                
        })
        await knex.schema
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.integer('step_number')
                .notNullable()
            tbl.string('instruction', 400)
                .notNullable()
            //FK
            tbl.integer('recipe_id')
              
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
                
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};