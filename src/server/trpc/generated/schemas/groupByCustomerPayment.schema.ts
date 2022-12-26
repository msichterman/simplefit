import { z } from "zod";
import { CustomerPaymentWhereInputObjectSchema } from "./objects/CustomerPaymentWhereInput.schema";
import { CustomerPaymentOrderByWithAggregationInputObjectSchema } from "./objects/CustomerPaymentOrderByWithAggregationInput.schema";
import { CustomerPaymentScalarWhereWithAggregatesInputObjectSchema } from "./objects/CustomerPaymentScalarWhereWithAggregatesInput.schema";
import { CustomerPaymentScalarFieldEnumSchema } from "./enums/CustomerPaymentScalarFieldEnum.schema";

export const CustomerPaymentGroupBySchema = z.object({
  where: CustomerPaymentWhereInputObjectSchema.optional(),
  orderBy: z.union([
    CustomerPaymentOrderByWithAggregationInputObjectSchema,
    CustomerPaymentOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: CustomerPaymentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CustomerPaymentScalarFieldEnumSchema),
});
