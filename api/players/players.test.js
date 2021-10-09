const request = require("supertest")
const db = require("../../data/db-config")
const server = require("../server")
const Player = require("./model")

const player1 = { player_name: 'Paul Pogba',goals:0,assists:7,appearances:9}
const player2 = { player_name: 'Cristiano Ronaldo',goals:5,assists:0,appearances:6}

beforeAll(async ()=> {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=>{
    await db("players").truncate()
})

afterAll(async ()=>{
    await db.destroy()
})

it("correct env variable", () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe("Players model functions",()=>{
    describe("creates a player",()=>{
        it("adds a player to the db",async()=>{
            await Player.createPlayer(player1)
            let players = await db("players")
            expect(players).toHaveLength(1)
        })
        it("created player has all props", async()=>{
            const first = await Player.createPlayer(player1)
            const second = await Player.createPlayer(player2)
            expect(first).toMatchObject({player_id:1,...player1})
            expect(second).toMatchObject({player_id:2,...player2})
        })
    })
    describe("deletes a player",()=>{
        it("removes player form db",async()=>{
            const [player_id] = await db("players").insert(player1)
            let player = await db("players").where({player_id}).first()
            expect(player).toBeTruthy()
            await request(server).delete(`/players/${player_id}`)
            player = await db("players").where({player_id}).first()
            expect(player).toBeFalsy()
        })
        it("responds with the deleted player", async()=>{
            const [player_id] = await db("players").insert(player1)
            const deletedPlayer = await request(server).delete(`/players/${player_id}`)
            expect(deletedPlayer.body).toMatchObject(player1)
        })
    })
})