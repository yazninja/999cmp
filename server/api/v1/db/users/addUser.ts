import { kv } from "@vercel/kv";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    email,
    name,
    dateOfBirth,
    phone,
    guardianName,
    emergencyContact,
    game,
    planyoID,
    isPaid,
  } = body;

  kv.hsetnx("users", `${game}:${email}`, {
    email,
    name,
    dateOfBirth,
    phone,
    guardianName,
    emergencyContact,
    game,
    planyoID,
    isPaid: isPaid || false,
  });
});
