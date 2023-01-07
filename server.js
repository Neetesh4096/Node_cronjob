const app = require("./app");

const port = process.env.PORT || 2000;
app.listen(port, (req, res) => {
  console.log(`Server running at ${port}`);
});
