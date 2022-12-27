import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./UserOrderByWithRelationAndSearchRelevanceInput.schema";
import { CustomerPaymentOrderByRelevanceInputObjectSchema } from "./CustomerPaymentOrderByRelevanceInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      paymentId: z.lazy(() => SortOrderSchema).optional(),
      customerId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      subscriptionType: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      deletedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      customer: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => CustomerPaymentOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
