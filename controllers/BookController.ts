import { RouterContext } from "https://deno.land/x/oak/mod.ts";

export default class BookController {
  public createBook(context: RouterContext) {
    context.response.body = "CreateBook";
  }
  public UpdateBook(context: RouterContext) {
    const id = context.params.id;
    context.response.body = "UpdateBook : " + id;
  }
  public getBooks(context: RouterContext) {
    context.response.body = "GetBooks";
  }
  public getBook(context: RouterContext) {
    const id = context.params.id;
    context.response.body = "GetBook : " + id;
  }
  public deleteBook(context: RouterContext) {
    const id = context.params.id;
    context.response.body = "DeleteBook : " + id;
  }
}
