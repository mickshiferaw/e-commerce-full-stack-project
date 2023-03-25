const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51MeCwjBBeJFJZe7YUGCXE7hhcZdiyqZzVKphk9pGe0ZwFR5Z79iVBbDGZ7UdOCJXqygmvwlrhnlER9m3BSu1kNu500XOh9Wsv8");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

