import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // it("should can one to many", async () => {
  //   const comment = await prismaClient.comment.create({
  //     data: {
  //       customer_id: "id-babi",
  //       title: "Ini Komentar",
  //       description: "Lorem ipsum",
  //     },
  //     include: {
  //       customer: true,
  //     },
  //   });

  //   console.log(comment);
  // });

  // it("should can insert with one to many", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "bambang-1",
  //       name: "Bambang 1",
  //       email: "bambang1@gmail.com",
  //       phone: "081625526352",
  //       comments: {
  //         createMany: {
  //           data: [
  //             {
  //               title: "Ini ANA",
  //               description: "Lorem ipsum",
  //             },
  //             {
  //               title: "Ini ANA 2",
  //               description: "Lorem ipsum 2",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   });

  //   console.log(customer);
  // });

  it("should can find many with filter condition", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "ana",
              mode: "insensitive",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.log(customer);
  });
});
