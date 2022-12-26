import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { ExerciseListRelationFilterObjectSchema } from "./ExerciseListRelationFilter.schema";
import { WorkoutListRelationFilterObjectSchema } from "./WorkoutListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exercises: z.lazy(() => ExerciseListRelationFilterObjectSchema).optional(),
    workouts: z.lazy(() => WorkoutListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TagWhereInputObjectSchema = Schema;
