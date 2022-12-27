import { z } from "zod";
import { VerificationTokenSelectObjectSchema } from "./objects/VerificationTokenSelect.schema";
import { VerificationTokenOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/VerificationTokenOrderByWithRelationAndSearchRelevanceInput.schema";
import { VerificationTokenWhereInputObjectSchema } from "./objects/VerificationTokenWhereInput.schema";
import { VerificationTokenWhereUniqueInputObjectSchema } from "./objects/VerificationTokenWhereUniqueInput.schema";
import { VerificationTokenScalarFieldEnumSchema } from "./enums/VerificationTokenScalarFieldEnum.schema";

export const VerificationTokenFindManySchema = z.object({
  select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
  orderBy: z
    .union([
      VerificationTokenOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      VerificationTokenOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: VerificationTokenWhereInputObjectSchema.optional(),
  cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
});
