const express = require("express");
const app = express();
const dotenv = require('dotenv');
const { spotifyRouter } = require("./Routes/qtifyRoutes");

const cors = require('cors');


dotenv.config();

const PORT = process.env.PORT;
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.use("/api/spotify", spotifyRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
