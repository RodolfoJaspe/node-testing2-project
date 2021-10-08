
exports.up = function(knex) {
    return knex.schema
        .createTable("players", tbl => {
            tbl.increments("player_id")
            tbl.string("player_name")
                .notNullable()
            tbl.integer("appearances")
                .notNullable()
            tbl.integer("goals")
                .notNullable()
            tbl.integer("assists")
                .notNullable()
        })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("players")
};
