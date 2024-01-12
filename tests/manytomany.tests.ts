import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // it("should can many to many", async () => {
  //   const like = await prismaClient.like.create({
  //     data: {
  //       customer_id: "bambang-1",
  //       product_id: "id-1",
  //     },
  //     include: {
  //       customer: true,
  //       product: true,
  //     },
  //   });

  //   console.log(like);
  // });

  // it("should can find one with many to many relation", async () => {
  //   const customer = await prismaClient.customer.findUnique({
  //     where: {
  //       id: "bambang-1",
  //     },
  //     include: {
  //       likes: {
  //         include: {
  //           product: true,
  //         },
  //       },
  //     },
  //   });

  //   console.log(customer);
  // });

  it("should can find many with many to many relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "1",
                mode: "insensitive",
              },
            },
          },
        },
      },
    });

    console.log(customers);
  });
});
