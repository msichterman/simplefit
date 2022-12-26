import { z } from "zod";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentCreateWithoutCustomerInput> = z
  .object({
    id: z.string().optional(),
    paymentId: z.string(),
    email: z.string().optional().nullable(),
    subscriptionType: z.lazy(() => SubscriptionTypeSchema).optional(),
    createdAt: z.date().optional().nullable(),
    deletedAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const CustomerPaymentCreateWithoutCustomerInputObjectSchema = Schema;