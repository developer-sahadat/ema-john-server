const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ddf2r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("DB Hi");
  // perform actions on the collection object
  client.close();
});

async function run() {
  try {
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (reg, res) => {
  res.send("Hello Express Js");
});

app.listen(port, () => {
  console.log("ok");
});
