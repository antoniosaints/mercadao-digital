import { PrismaClient } from "@prisma/client";

const UPrisma = new PrismaClient({
  errorFormat: "minimal",
  log: ["error"],
});

export { UPrisma };
