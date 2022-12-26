import { z } from "zod";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";
import { UserCreateNestedOneWithoutCustomerPaymentInputObjectSchema } from "./UserCreateNestedOneWithoutCustomerPaymentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentCreateInput> = z
  .object({
    id: z.string().optional(),
    paymentId: z.string(),
    email: z.string().optional().nullable(),
    subscriptionType: z.lazy(() => SubscriptionTypeSchema).optional(),
    createdAt: z.date().optional().nullable(),
    deletedAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
    customer: z.lazy(
      () => UserCreateNestedOneWithoutCustomerPaymentInputObjectSchema
    ),
  })
  .strict();

export const CustomerPaymentCreateInputObjectSchema = Schema;
