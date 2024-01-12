import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "id-1",
        name: "Manusia 1",
        email: "manusia1@gmail.com",
        phone: "081625526352",
      },
      select: {
        id: true,
        name: true,
      },
    });

    console.log(customer);

    expect(customer).toEqual({
      id: "id-1",
      name: "Manusia 1",
    });
  });
});
