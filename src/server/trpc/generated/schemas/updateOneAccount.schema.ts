import { z } from "zod";
import { AccountIncludeObjectSchema } from "./objects/AccountInclude.schema";
import { AccountUpdateInputObjectSchema } from "./objects/AccountUpdateInput.schema";
import { AccountUncheckedUpdateInputObjectSchema } from "./objects/AccountUncheckedUpdateInput.schema";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";

export const AccountUpdateOneSchema = z.object({
  include: AccountIncludeObjectSchema.optional(),
  data: z.union([
    AccountUpdateInputObjectSchema,
    AccountUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountWhereUniqueInputObjectSchema,
});
