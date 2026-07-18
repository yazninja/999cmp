export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const email = query.email as string;
  const URL = "https://smbackend.yaz.ninja/planyo/findUser"

  type UserResponse = {
    email: string;
    planyoID: string;
  };

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing email parameter",
    });
  }

  const existingUser: UserResponse | null = await $fetch(`${URL}?email=${email}`);
  if (existingUser) {
    return { exists: true, planyoID: existingUser.planyoID };
  } else {
    return { exists: false };
  }
})
