import * as express from "express";

const application = function (PORT) {
  const server = express();

  server.use(express.json());
  server.get("/teste", (req, res) => console.log(req));

  server.listen(PORT, () => console.log("Bomb Has Been Planted..."));
};

application(3001);
