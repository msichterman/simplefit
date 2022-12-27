import { z } from "zod";
import { CustomerPaymentSelectObjectSchema } from "./objects/CustomerPaymentSelect.schema";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentCreateInputObjectSchema } from "./objects/CustomerPaymentCreateInput.schema";
import { CustomerPaymentUncheckedCreateInputObjectSchema } from "./objects/CustomerPaymentUncheckedCreateInput.schema";

export const CustomerPaymentCreateOneSchema = z.object({
  select: CustomerPaymentSelectObjectSchema.optional(),
  include: CustomerPaymentIncludeObjectSchema.optional(),
  data: z.union([
    CustomerPaymentCreateInputObjectSchema,
    CustomerPaymentUncheckedCreateInputObjectSchema,
  ]),
});
