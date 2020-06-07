const express = require('express');
var router = express.Router()

const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const events_url = "http://localhost:9000/events";


router.get('/', (req, res) => {
  res.send(posts);
});

router.post('/', async (req, res) => {
  console.log("Post request received...");
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  await axios.post(events_url, {
    type: 'PostCreated',
    data: {
      id,
      title
    }
  });

  res.status(201).send(posts[id]);
});

router.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

app.use((req, res, next) => {
  console.log("Request received: ", req.body, req.params);
  next();
})

app.use("/posts", router);

app.listen(4000, () => {
  console.log('Posts Service Listening on 4000');
});
