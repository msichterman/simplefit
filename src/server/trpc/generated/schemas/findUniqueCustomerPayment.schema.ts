import { z } from "zod";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";

export const CustomerPaymentFindUniqueSchema = z.object({
  where: CustomerPaymentWhereUniqueInputObjectSchema,
});
