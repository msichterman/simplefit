import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { EnumSubscriptionTypeWithAggregatesFilterObjectSchema } from "./EnumSubscriptionTypeWithAggregatesFilter.schema";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => CustomerPaymentScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => CustomerPaymentScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CustomerPaymentScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => CustomerPaymentScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => CustomerPaymentScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      paymentId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      customerId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      email: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      subscriptionType: z
        .union([
          z.lazy(() => EnumSubscriptionTypeWithAggregatesFilterObjectSchema),
          z.lazy(() => SubscriptionTypeSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional()
        .nullable(),
      deletedAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const CustomerPaymentScalarWhereWithAggregatesInputObjectSchema = Schema;
