const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  await cleaner.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
}; 

exports.seed = function(knex){

}