import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";

export const tenantRouter = createTRPCRouter({
    getAllTenantsProperty: publicProcedure.
        query(async ({ ctx }) => {
            return ctx.prisma.tenantsProperty.findMany()
        }),
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