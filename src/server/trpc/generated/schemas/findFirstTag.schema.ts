import { z } from "zod";
import { TagIncludeObjectSchema } from "./objects/TagInclude.schema";
import { TagOrderByWithRelationAndSearchRelevanceInputObjectSchema } from "./objects/TagOrderByWithRelationAndSearchRelevanceInput.schema";
import { TagWhereInputObjectSchema } from "./objects/TagWhereInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./objects/TagWhereUniqueInput.schema";
import { TagScalarFieldEnumSchema } from "./enums/TagScalarFieldEnum.schema";

export const TagFindFirstSchema = z.object({
  include: TagIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      TagOrderByWithRelationAndSearchRelevanceInputObjectSchema,
      TagOrderByWithRelationAndSearchRelevanceInputObjectSchema.array(),
    ])
    .optional(),
  where: TagWhereInputObjectSchema.optional(),
  cursor: TagWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TagScalarFieldEnumSchema).optional(),
});
