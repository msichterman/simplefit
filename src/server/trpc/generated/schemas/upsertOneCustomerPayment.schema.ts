import { z } from "zod";
import { CustomerPaymentIncludeObjectSchema } from "./objects/CustomerPaymentInclude.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./objects/CustomerPaymentWhereUniqueInput.schema";
import { CustomerPaymentCreateInputObjectSchema } from "./objects/CustomerPaymentCreateInput.schema";
import { CustomerPaymentUncheckedCreateInputObjectSchema } from "./objects/CustomerPaymentUncheckedCreateInput.schema";
import { CustomerPaymentUpdateInputObjectSchema } from "./objects/CustomerPaymentUpdateInput.schema";
import { CustomerPaymentUncheckedUpdateInputObjectSchema } from "./objects/CustomerPaymentUncheckedUpdateInput.schema";

export const CustomerPaymentUpsertSchema = z.object({
  include: CustomerPaymentIncludeObjectSchema.optional(),
  where: CustomerPaymentWhereUniqueInputObjectSchema,
  create: z.union([
    CustomerPaymentCreateInputObjectSchema,
    CustomerPaymentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CustomerPaymentUpdateInputObjectSchema,
    CustomerPaymentUncheckedUpdateInputObjectSchema,
  ]),
});
