import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // it("should create implicit relation", async () => {
  //   const customer = await prismaClient.customer.update({
  //     where: {
  //       id: "id-kalsit",
  //     },
  //     data: {
  //       loves: {
  //         // connect: [
  //         //   {
  //         //     id: "id-2",
  //         //   },
  //         //   {
  //         //     id: "id-3",
  //         //   },
  //         // ],
  //         disconnect: [
  //           {
  //             id: "id-3"
  //           }
  //         ]
  //       },
  //     },
  //     include: {
  //       loves: true,
  //     },
  //   });

  //   console.log(customer);
  // });

  it("should find many implicit relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "2",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });

    console.log(customer);
  });
});
