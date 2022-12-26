import { z } from "zod";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumRoleTypeFilterObjectSchema } from "./NestedEnumRoleTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumRoleTypeWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumRoleTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumRoleTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumRoleTypeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumRoleTypeWithAggregatesFilterObjectSchema = Schema;
