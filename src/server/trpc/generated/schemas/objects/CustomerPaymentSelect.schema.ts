import { z } from "zod";
import { UserArgsObjectSchema } from "./UserArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentSelect> = z
  .object({
    id: z.boolean().optional(),
    paymentId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    email: z.boolean().optional(),
    subscriptionType: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    customer: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const CustomerPaymentSelectObjectSchema = Schema;
