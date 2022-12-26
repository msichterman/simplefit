import { z } from "zod";
import { RoleTypeSchema } from "../enums/RoleType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumRoleTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => RoleTypeSchema).optional(),
  })
  .strict();

export const EnumRoleTypeFieldUpdateOperationsInputObjectSchema = Schema;
