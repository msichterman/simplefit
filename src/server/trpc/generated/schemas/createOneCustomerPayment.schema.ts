import { z } from "zod";
import { CustomerPaymentCreateInputObjectSchema } from "./objects/CustomerPaymentCreateInput.schema";
import { CustomerPaymentUncheckedCreateInputObjectSchema } from "./objects/CustomerPaymentUncheckedCreateInput.schema";

export const CustomerPaymentCreateOneSchema = z.object({
  data: z.union([
    CustomerPaymentCreateInputObjectSchema,
    CustomerPaymentUncheckedCreateInputObjectSchema,
  ]),
});
