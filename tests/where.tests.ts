import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can using or operator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: "Product 1",
          },
          {
            name: "Product 2",
          },
        ],
      },
      orderBy: {
        name: "desc",
      },
    });

    expect(products.length).toBe(2);
    expect(products[0].name).toBe("Product 2");
    expect(products[1].name).toBe("Product 1");
  });
});
