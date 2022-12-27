import { z } from "zod";
import { AccountFindManySchema } from "../findManyAccount.schema";
import { SessionFindManySchema } from "../findManySession.schema";
import { CustomerPaymentArgsObjectSchema } from "./CustomerPaymentArgs.schema";
import { WorkoutFindManySchema } from "../findManyWorkout.schema";
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    customerPayment: z
      .union([z.boolean(), z.lazy(() => CustomerPaymentArgsObjectSchema)])
      .optional(),
    authoredWorkouts: z
      .union([z.boolean(), z.lazy(() => WorkoutFindManySchema)])
      .optional(),
    savedWorkouts: z
      .union([z.boolean(), z.lazy(() => WorkoutFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
