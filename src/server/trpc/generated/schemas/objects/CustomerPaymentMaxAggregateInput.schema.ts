import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    paymentId: z.literal(true).optional(),
    customerId: z.literal(true).optional(),
    email: z.literal(true).optional(),
    subscriptionType: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    deletedAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const CustomerPaymentMaxAggregateInputObjectSchema = Schema;
