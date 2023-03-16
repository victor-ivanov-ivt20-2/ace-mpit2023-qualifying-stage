import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    createTenant: protectedProcedure
        .input(z.object({
            firstname: z.string(),
            secondname: z.string(),
            lastname: z.string(),
            phone: z.number(),
            city: z.string(),
            region: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.prisma.tenant.create({
                        data: {
                            firstname: input.firstname,
                            secondname: input.secondname,
                            lastname: input.lastname,
                            phone: input.phone,
                            city: input.city,
                            region: input.region
                        }
                    })
                } catch (error) {

            }
        }),
    createBusinessman: protectedProcedure
        .input(z.object({
            email: z.coerce.string(),
            inn: z.string(),
            name: z.string(),
            address: z.number()
        })).mutation(async ({ ctx, input }) => {
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
        }),
    createInformation: protectedProcedure
        .input(z.object({
            firstname: z.string(),
            secondname: z.string(),
            lastname: z.string(),
            birthday: z.string(),
            phone: z.string(),
            passport: z.string(),
            inn: z.string(),
            userId: z.string()
        })).mutation(async ({ ctx, input }) => {
            try {
                await ctx.prisma.information.create({
                    data: {
                        firstname: input.firstname,
                        secondname: input.secondname,
                        lastname: input.lastname,
                        birthday: input.birthday,                       
                        phone: input.phone,
                        passport: input.passport,
                        inn: input.inn,
                        userId: input.userId
                    }
                })
            } catch (error) {
                console.log(error)
            }
        })
})