import { z } from "zod";
import { CustomerPaymentOrderByWithRelationInputObjectSchema } from "./objects/CustomerPaymentOrderByWithRelationInput.schema";
import { CustomerPaymentWhereInputObjectSchema } from "./objects/CustomerPaymentWhereInput.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";
import { CustomerPaymentScalarFieldEnumSchema } from "./enums/CustomerPaymentScalarFieldEnum.schema";

export const CustomerPaymentFindFirstSchema = z.object({
  orderBy: z
    .union([
      CustomerPaymentOrderByWithRelationInputObjectSchema,
      CustomerPaymentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CustomerPaymentWhereInputObjectSchema.optional(),
  cursor: CustomerPaymentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CustomerPaymentScalarFieldEnumSchema).optional(),
});
