import { port } from "./config.js";
import app from "./app.js";

app.listen(port);
console.log("listening in", port);
