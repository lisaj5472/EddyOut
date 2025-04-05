import express from "express";
import sequelize from "./config/connection.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static("../client/dist"));

app.use(express.json());
app.use(routes);

// Uncomment below for production
// sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });

// Comment this out after testing:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} (no DB sync)`);
});
