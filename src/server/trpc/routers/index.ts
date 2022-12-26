import { router } from "./helpers/config";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationTokensRouter } from "./VerificationToken.router";
import { workoutsRouter } from "./Workout.router";
import { exercisesRouter } from "./Exercise.router";
import { tagsRouter } from "./Tag.router";
import { customerPaymentsRouter } from "./CustomerPayment.router";

export const appRouter = router({
  account: accountsRouter,
  session: sessionsRouter,
  user: usersRouter,
  verificationToken: verificationTokensRouter,
  workout: workoutsRouter,
  exercise: exercisesRouter,
  tag: tagsRouter,
  customerPayment: customerPaymentsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
