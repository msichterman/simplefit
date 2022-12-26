import { z } from "zod";
import { WorkoutWhereInputObjectSchema } from "./WorkoutWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutListRelationFilter> = z
  .object({
    every: z.lazy(() => WorkoutWhereInputObjectSchema).optional(),
    some: z.lazy(() => WorkoutWhereInputObjectSchema).optional(),
    none: z.lazy(() => WorkoutWhereInputObjectSchema).optional(),
  })
  .strict();

export const WorkoutListRelationFilterObjectSchema = Schema;
