const experss = require('express')
var cors = require('cors')
const app = experss()
const port = 5000

app.use(cors())
app.use(experss.json())

app.get('/', (req, res) => {
    res.send('Hello from second nodejs express')
})
const users = [
    {id: 0, name: 'Hero Alom', email: 'heroalom@gamail.com', phone: '09876433543'},
    {id: 1, name: 'Sakib Khan', email: 'sakib@gamail.com', phone: '09876422543'},
    {id: 2, name: 'Zayed Khan', email: 'Zayed@gamail.com', phone: '09876444543'},
    {id: 3, name: 'Bappi Bro', email: 'bappi@gamail.com', phone: '09876445543'},
    {id: 4, name: 'Ananta Joliol', email: 'ananta@gamail.com', phone: '09876466543'},
    {id: 5, name: 'Adnan Adi', email: 'adnan@gamail.com', phone: '09876477543'},
]
app.get('/users', (req, res) => {
    const search =req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(users)
    }
//app. METHOD
    app.post('/users', (req, res) => {
        const newUser = req.body
        newUser.id = users.length
        users.push(newUser)
        console.log('hiting the post', req.body)
        //res.send(JSON.stringify(newUser))
        res.json(newUser)
    })
    
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orang', 'banana', 'apple'])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('Tok Fazli')
})

app.listen(port, () => {
    console.log("listing to port", port);
})