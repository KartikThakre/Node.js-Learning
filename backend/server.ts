import app = require("./app");

const port = 3000;

app.listen(port, () => {
  console.log(`Async server running on port ${port}`);
});