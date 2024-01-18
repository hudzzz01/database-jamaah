import routerJamaah from "./router/router.jamaah.js";
import cors from "cors"
import app from "./app.js";
import routerAuth from "./router/router.auth.js";

const port = 3002;
app.use(cors({
  origin: '*',
}));
app.use("/jamaah",routerJamaah);
app.use("/auth",routerAuth);


app.listen(port)
console.log(`listen in ${port}`)
