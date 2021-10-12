import client from "./config.ts";

export async function getUserByEmail(email: string) {
  const result = await client.execute(
    `SELECT * FROM USERS WHERE email = '${email}'`
  );

  console.log(result);
}
