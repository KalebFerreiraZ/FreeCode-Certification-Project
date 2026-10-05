import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});
app.get('/api/:date?', (req, res) => {
  const data = req.params.date;

  if (!data) {
    const now = new Date();

    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString()
    });
  }

  const client = new Date(
    /^\d+$/.test(data) ? Number(data) : data
  );

  if (isNaN(client.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: client.getTime(),
    utc: client.toUTCString()
  });
});
// Do not change code above this line

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
