import { StatusType, VisibilityType } from "@/types";
import { z } from "zod";
import { isAuthorOrSuperAdmin } from "../libs/prismaHelpers";
import { router, protectedProcedure, publicProcedure } from "./helpers/config";

const workoutNameSchema = z.string().min(2).max(100);
const workoutDescriptionSchema = z.string().min(2).max(140);
const workoutConnectExercisesSchema = z.array(z.object({ id: z.number() }));
const workoutConnectTagsSchema = z.array(z.object({ id: z.number() }));
const workoutIdSchema = z.number();
const workoutSlugSchema = z.string();
const workoutVisibilitySchema = z.union([
  z.literal(VisibilityType.PUBLIC),
  z.literal(VisibilityType.PRIVATE),
  z.literal(VisibilityType.UNLISTED),
]);

export const workoutRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        name: workoutNameSchema,
        description: workoutDescriptionSchema.optional(),
        exercises: workoutConnectExercisesSchema,
        tags: workoutConnectTagsSchema.optional(),
        visibility: workoutVisibilitySchema,
        slug: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const createdWorkout = await ctx.prisma.workout.create({
        data: {
          name: input.name,
          description: input.description,
          visibility: input.visibility,
          slug: input.slug,
          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          exercises: {
            connect: input.exercises,
          },
          tags: {
            connect: input.tags,
          },
        },
      });
      return createdWorkout;
    }),
  read: publicProcedure
    .input(
      z.object({
        id: workoutIdSchema,
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.workout.findUnique({
        include: {
          exercises: true,
          tags: true,
          author: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where: {
          id: input.id,
          // Not private, or author's
          OR: [
            { visibility: { not: VisibilityType.PRIVATE } },
            isAuthorOrSuperAdmin(ctx),
          ],
        },
      });
    }),
  getBySlug: publicProcedure
    .input(
      z.object({
        slug: workoutSlugSchema,
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.workout.findUnique({
        include: {
          exercises: true,
          tags: true,
          author: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where: {
          slug: input.slug,
          // Not private, or author's
          OR: [
            { visibility: { not: VisibilityType.PRIVATE } },
            isAuthorOrSuperAdmin(ctx),
          ],
        },
      });
    }),
  update: protectedProcedure
    .input(
      z
        .object({
          name: workoutNameSchema,
          description: workoutDescriptionSchema,
          visibility: z.enum([
            VisibilityType.PUBLIC,
            VisibilityType.UNLISTED,
            VisibilityType.PRIVATE,
          ]),
          status: z.enum([StatusType.DRAFT, StatusType.PUBLISHED]),
          exercises: workoutConnectExercisesSchema,
          tags: workoutConnectTagsSchema.optional(),
        })
        .partial()
        .extend({ id: workoutIdSchema })
    )
    .mutation(async ({ ctx, input }) => {
      const updatedWorkout = await ctx.prisma.workout.update({
        where: {
          id: input.id,
          ...isAuthorOrSuperAdmin(ctx),
        },
        data: {
          name: input.name,
          description: input.description,
          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          exercises: {
            connect: input.exercises,
          },
          tags: {
            connect: input.tags,
          },
        },
      });
      return updatedWorkout;
    }),
  listFeed: publicProcedure.query(async ({ ctx }) => {
    const listWorkouts = await ctx.prisma.workout.findMany({
      where: {
        OR: [{ visibility: VisibilityType.PUBLIC }, isAuthorOrSuperAdmin(ctx)],
        status: {
          equals: StatusType.PUBLISHED,
        },
      },
      include: {
        exercises: true,
        tags: true,
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return listWorkouts;
  }),
  delete: protectedProcedure
    .input(
      z.object({
        id: workoutIdSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const deletedWorkout = await ctx.prisma.workout.delete({
        where: { id: input.id, ...isAuthorOrSuperAdmin(ctx) },
      });
      return deletedWorkout;
    }),
});
