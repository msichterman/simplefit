import { z } from "zod";
import { UserArgsObjectSchema } from "./UserArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentInclude> = z
  .object({
    customer: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const CustomerPaymentIncludeObjectSchema = Schema;
