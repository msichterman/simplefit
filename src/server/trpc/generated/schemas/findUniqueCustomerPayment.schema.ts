import { z } from "zod";
import { CustomerPaymentSelectObjectSchema } from "./objects/CustomerPaymentSelect.schema";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";

export const CustomerPaymentFindUniqueSchema = z.object({
  select: CustomerPaymentSelectObjectSchema.optional(),
  include: CustomerPaymentIncludeObjectSchema.optional(),
  where: CustomerPaymentWhereUniqueInputObjectSchema,
});
