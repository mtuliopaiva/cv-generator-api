import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import { userRoutes } from "./routes/userRoutes";
import { authRoutes } from "./routes/authRoutes";
import { resumeContentRoutes } from "./routes/resumeRoutes";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/resume", resumeContentRoutes);

app.get("/", (_req, res) => {
  res.send("API rodando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
