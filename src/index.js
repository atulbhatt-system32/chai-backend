import dotenv from "dotenv";

import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("ERROR: ", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       `APP is listening on PORT ${process.env.PORT}`;
//     });
//   } catch (err) {
//     console.log("ERROR: ", err);
//     throw err;
//   }
// })();
