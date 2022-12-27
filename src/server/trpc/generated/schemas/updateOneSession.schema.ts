import { z } from "zod";
import { SessionIncludeObjectSchema } from "./objects/SessionInclude.schema";
import { SessionUpdateInputObjectSchema } from "./objects/SessionUpdateInput.schema";
import { SessionUncheckedUpdateInputObjectSchema } from "./objects/SessionUncheckedUpdateInput.schema";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";

export const SessionUpdateOneSchema = z.object({
  include: SessionIncludeObjectSchema.optional(),
  data: z.union([
    SessionUpdateInputObjectSchema,
    SessionUncheckedUpdateInputObjectSchema,
  ]),
  where: SessionWhereUniqueInputObjectSchema,
});
