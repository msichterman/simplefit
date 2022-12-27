import { z } from "zod";
import { ExerciseCountOutputTypeSelectObjectSchema } from "./ExerciseCountOutputTypeSelect.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ExerciseCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ExerciseCountOutputTypeArgsObjectSchema = Schema;
