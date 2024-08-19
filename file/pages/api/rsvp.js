// pages/api/rsvp.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, message, response } = req.body;
    console.log(
      "name, email, number, message, response,foodPreference",
      name,
      email,
      number,
      message,
      response,
      foodPreference
    );
    try {
      const newRSVP = await prisma.rSVP.create({
        data: {
          name,
          email,
          number: parseInt(number, 10),
          message,
          response,
          foodPreference
        },
      });
      res.status(200).json(newRSVP);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to save RSVP" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
