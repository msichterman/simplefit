// import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exerciseRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.exercise.findMany();
  }),
});
