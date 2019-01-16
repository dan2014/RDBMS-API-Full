
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts",function(tbl){
    // Primary key
    tbl.increments("id");

    // Other fields
    tbl
    .string("name",255)
    .notNullable()
    .unique("name","Cohort_Name");
    // Timestamps
    tbl.timestamps(true,true);

    // Constraints
    // tbl.unique("name","Cohort_Name");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cohorts");
};
