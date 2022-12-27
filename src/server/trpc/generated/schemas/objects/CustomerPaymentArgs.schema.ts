import { z } from "zod";
import { CustomerPaymentSelectObjectSchema } from "./CustomerPaymentSelect.schema";
import { CustomerPaymentIncludeObjectSchema } from "./CustomerPaymentInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentArgs> = z
  .object({
    select: z.lazy(() => CustomerPaymentSelectObjectSchema).optional(),
    include: z.lazy(() => CustomerPaymentIncludeObjectSchema).optional(),
  })
  .strict();

export const CustomerPaymentArgsObjectSchema = Schema;
