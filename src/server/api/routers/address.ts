import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const addressRouter = createTRPCRouter({
    getAddress: publicProcedure.
    input(z.number()).
    query(({ctx, input}) => {
        return ctx.prisma.address.findUniqueOrThrow({
            where: {
                id: input
            }
        })
    }),
    setAddress: protectedProcedure.input(z.object({
        country: z.string(),
        region: z.string(),
        city: z.string(),
        district: z.string(),
        street: z.string()
    })).mutation(async ({ctx, input}) => {
        return ctx.prisma.address.create({
            data: input
        })
    })
})