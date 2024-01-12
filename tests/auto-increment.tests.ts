import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to insert with auto increment", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Elektronik",
      },
      select: {
        name: true,
      },
    });

    expect(category.name).toBe("Elektronik");
  });
});
