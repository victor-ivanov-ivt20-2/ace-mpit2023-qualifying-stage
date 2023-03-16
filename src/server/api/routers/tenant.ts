import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";

export const tenantRouter = createTRPCRouter({
    getTenantByUserId: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
        const user = await ctx.prisma.user.findUnique({
            where: {
                id: input
            }
        })
        if (user?.tenantId)
            return ctx.prisma.tenant.findUnique({
                where: {
                    id: user.tenantId
                }
            })
        return null
    })
})