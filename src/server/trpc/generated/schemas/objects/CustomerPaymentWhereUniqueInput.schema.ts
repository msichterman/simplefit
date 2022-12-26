import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    paymentId: z.string().optional(),
    customerId: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const CustomerPaymentWhereUniqueInputObjectSchema = Schema;
