import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    paymentId: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    subscriptionType: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    customer: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const CustomerPaymentOrderByWithRelationInputObjectSchema = Schema;
