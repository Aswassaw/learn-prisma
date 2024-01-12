// import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // it("can execute sequential transaction", async () => {
  //   const [baba1, baba2] = await prismaClient.$transaction([
  //     prismaClient.customer.create({
  //       data: {
  //         id: "baba-3",
  //         name: "Baba 3",
  //         email: "baba1@gmail.com",
  //         phone: "081234567894",
  //       },
  //     }),
  //     prismaClient.customer.create({
  //       data: {
  //         id: "baba-2",
  //         name: "Baba 2",
  //         email: "baba2@gmail.com",
  //         phone: "085283727273",
  //       },
  //     }),
  //   ]);

  //   expect(baba1.name).toBe("Baba 1");
  //   expect(baba2.name).toBe("Baba 2");
  // });

  // it("can be interactive transaction", async () => {
  //   const [baba1, baba2] = await prismaClient.$transaction(
  //     async (prisma) => {
  //       const baba1 = await prisma.customer.create({
  //         data: {
  //           id: "baba-1",
  //           name: "Baba 1",
  //           email: "baba1@gmail.com",
  //           phone: "081234567894",
  //         },
  //       });
  //       const baba2 = await prisma.customer.create({
  //         data: {
  //           id: "baba-2",
  //           name: "Baba 2",
  //           email: "baba2@gmail.com",
  //           phone: "085283727273",
  //         },
  //       });
  //       return [baba1, baba2];
  //     },
  //     { timeout: 5000 }
  //   );

  //   expect(baba1.name).toBe("Baba 1");
  //   expect(baba2.name).toBe("Baba 2");
  // });

  // it("can be use create many", async () => {
  //   const data = await prismaClient.customer.createMany({
  //     data: [
  //       {
  //         id: "asw-1",
  //         name: "Asw 1",
  //         email: "asw1@gmail.com",
  //         phone: "085364736253",
  //       },
  //       {
  //         id: "asw-2",
  //         name: "Asw 2",
  //         email: "asw2@gmail.com",
  //         phone: "085364736253",
  //       },
  //       {
  //         id: "asw-3",
  //         name: "Asw 3",
  //         email: "asw3@gmail.com",
  //         phone: "085364736253",
  //       },
  //     ],
  //   });

  //   expect(data.count).toBe(3);
  // });

  // it("can be use read many", async () => {
  //   const data = await prismaClient.customer.findMany({
  //     // take: 1,
  //     // skip: 1,
  //     // skip: 99,
  //     orderBy: [
  //       {
  //         name: "desc",
  //       },
  //       {
  //         email: "asc",
  //       },
  //     ],
  //   });

  //   // expect(data[0].name).toBe("Asw 3");
  //   expect(data.length).toBe(0);
  // });
});
