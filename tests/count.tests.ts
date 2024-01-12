import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can count", async () => {
    const count = await prismaClient.customer.count({
      skip: 1,
    });
    expect(count).toBe(0);
  });
});
