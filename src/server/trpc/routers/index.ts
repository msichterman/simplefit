import { router } from "./helpers/config";
import { workoutRouter } from "./Workout.router";
import { exerciseRouter } from "./Exercise.router";

export const appRouter = router({
  workout: workoutRouter,
  exercise: exerciseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
