import readline from "readline";
import { exec } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the migration name: ", (name) => {
  if (!name.trim()) {
    console.error("❌ Migration name cannot be empty!");
    rl.close();
    return;
  }

  const command = `npx prisma migrate dev --name ${name}`;
  console.log(`\n🛠️  Running: ${command}\n`);

  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Error running the migration:\n${stderr}`);
    } else {
      console.log(stdout);
    }
    rl.close();
  });
});
