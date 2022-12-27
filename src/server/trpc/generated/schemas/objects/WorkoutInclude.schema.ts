import { z } from "zod";
import { TagFindManySchema } from "../findManyTag.schema";
import { UserArgsObjectSchema } from "./UserArgs.schema";
import { UserFindManySchema } from "../findManyUser.schema";
import { ExerciseFindManySchema } from "../findManyExercise.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutInclude> = z
  .object({
    tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
    author: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    savedBy: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    exercises: z
      .union([z.boolean(), z.lazy(() => ExerciseFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const WorkoutIncludeObjectSchema = Schema;
