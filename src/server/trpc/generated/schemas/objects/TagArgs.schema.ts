import { z } from "zod";
import { TagIncludeObjectSchema } from "./TagInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagArgs> = z
  .object({
    include: z.lazy(() => TagIncludeObjectSchema).optional(),
  })
  .strict();

export const TagArgsObjectSchema = Schema;
