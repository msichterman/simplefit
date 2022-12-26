import { z } from "zod";
import { CustomerPaymentUpdateManyMutationInputObjectSchema } from "./objects/CustomerPaymentUpdateManyMutationInput.schema";
import { CustomerPaymentWhereInputObjectSchema } from "./objects/CustomerPaymentWhereInput.schema";

export const CustomerPaymentUpdateManySchema = z.object({
  data: CustomerPaymentUpdateManyMutationInputObjectSchema,
  where: CustomerPaymentWhereInputObjectSchema.optional(),
});
