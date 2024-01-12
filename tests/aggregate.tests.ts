import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to aggregate", async () => {
    // const result = await prismaClient.product.aggregate({
    //   _min: {
    //     price: true,
    //     stock: true,
    //   },
    //   _max: {
    //     price: true,
    //     stock: true,
    //   },
    //   _avg: {
    //     price: true,
    //     stock: true,
    //   },
    //   where: {
    //     price: {
    //       gte: 10000,
    //     },
    //   },
    // });
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
      // where: {
      //   price: {
      //     gte: 10000,
      //   },
      // },
      having: {
        price: {
          _avg: {
            gt: 10000,
          }
        }
      }
    });

    console.log(result);
  });
});
