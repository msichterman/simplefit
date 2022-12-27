import { z } from "zod";
import { AccountIncludeObjectSchema } from "./objects/AccountInclude.schema";
import { AccountCreateInputObjectSchema } from "./objects/AccountCreateInput.schema";
import { AccountUncheckedCreateInputObjectSchema } from "./objects/AccountUncheckedCreateInput.schema";

export const AccountCreateOneSchema = z.object({
  include: AccountIncludeObjectSchema.optional(),
  data: z.union([
    AccountCreateInputObjectSchema,
    AccountUncheckedCreateInputObjectSchema,
  ]),
});
