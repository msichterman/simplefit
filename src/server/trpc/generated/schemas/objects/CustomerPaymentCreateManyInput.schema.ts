import { z } from "zod";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    paymentId: z.string(),
    customerId: z.string(),
    email: z.string().optional().nullable(),
    subscriptionType: z.lazy(() => SubscriptionTypeSchema).optional(),
    createdAt: z.date().optional().nullable(),
    deletedAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const CustomerPaymentCreateManyInputObjectSchema = Schema;
