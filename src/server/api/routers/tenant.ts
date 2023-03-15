// import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";

export const tenantRouter = createTRPCRouter({
    getAllTenantsProperty: publicProcedure.
    query(({ctx}) => {
        return ctx.prisma.tenantsProperty.findMany()
    })
})