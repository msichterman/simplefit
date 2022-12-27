import { z } from "zod";
import { CustomerPaymentIncludeObjectSchema } from "./CustomerPaymentInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentArgs> = z
  .object({
    include: z.lazy(() => CustomerPaymentIncludeObjectSchema).optional(),
  })
  .strict();

export const CustomerPaymentArgsObjectSchema = Schema;
