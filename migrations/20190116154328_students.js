
exports.up = function(knex, Promise) {
    return knex.schema.createTable("students",function(tbl){
        // Primary key
        tbl.increments("id");
    
        // Other fields
        tbl
        .string("studentName",255)
        .notNullable();

        tbl
        .integer('cohortID')
        .unsigned()
        .notNullable();

        tbl.foreign('cohortID').references('id').inTable('cohorts');

        // Timestamps
        tbl.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
