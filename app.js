const express = require("express"); 
const {router} = require("./src/routes/user/user-routes");
const app = express();
const PORT = 3000;

app.use("/joke", router);
app.get("/", (req, res) => {
res.send(`Welcome here!
To view a random joke, go through localhost:3000/joke.
To view full details of a joke, use localhost:3000/joke/details
`);
});

app.listen(PORT, () =>{
console.log('server running at port', PORT)
});



