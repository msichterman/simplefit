import { z } from "zod";
import { SessionIncludeObjectSchema } from "./objects/SessionInclude.schema";
import { SessionCreateInputObjectSchema } from "./objects/SessionCreateInput.schema";
import { SessionUncheckedCreateInputObjectSchema } from "./objects/SessionUncheckedCreateInput.schema";

export const SessionCreateOneSchema = z.object({
  include: SessionIncludeObjectSchema.optional(),
  data: z.union([
    SessionCreateInputObjectSchema,
    SessionUncheckedCreateInputObjectSchema,
  ]),
});
