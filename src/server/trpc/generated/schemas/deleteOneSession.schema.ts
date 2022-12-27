import { z } from "zod";
import { SessionIncludeObjectSchema } from "./objects/SessionInclude.schema";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";

export const SessionDeleteOneSchema = z.object({
  include: SessionIncludeObjectSchema.optional(),
  where: SessionWhereUniqueInputObjectSchema,
});
