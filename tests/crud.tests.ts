import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to create customer", async () => {
    // const customer = await prismaClient.customer.create({
    //   data: {
    //     id: "id-1",
    //     name: "Andry Pebrianto",
    //     email: "andrypeb227@gmail.com",
    //     phone: "08123456789",
    //   },
    // });

    // const customer = await prismaClient.customer.update({
    //   data: {
    //     name: "Andry Pebrianto Update",
    //   },
    //   where: {
    //     id: "id-1",
    //   },
    // });

    // const customer = await prismaClient.customer.findFirst({
    //   where: {
    //     id: "id-1",
    //   },
    // });

    // const customer = await prismaClient.customer.findFirstOrThrow({
    //   where: {
    //     id: "id-1",
    //   },
    // });

    const customer = await prismaClient.customer.delete({
      where: {
        id: "id-1",
      },
    });

    expect(customer.id).toBe("id-1");
    expect(customer.name).toBe("Andry Pebrianto Update");
    expect(customer.email).toBe("andrypeb227@gmail.com");
    expect(customer.phone).toBe("08123456789");
  });
});
