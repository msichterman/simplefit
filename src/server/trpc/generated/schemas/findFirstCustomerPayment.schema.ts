import { z } from "zod";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/CustomerPaymentOrderByWithRelationAndSearchRelevanceInput.schema";
import { CustomerPaymentWhereInputObjectSchema } from "./objects/CustomerPaymentWhereInput.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";
import { CustomerPaymentScalarFieldEnumSchema } from "./enums/CustomerPaymentScalarFieldEnum.schema";

export const CustomerPaymentFindFirstSchema = z.object({
  include: CustomerPaymentIncludeObjectSchema.optional(),
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
  distinct: z.array(CustomerPaymentScalarFieldEnumSchema).optional(),
});
