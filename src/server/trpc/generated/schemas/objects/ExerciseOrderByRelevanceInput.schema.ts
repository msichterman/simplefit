import { z } from "zod";
import { ExerciseOrderByRelevanceFieldEnumSchema } from "../enums/ExerciseOrderByRelevanceFieldEnum.schema";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => ExerciseOrderByRelevanceFieldEnumSchema),
      z.lazy(() => ExerciseOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const ExerciseOrderByRelevanceInputObjectSchema = Schema;
