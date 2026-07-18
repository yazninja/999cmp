export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const email = query.email as string;
  const name = query.name as string;
  const dateOfBirth = query.dateOfBirth as string;
  const phone = query.phone as string;


  const URL = "https://smbackend.yaz.ninja/planyo/addUser"

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
  const user: UserResponse | null = await $fetch(`${URL}?email=${email}&name=${name}&dateOfBirth=${dateOfBirth}&phone=${phone}`);
  return user;
})
