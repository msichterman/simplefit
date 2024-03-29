import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "@/server/db/client";

const workouts = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.workout.findMany();
  res.status(200).json(examples);
};

export default workouts;
