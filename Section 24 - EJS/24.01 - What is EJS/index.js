import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const dayOfTheWeek = today.getDay();

    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
        res.render("index.ejs", {
            message: "It's the weekend, it's time to have fun!",
        });
    } else {
        res.render("index.ejs", {
            message: "It's a weekday, it's time to work hard!",
        });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
