import { z } from "zod";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";

export const CustomerPaymentFindUniqueSchema = z.object({
  include: CustomerPaymentIncludeObjectSchema.optional(),
  where: CustomerPaymentWhereUniqueInputObjectSchema,
});
