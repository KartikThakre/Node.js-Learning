import express = require("express");
type Request = import("express").Request;
type Response = import("express").Response;

const app = express();
const port = 3000;

//? express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This allows us to access the data sent in the request body as req.body in our route handlers.
app.use(express.json());

// Fake database call
function fetchEmployee(): Promise<object> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        employeeId: "E100",
        company: "Accenture"
      });
        //reject(new Error("Database failed"));

      // try changing resolve → reject(new Error("Database failed"))
    }, 2000);
  });
}

// Async route
app.get("/employee", async (req: Request, res: Response) => {
  try {
    console.log("Fetching employee...");

    const employee = await fetchEmployee();

    res.status(200).json(employee);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch employee"
    });
  }
});

app.listen(port, () => {
  console.log(`Async server running on port ${port}`);
});