import { z } from "zod";
import { CustomerPaymentCreateManyInputObjectSchema } from "./objects/CustomerPaymentCreateManyInput.schema";

export const CustomerPaymentCreateManySchema = z.object({
  data: CustomerPaymentCreateManyInputObjectSchema,
});
