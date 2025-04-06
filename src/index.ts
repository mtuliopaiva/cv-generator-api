import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import { userRoutes } from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", userRoutes);

app.get("/", (_req, res) => {
  res.send("API rodando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
