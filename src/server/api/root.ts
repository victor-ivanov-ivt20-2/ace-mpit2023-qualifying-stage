import { createTRPCRouter } from "~/server/api/trpc";
// import { exampleRouter } from "~/server/api/routers/example";
import { userRouter } from "./routers/user";
import { tenantRouter } from "./routers/tenant";
import { addressRouter } from "./routers/address";
import { requestRouter } from './routers/request';
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    user: userRouter,
    tenant: tenantRouter,
    address: addressRouter,
    request: requestRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;