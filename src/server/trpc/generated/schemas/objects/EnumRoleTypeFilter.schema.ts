import { z } from "zod";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { NestedEnumRoleTypeFilterObjectSchema } from "./NestedEnumRoleTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumRoleTypeFilter> = z
  .object({
    equals: z.lazy(() => RoleTypeSchema).optional(),
    in: z
      .lazy(() => RoleTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => RoleTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => RoleTypeSchema),
        z.lazy(() => NestedEnumRoleTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumRoleTypeFilterObjectSchema = Schema;
