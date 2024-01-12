import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // it("one to one relation", async () => {
  //   const wallet = await prismaClient.wallet.create({
  //     data: {
  //       customer_id: "id-1",
  //       balance: 1000000,
  //     },
  //     select: {
  //       id: true,
  //       balance: true,
  //       customer: {
  //         select: {
  //           id: true,
  //           email: true,
  //           name: true,
  //         },
  //       },
  //     },
  //     // include: {
  //     //   customer: true
  //     // }
  //   });

  //   console.log(wallet);
  // });

  // it("should can create with relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "id-babi",
  //       name: "Babi",
  //       email: "babi@gmail.com",
  //       phone: "082636263828",
  //       wallet: {
  //         create: {
  //           balance: 5000000,
  //         },
  //       },
  //     },
  //     include: {
  //       wallet: true,
  //     },
  //   });

  //   console.log(customer);
  // });

  it("should can select one to one wit relation filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
        // wallet: {
        //   is: {
        //     balance: {
        //       lt: 6000000
        //     },
        //   }
        // }
      },
      include: {
        wallet: true,
      },
    });

    console.log(customer);
  });
});
