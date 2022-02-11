const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./app/routes/item.routes');
app.use(cors());
app.use(bodyParser.json());
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.use('/api', routes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
