import { z } from "zod";
import { SessionIncludeObjectSchema } from "./objects/SessionInclude.schema";
import { SessionOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/SessionOrderByWithRelationAndSearchRelevanceInput.schema";
import { SessionWhereInputObjectSchema } from "./objects/SessionWhereInput.schema";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";
import { SessionScalarFieldEnumSchema } from "./enums/SessionScalarFieldEnum.schema";

export const SessionFindManySchema = z.object({
  include: z.lazy(() => SessionIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      SessionOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      SessionOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: SessionWhereInputObjectSchema.optional(),
  cursor: SessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SessionScalarFieldEnumSchema).optional(),
});
