import { z } from "zod";
import { AccountSelectObjectSchema } from "./objects/AccountSelect.schema";
import { AccountIncludeObjectSchema } from "./objects/AccountInclude.schema";
import { AccountOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/AccountOrderByWithRelationAndSearchRelevanceInput.schema";
import { AccountWhereInputObjectSchema } from "./objects/AccountWhereInput.schema";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";
import { AccountScalarFieldEnumSchema } from "./enums/AccountScalarFieldEnum.schema";

export const AccountFindFirstSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  include: AccountIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      AccountOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      AccountOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: AccountWhereInputObjectSchema.optional(),
  cursor: AccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AccountScalarFieldEnumSchema).optional(),
});
