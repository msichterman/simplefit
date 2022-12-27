import { z } from "zod";
import { TagIncludeObjectSchema } from "./objects/TagInclude.schema";
import { TagWhereUniqueInputObjectSchema } from "./objects/TagWhereUniqueInput.schema";

export const TagDeleteOneSchema = z.object({
  include: TagIncludeObjectSchema.optional(),
  where: TagWhereUniqueInputObjectSchema,
});
