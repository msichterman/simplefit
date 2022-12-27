import { z } from "zod";
import { CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/CustomerPaymentOrderByWithRelationAndSearchRelevanceInput.schema";
import { CustomerPaymentWhereInputObjectSchema } from "./objects/CustomerPaymentWhereInput.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";
import { CustomerPaymentCountAggregateInputObjectSchema } from "./objects/CustomerPaymentCountAggregateInput.schema";
import { CustomerPaymentMinAggregateInputObjectSchema } from "./objects/CustomerPaymentMinAggregateInput.schema";
import { CustomerPaymentMaxAggregateInputObjectSchema } from "./objects/CustomerPaymentMaxAggregateInput.schema";

export const CustomerPaymentAggregateSchema = z.object({
  orderBy: z
    .union([
      CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: CustomerPaymentWhereInputObjectSchema.optional(),
  cursor: CustomerPaymentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CustomerPaymentCountAggregateInputObjectSchema])
    .optional(),
  _min: CustomerPaymentMinAggregateInputObjectSchema.optional(),
  _max: CustomerPaymentMaxAggregateInputObjectSchema.optional(),
});
