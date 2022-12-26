import { z } from "zod";
import { CustomerPaymentWhereInputObjectSchema } from "./CustomerPaymentWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentRelationFilter> = z
  .object({
    is: z
      .lazy(() => CustomerPaymentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CustomerPaymentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CustomerPaymentRelationFilterObjectSchema = Schema;
