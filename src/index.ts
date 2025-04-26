import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import { userRoutes } from "./routes/userRoutes";
import { authRoutes } from "./routes/authRoutes";
import { resumeRoutes } from "./routes/resumeRoutes";
import { experienceRoutes } from "./routes/experienceRoutes";
import { languageRoutes } from "./routes/languageRoutes";
import { templateRoutes } from "./routes/templateRoutes";
import { resumeContentRoutes } from "./routes/resumeContentRoutes";
import { formationRoutes } from "./routes/formationRoutes";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);
app.use("/resume-content", resumeContentRoutes);
app.use("/formation", formationRoutes);
app.use("/experience", experienceRoutes);
app.use("/language", languageRoutes);
app.use("/template", templateRoutes);

app.get("/", (_req, res) => {
  res.send("API rodando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
