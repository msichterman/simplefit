import { z } from "zod";

export const CustomerPaymentScalarFieldEnumSchema = z.enum([
  "id",
  "paymentId",
  "customerId",
  "email",
  "subscriptionType",
  "createdAt",
  "deletedAt",
  "updatedAt",
]);
