import { z } from "zod";
import { SessionIncludeObjectSchema } from "./SessionInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SessionArgs> = z
  .object({
    include: z.lazy(() => SessionIncludeObjectSchema).optional(),
  })
  .strict();

export const SessionArgsObjectSchema = Schema;
