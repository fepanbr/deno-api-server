import client from "./config";

export async function getUserByEmail(email: string) {
  const result = await client.execute(
    `SELECT * FROM USERS WHERE email = '${email}'`
  );

  console.log(result);
}
