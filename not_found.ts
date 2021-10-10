import { Context } from "https://deno.land/x/oak/mod.ts";

export default function (context: Context) {
  context.response.status = 404;
  context.response.body = { error: "Not Found" };
}
