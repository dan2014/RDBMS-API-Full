
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items',function(tbl){
        //primary key
        tbl.increments("items_id")
        //other fields
        //timestamps
    })
};

exports.down = function(knex, Promise) {
    // rollback/undo changes
    return
};
