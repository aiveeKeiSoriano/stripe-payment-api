#Stripe Payment Using API
Create a console application to do the following:

Read in credit card details from the command line
Use the Stripe API to generate a Stripe token using the card details and prints the token ID
Use the Stripe API to charge the card $3.60 using the token and print the charge ID
Here is a sample console input and output:

Enter your card number: 4242 4242 4242 4242
Enter card expiry month: 5
Enter card expiry year: 2021
Enter card CVC code: 555
Created card token with id: tok_1Iig9SEsPOxnqHJKNf4smyjz
Created charge with id: ch_1Iig9TEIuOxnqKoKBq79bPx9
Note: you will need to create an account in Stripe and find documentation about how to generate the token and charge the card. After your code runs successfully check that you can see your payment listed on your Stripe dashboard web page under 'Payments'.
