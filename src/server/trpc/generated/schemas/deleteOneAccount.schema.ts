import { z } from "zod";
import { AccountIncludeObjectSchema } from "./objects/AccountInclude.schema";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";

export const AccountDeleteOneSchema = z.object({
  include: AccountIncludeObjectSchema.optional(),
  where: AccountWhereUniqueInputObjectSchema,
});
