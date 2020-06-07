const express = require('express');
var router = express.Router()

const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

router.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.includes('apple') ? 'rejected' : 'approved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    });
  }

  res.send({});
});

app.use("/moderation", router);

app.listen(4003, () => {
  console.log('Moderation Service Listening on 4003');
});
