import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CustomerPaymentCountOrderByAggregateInputObjectSchema } from "./CustomerPaymentCountOrderByAggregateInput.schema";
import { CustomerPaymentMaxOrderByAggregateInputObjectSchema } from "./CustomerPaymentMaxOrderByAggregateInput.schema";
import { CustomerPaymentMinOrderByAggregateInputObjectSchema } from "./CustomerPaymentMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    paymentId: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    subscriptionType: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CustomerPaymentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => CustomerPaymentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => CustomerPaymentMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerPaymentOrderByWithAggregationInputObjectSchema = Schema;
