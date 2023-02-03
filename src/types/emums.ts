type ObjectValues<T> = keyof T;

export const RoleType = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
} as const;
export type RoleType = ObjectValues<keyof typeof RoleType>;

export const SubscriptionType = {
  FREE: "FREE",
  PRO: "PRO",
  ELITE: "ELITE",
  UNLIMITED: "UNLIMITED",
} as const;
export type SubscriptionType = ObjectValues<typeof SubscriptionType>;

export const VisibilityType = {
  PUBLIC: "PUBLIC",
  UNLISTED: "UNLISTED",
  PRIVATE: "PRIVATE",
} as const;
export type VisibilityType = ObjectValues<typeof VisibilityType>;

export const StatusType = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
export type StatusType = ObjectValues<typeof RoleType>;
