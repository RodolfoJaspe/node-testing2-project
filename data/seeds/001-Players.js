
const players = [
    { player_name: 'Paul Pogba',goals:0,assists:7,appearances:9},
    { player_name: 'Cristiano Ronaldo',goals:5,assists:0,appearances:6},
    { player_name: 'Lionel Messi',goals:1,assists:0,appearances:5 },
    { player_name: 'Kylian Mbappé',goals:4,assists:3,appearances:11 },
  ]
  
  exports.players = players
  
  exports.seed = function (knex) {
    return knex('players').insert(players)
  }