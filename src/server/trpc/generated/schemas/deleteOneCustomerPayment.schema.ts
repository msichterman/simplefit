import { z } from "zod";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";

export const CustomerPaymentDeleteOneSchema = z.object({
  where: CustomerPaymentWhereUniqueInputObjectSchema,
});
