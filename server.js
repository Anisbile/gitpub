const express = require('express');

const app = express();

const drinks = require('./models/drinks.js')

const food = require('./models/food.js')

const port = 3000;


app.get('/drinks/', function(req, res) {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
 })


app.get('/drinks', function(req, res) {
    res.send(drinks)
})
app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.indexOfDrinksArray],
    })

})
app.get('/food/', function(req, res) {
    res.render('food_index.ejs', {
        allFoods: food
    })
 })


app.get('/food', function(req, res) {
    res.send(food)
})
app.get('/food/:indexOfFoodArray', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.indexOfFoodArray],
    })

})
app.get('/', function(req, res) {
    
    res.send('Welcome to the Gitpub App!');
})

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
})