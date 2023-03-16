import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const requestRouter = createTRPCRouter({
    getAllTenantsProperty: publicProcedure.
        query(async ({ ctx }) => {
            return ctx.prisma.tenant.findMany({
                select: {
                    city: true,
                    region: true,
                    id: true
                }
            })
        }),
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
        
    })
})