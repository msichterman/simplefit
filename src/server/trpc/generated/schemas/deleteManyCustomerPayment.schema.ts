import { z } from "zod";
import { CustomerPaymentWhereInputObjectSchema } from "./objects/CustomerPaymentWhereInput.schema";

export const CustomerPaymentDeleteManySchema = z.object({
  where: CustomerPaymentWhereInputObjectSchema.optional(),
});
