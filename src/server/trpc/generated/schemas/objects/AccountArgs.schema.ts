import { z } from "zod";
import { AccountIncludeObjectSchema } from "./AccountInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AccountArgs> = z
  .object({
    include: z.lazy(() => AccountIncludeObjectSchema).optional(),
  })
  .strict();

export const AccountArgsObjectSchema = Schema;
