import { z } from "zod";
import { AccountIncludeObjectSchema } from "./objects/AccountInclude.schema";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";

export const AccountFindUniqueSchema = z.object({
  include: AccountIncludeObjectSchema.optional(),
  where: AccountWhereUniqueInputObjectSchema,
});
