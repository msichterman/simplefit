import { router } from "../trpc";
import { authRouter } from "./auth";
import { exerciseRouter } from "./exercise";

export const appRouter = router({
  exercise: exerciseRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
