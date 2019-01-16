
exports.seed = function(knex, Promise) {
  // Resets primary IDs of ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts')
      .insert([
        {name: 'fsw12'},
        {name: 'fsw13'},
        {name: 'fsw14'},
        {name: 'fsw15'}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('students')
      .insert([
        {cohortID: 4,studentName: 'Daniel'}
      ]);
    });
};

// {id:1,name: 'fsw12'},
// {id:2,name: 'fsw13'},
// {id:3,name: 'fsw14'},
// {id:4,name: 'fsw15'}