import { Redis } from "@upstash/redis";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const redis = Redis.fromEnv();

const advisors = [
  {
    name: "Fray",
    phone: "573018293357",
  },
  {
    name: "Camila",
    phone: "573213655880",
  },
  {
    name: "Daniela",
    phone: "573108031058",
  },
  {
    name: "Leidy",
    phone: "573123530755",
  },
  {
    name: "Luz Marina",
    phone: "573206049870",
  },
  {
    name: "Don Hernando",
    phone: "573024562908",
  },
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  try {
    const turn = await redis.incr("mekk:whatsapp:turn");

    const advisorIndex = (turn - 1) % advisors.length;

    const advisor = advisors[advisorIndex];

    return res.status(200).json({
      advisor: advisor.name,
      phone: advisor.phone,
    });
  } catch (error) {
    console.error("Error asignando asesor:", error);

    return res.status(500).json({
      error: "No fue posible asignar un asesor.",
    });
  }
}
