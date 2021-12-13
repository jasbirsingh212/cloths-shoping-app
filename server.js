const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');

if(process.env.NODE_ENV !== 'production'){
require('dotenv').config()
}

const stripe = require('stripe')(process.env.SECRATE_STRIPE_API_KEY)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client-side/build')))
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client-side/build', 'index.html'))
    })
}


app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'service-worker.js'));
})

app.listen(port, (error) => {
    if(error) throw(error);
    console.log(`Server running at Port ${port}`);
});

app.post('/payments', (req, res) => {
console.log(req)
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'inr',
        description: 'testing stripe'
    };


    // @ts-ignore
    stripe.charges.create(body, (stripeError, stripeRes) => {

        if(stripeError){
            res.status(500).send({ error: stripeError})
        }
        else{
            res.status(200).send({success: stripeRes})
        }
    })

})