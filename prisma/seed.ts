import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("123456", 10);

  const user = await prisma.user.create({
    data: {
      name: "Peter Parker",
      email: "spiderman@marvel.com",
      password: passwordHash,
    },
  });

  await prisma.resumeContent.create({
    data: {
      userId: user.id,
      fullName: "Peter Parker",
      email: "spiderman@marvel.com",
      phone: "(11) 99999-9999",
      objective: "Atuar como fotógrafo profissional",
      summary:
        "Responsável, ágil e dedicado. Experiência em jornalismo e cobertura de eventos.",
      keywords: ["fotografia", "jornalismo", "aventura"],
      techSkills: ["Photoshop", "Lightroom", "Capture One"],
    },
  });

  await prisma.formation.create({
    data: {
      userId: user.id,
      institution: "Empire State University",
      course: "Ciências da Comunicação",
      startDate: new Date("2015-01-01"),
      endDate: new Date("2019-12-31"),
    },
  });

  await prisma.experience.create({
    data: {
      userId: user.id,
      company: "Daily Bugle",
      role: "Fotógrafo",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2023-01-01"),
      responsibilities: [
        "Cobertura de eventos",
        "Fotografias para jornal",
        "Edição de imagens",
      ],
    },
  });

  await prisma.language.create({
    data: {
      userId: user.id,
      name: "Inglês",
      level: "Fluente",
    },
  });

  await prisma.template.create({
    data: {
      title: "Template Moderno",
      content: `
        <html>
          <head><title>Currículo</title></head>
          <body>
            <h1>{{fullName}}</h1>
            <p>Email: {{email}}</p>
            <p>Telefone: {{phone}}</p>
            <h2>Objetivo</h2>
            <p>{{objective}}</p>
            <h2>Resumo</h2>
            <p>{{summary}}</p>
          </body>
        </html>
      `,
    },
  });

  console.log("✅ Seed executada com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
