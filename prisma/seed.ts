import exerciseData from "../src/libs/exercises.json";
import { prisma } from "../src/server/db/client";
import { z } from "zod";

export const exerciseRaw = z.object({
  name: z.string(),
  difficulty: z.string(),
  tags: z.array(z.string()),
  sets: z.number(),
  reps: z.number().or(z.string()),
  rest: z.number(),
  exampleLink: z.string(),
});
type RawExercise = z.infer<typeof exerciseRaw>;

async function seedExercise(exercise: RawExercise) {
  const connectOrCreateTags = exercise.tags.map((tag) => ({
    create: { name: tag },
    where: { name: tag },
  }));
  const exerciseEntry = await prisma.exercise.upsert({
    where: { name: exercise.name },
    update: {
      name: exercise.name,
      difficulty: exercise.difficulty,
      sets: exercise.sets,
      reps: exercise.reps.toString(),
      rest: exercise.rest.toString(),
      exampleLink: exercise.exampleLink,
      tags: {
        connectOrCreate: connectOrCreateTags,
      },
    },
    create: {
      name: exercise.name,
      difficulty: exercise.difficulty,
      sets: exercise.sets,
      reps: exercise.reps.toString(),
      rest: exercise.rest.toString(),
      exampleLink: exercise.exampleLink,
      tags: {
        connectOrCreate: connectOrCreateTags,
      },
    },
  });
  console.log(exerciseEntry);
}

const exercises: RawExercise[] = exerciseData.exercises;
Promise.all(
  exercises.map(async (exercise) => {
    await seedExercise(exercise).catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  })
)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
