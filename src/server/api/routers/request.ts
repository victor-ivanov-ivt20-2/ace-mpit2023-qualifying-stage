import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const requestRouter = createTRPCRouter({
    createRequest: protectedProcedure.input(z.object({
        userId: z.string(),
        address: z.string(),
        start_at: z.string(),
        finish_at: z.string(),
        people: z.string()
    })).mutation(async ({ ctx, input }) => {
        try {
            return ctx.prisma.request.create({
                data: input
            })
        } catch (error) {
            
        }
        
    }),
    getAllMyReq: publicProcedure.input(z.string()).query(async ({ctx, input}) => {
        return ctx.prisma.request.findMany({
            where: {
                userId: input
            }
        })
    })
})