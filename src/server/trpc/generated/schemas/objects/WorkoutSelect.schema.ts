import { z } from "zod";
import { TagFindManySchema } from "../findManyTag.schema";
import { UserArgsObjectSchema } from "./UserArgs.schema";
import { UserFindManySchema } from "../findManyUser.schema";
import { ExerciseFindManySchema } from "../findManyExercise.schema";
import { WorkoutCountOutputTypeArgsObjectSchema } from "./WorkoutCountOutputTypeArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
    author: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    authorId: z.boolean().optional(),
    savedBy: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    exercises: z
      .union([z.boolean(), z.lazy(() => ExerciseFindManySchema)])
      .optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => WorkoutCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const WorkoutSelectObjectSchema = Schema;
