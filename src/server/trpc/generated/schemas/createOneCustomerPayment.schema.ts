import { z } from "zod";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentCreateInputObjectSchema } from "./objects/CustomerPaymentCreateInput.schema";
import { CustomerPaymentUncheckedCreateInputObjectSchema } from "./objects/CustomerPaymentUncheckedCreateInput.schema";

export const CustomerPaymentCreateOneSchema = z.object({
  include: CustomerPaymentIncludeObjectSchema.optional(),
  data: z.union([
    CustomerPaymentCreateInputObjectSchema,
    CustomerPaymentUncheckedCreateInputObjectSchema,
  ]),
});
