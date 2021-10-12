import { RouterContext, BodyForm } from "https://deno.land/x/oak/mod.ts";
import { getUserByEmail } from "../models/User.ts";

export default class UserController {
  public async login(context: RouterContext) {
    const { type, value } = (await context.request.body()) as BodyForm;

    const params = await value;

    const email = params.get("email");
    const password = params.get("password");

    console.log(email, password);

    if (email === null || password === null) {
      context.response.status = 422;
      context.response.body = { error: "email or password required" };
      return;
    }

    await getUserByEmail(email);

    context.response.body = "login";
  }

  public logout(context: RouterContext) {
    context.response.body = "logout";
  }
}
