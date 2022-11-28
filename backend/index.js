const express = require('express')
const app = express()
const cors = require('cors')

let users= [];

app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use(express.json())

app.listen(3000);
console.log("app running at http://localhost:3000");

app.post('/register', async (request, result) => {  

    if (!request.body.username , !request.body.email , !request.body.password) {
        result.status(400).send("Bad request missing: name, email, password");
        return;
    }

    try {
        let user = {
            username: request.body.username,
            email: request.body.email,
            password: request.body.password
        };

        users.push(user);

        result.status(201).send("Het is gelukt!");
        console.log(users);

    } catch (error) {
        result.status(500).send('Oeps, Het ging fout.');
    }
});

  