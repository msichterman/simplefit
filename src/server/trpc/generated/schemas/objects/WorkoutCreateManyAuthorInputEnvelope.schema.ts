import { z } from "zod";
import { WorkoutCreateManyAuthorInputObjectSchema } from "./WorkoutCreateManyAuthorInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.lazy(() => WorkoutCreateManyAuthorInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const WorkoutCreateManyAuthorInputEnvelopeObjectSchema = Schema;
