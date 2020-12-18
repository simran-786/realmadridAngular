import express from 'express';
import {v4 as uuidv4} from 'uuid';


const router = express.Router();

let players = [];

router.get('/', (req, res) => {
    res.send(players);
});

router.post('/', (req, res) => {
  
    const player = req.body;
    
    players.push({ ... player, id: uuidv4() });

    res.send(`Players with the name ${player.firstname} added to the database!`);
    
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    const foundPlayer = players.find((player) => player.id = id);

    res.send(foundPlayer);
});

router.delete('/:id', (req, res) => {
const { id }= req.params;

players = players.filter((player) => player.id != id);

res.send(`User with the id ${id} deleted from the database.`);
});

router.patch('/:id', (req, res) => {
const { id } = req.params;
const { firstname, lastname, Role, TotalGoals, TotalAssists, TotalClearances, TotalInterceptions, TotalDribblesCreated } = req.body;

const player = players.find((player) => player.id = id);

if(firstname) player.firstname = firstname
if(lastname) player.lastname = lastname
if(Role) player.Role = Role
if(TotalGoals) player.TotalGoals = TotalGoals
if(TotalAssists) player.TotalAssists = TotalAssists
if(TotalClearances) player.TotalClearances = TotalClearances
if(TotalInterceptions) player.TotalInterceptions = TotalInterceptions
if(TotalDribblesCreated) player.TotalDribblesCreated = TotalDribblesCreated

res.send(`User witht he id ${id} has been updated`);

})


export default router;