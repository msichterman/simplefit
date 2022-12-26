import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { TagListRelationFilterObjectSchema } from "./TagListRelationFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { UserListRelationFilterObjectSchema } from "./UserListRelationFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorkoutWhereInputObjectSchema),
        z.lazy(() => WorkoutWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorkoutWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorkoutWhereInputObjectSchema),
        z.lazy(() => WorkoutWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
    author: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    authorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    savedBy: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
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

export const WorkoutWhereInputObjectSchema = Schema;
