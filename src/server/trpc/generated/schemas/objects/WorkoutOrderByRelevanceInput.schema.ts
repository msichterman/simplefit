import { z } from "zod";
import { WorkoutOrderByRelevanceFieldEnumSchema } from "../enums/WorkoutOrderByRelevanceFieldEnum.schema";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => WorkoutOrderByRelevanceFieldEnumSchema),
      z.lazy(() => WorkoutOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const WorkoutOrderByRelevanceInputObjectSchema = Schema;
