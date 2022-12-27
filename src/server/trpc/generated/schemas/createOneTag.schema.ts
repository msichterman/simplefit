import { z } from "zod";
import { TagIncludeObjectSchema } from "./objects/TagInclude.schema";
import { TagCreateInputObjectSchema } from "./objects/TagCreateInput.schema";
import { TagUncheckedCreateInputObjectSchema } from "./objects/TagUncheckedCreateInput.schema";

export const TagCreateOneSchema = z.object({
  include: TagIncludeObjectSchema.optional(),
  data: z.union([
    TagCreateInputObjectSchema,
    TagUncheckedCreateInputObjectSchema,
  ]),
});
