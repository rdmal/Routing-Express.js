
import teamsRoute from './routes/teams.js'
import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
const home = (request, response) => {
    response.send('home')
}
 const teams = (request, response) => {
     response.send('teams')
 }

app.get('/',home)     //localhost:3000/ -> home
app.use('/teams', teamsRoute)   //localhost:3000/ -> teams

app.listen( port, () => console.log('listening on localhost:3000'))
