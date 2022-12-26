import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { AccountListRelationFilterObjectSchema } from "./AccountListRelationFilter.schema";
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema";
import { EnumRoleTypeFilterObjectSchema } from "./EnumRoleTypeFilter.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { CustomerPaymentRelationFilterObjectSchema } from "./CustomerPaymentRelationFilter.schema";
import { CustomerPaymentWhereInputObjectSchema } from "./CustomerPaymentWhereInput.schema";
import { WorkoutListRelationFilterObjectSchema } from "./WorkoutListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    role: z
      .union([
        z.lazy(() => EnumRoleTypeFilterObjectSchema),
        z.lazy(() => RoleTypeSchema),
      ])
      .optional(),
    customerPayment: z
      .union([
        z.lazy(() => CustomerPaymentRelationFilterObjectSchema),
        z.lazy(() => CustomerPaymentWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    authoredWorkouts: z
      .lazy(() => WorkoutListRelationFilterObjectSchema)
      .optional(),
    savedWorkouts: z
      .lazy(() => WorkoutListRelationFilterObjectSchema)
      .optional(),
    username: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
