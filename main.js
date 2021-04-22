var readlineSync = require('readline-sync');

let cardNum = readlineSync.question('Enter your card number: ');
let expiryMonth = readlineSync.question('Enter card expiry month: ');
let expiryYear = readlineSync.question('Enter card expiry year: ');
let cvc = readlineSync.question('Enter card CVC code: ');

getToken(parseInt(cardNum.replace(/\s/g, '')), parseInt(expiryMonth), parseInt(expiryYear), parseInt(cvc))

async function getToken(num, mon, yr, code) {
    try {
        const stripe = require('stripe')('sk_test_51IitBzLekueZ7GhUJRa0gNZsGqmWGJZH5EQRapP30j4pldq4FVrtqVZfMSSAnxZ17scA2RtiGTaAXUlsu7j9Od8800R3htOQsW');
        const token = await stripe.tokens.create({
            card: {
                number: num,
                exp_month: mon,
                exp_year: yr,
                cvc: code,
            },
        });
        console.log('Created card token with id: ' + token.id)
        charge(token.id)
    }
    catch (e) {
        console.log(e.message)
    }
}

async function charge(tok) {
    try {
        const stripe = require('stripe')('sk_test_51IitBzLekueZ7GhUJRa0gNZsGqmWGJZH5EQRapP30j4pldq4FVrtqVZfMSSAnxZ17scA2RtiGTaAXUlsu7j9Od8800R3htOQsW');
        const charge = await stripe.charges.create({
            amount: 360,
            currency: 'usd',
            source: tok,
            description: 'My First Test Charge (created for API docs)',
        });
        console.log('Created charge with id: ' + charge.id)
    }
    catch (e) {
        console.log(e.message)
    }
}