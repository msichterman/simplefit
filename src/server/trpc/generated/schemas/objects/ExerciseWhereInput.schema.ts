import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { TagListRelationFilterObjectSchema } from "./TagListRelationFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExerciseWhereInputObjectSchema),
        z.lazy(() => ExerciseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExerciseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExerciseWhereInputObjectSchema),
        z.lazy(() => ExerciseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    difficulty: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sets: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    reps: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    rest: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
    exampleLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
  })
  .strict();

export const ExerciseWhereInputObjectSchema = Schema;
