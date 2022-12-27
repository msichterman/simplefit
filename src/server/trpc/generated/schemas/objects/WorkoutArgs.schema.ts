import { z } from "zod";
import { WorkoutIncludeObjectSchema } from "./WorkoutInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutArgs> = z
  .object({
    include: z.lazy(() => WorkoutIncludeObjectSchema).optional(),
  })
  .strict();

export const WorkoutArgsObjectSchema = Schema;
