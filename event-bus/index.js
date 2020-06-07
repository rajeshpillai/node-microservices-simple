const express = require('express');
var router = express.Router()

const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

router.post('/', (req, res) => {
  console.log("Notifying events...");
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:4000/posts/events', event);
  axios.post('http://localhost:4001/comments/events', event);
  axios.post('http://localhost:4002/query/events', event);
  axios.post('http://localhost:4003/moderation/events', event);


  res.send({ status: 'OK' });
});

router.get('/', (req, res) => {
  res.send(events);
});

app.use((req, res, next) => {
  console.log("EventBus received message...");
  next();
})
app.use("/events", router);

app.listen(4005, () => {
  console.log('EventBus Service Listening on 4005');
});
