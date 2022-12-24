import exerciseData from "../src/libs/exercises.json";
import { prisma } from "../src/server/db/client";

async function seedExercise(exercise) {
  console.log(exercise);
  console.log(exercise.tags);
  const connectOrCreateTags = exercise.tags.map((tag) => ({
    create: { name: tag },
    where: { name: tag },
  }));
  console.log(connectOrCreateTags);
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

const exercises = exerciseData.exercises;
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
