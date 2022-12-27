import { z } from "zod";
import { CustomerPaymentOrderByRelevanceFieldEnumSchema } from "../enums/CustomerPaymentOrderByRelevanceFieldEnum.schema";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => CustomerPaymentOrderByRelevanceFieldEnumSchema),
      z.lazy(() => CustomerPaymentOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const CustomerPaymentOrderByRelevanceInputObjectSchema = Schema;
