const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('allsssssas');

})

const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '01788636343' },
    { id: 1, name: 'shabnur', email: 'shabnur@gmail.com', phone: '017844463543' },
    { id: 2, name: 'razzak', email: 'razzak@gmail.com', phone: '01786344446343' },
    { id: 3, name: 'bapparaj', email: 'bapparaj@gmail.com', phone: '017886174633' },
    { id: 4, name: 'akash', email: 'akash@gmail.com', phone: '0178634463' }
]
const love = [
    { name: 'alamin' },
    { name: 363 }
]

app.get('/users', (req, res) => {

    //user query params
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
})

//app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hiting', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic params
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammi Ymmyd moja')
})

app.get('/alamin', (req, res) => {
    res.send(love)
})

app.get('/alamin/:shakila', (req, res) => {

    const id = req.params.shakila;
    const lo = love[id];
    res.send(lo)
})

app.listen(port, () => {
    console.log('listing to port', port);
})