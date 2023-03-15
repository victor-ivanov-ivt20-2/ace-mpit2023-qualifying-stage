import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    createTenant: protectedProcedure
    .input(z.object({
        email: z.string(),
        firstname: z.string(),
        secondname: z.string(),
        lastname: z.string(),
        phone: z.number()
    }))
    .mutation(async ({ctx, input}) => {
        try {
            const user = await ctx.prisma.user.findUnique({
                where: {
                    email: input.email
                }
            })
            if (user?.id) {
                const tenant = await ctx.prisma.tenant.create({
                    data: {
                        firstname: input.firstname,
                        secondname: input.secondname,
                        lastname: input.lastname,
                        phone: input.phone,
                        userId: user?.id
                    }
                })
                if (tenant.id)
                await ctx.prisma.user.update({
                    where: {
                        email: input.email
                    },
                    data: {
                        tenantId: tenant.id
                    }
                })
                return tenant
            }            
        } catch (error) {
            
        }
    }),
    createBusinessman: protectedProcedure
    .input(z.object({
        email: z.string(),
        inn: z.string(),
        name: z.string(),
        address: z.number()        
    })).mutation(async ({ctx, input}) => {
        try {
            const user = await ctx.prisma.user.findUnique({
                where: {
                    email: input.email
                }
            })
            if (user?.id) {
                const busnessman = await ctx.prisma.busnessman.create({
                    data: {
                        inn: input.inn,
                        name: input.name,
                        addressId: input.address,
                        status: "Действующее",
                        userId: user?.id
                    }
                })
                if (busnessman.id)
                await ctx.prisma.user.update({
                    where: {
                        email: input.email
                    },
                    data: {
                        busnessmanId: busnessman.id
                    }
                })
                return busnessman
            }        
        } catch (error) {
            
        }
    })
})