const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

module.exports = {
    get:function(){
        const query = db("cohorts");
        return query;
    },
    getID:function(id){
        const query = db("cohorts").select().where("id",id).first();
        return query;
    },
    getStudents:function(id){
        const query = db("students").select().where("cohortID",id);
        return query;
    },
    insert:function(name){
        const query =  db("cohorts").insert(name);
        return query;
    },
    update:function(id,name){
        const query =  db("cohorts").where({id}).update({name});
        return query;
    },
    delete:function(id){
        const query =  db("cohorts").where(id).delete();
        return query;
    },
    getAllStudents:function(){
        const query = db.from("students").innerJoin('cohorts','students.cohortID','cohorts.id');
        return query;
    },
    insertStudent:function(cohortID,studentName){
        const query =  db("students").insert({cohortID,studentName});
        return query;
    },
    updateStudent:function(id,body){
        const query =  db("students").where({id}).update({cohortID:body.cohortID,studentName:body.studentName});
        return query;
    },
    deleteStudent:function(id){
        const query =  db("students").where({id}).delete();
        return query;
    }
}