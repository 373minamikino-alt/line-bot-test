import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("LINEから受信:", req.body);

  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("LINE BOT 起動中");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
