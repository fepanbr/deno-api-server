import { Router } from "https://deno.land/x/oak/mod.ts";

import UserController from "./controllers/UserController.ts";

import BookController from "./controllers/BookController.ts";

const router = new Router();

const userController = new UserController();

const bookController = new BookController();

router
  .post("/login", userController.login)
  .delete("/logout", userController.logout)
  .post("/book", bookController.createBook)
  .get("/book", bookController.getBooks)
  .get("/book/:id", bookController.getBook)
  .patch("/book/:id", bookController.UpdateBook)
  .delete("/bookd/:id", bookController.deleteBook);

export default router;
