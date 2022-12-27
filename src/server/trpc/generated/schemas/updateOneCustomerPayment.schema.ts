import { z } from "zod";
import { CustomerPaymentSelectObjectSchema } from "./objects/CustomerPaymentSelect.schema";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentUpdateInputObjectSchema } from "./objects/CustomerPaymentUpdateInput.schema";
import { CustomerPaymentUncheckedUpdateInputObjectSchema } from "./objects/CustomerPaymentUncheckedUpdateInput.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";

export const CustomerPaymentUpdateOneSchema = z.object({
  select: CustomerPaymentSelectObjectSchema.optional(),
  include: CustomerPaymentIncludeObjectSchema.optional(),
  data: z.union([
    CustomerPaymentUpdateInputObjectSchema,
    CustomerPaymentUncheckedUpdateInputObjectSchema,
  ]),
  where: CustomerPaymentWhereUniqueInputObjectSchema,
});
