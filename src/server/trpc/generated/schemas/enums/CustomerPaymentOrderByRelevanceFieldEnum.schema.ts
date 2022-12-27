import { z } from "zod";

export const CustomerPaymentOrderByRelevanceFieldEnumSchema = z.enum([
  "id",
  "paymentId",
  "customerId",
  "email",
]);
