import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Book } from "./book.model";
import { BookController } from "./book.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Book", schema: Book }])],
  providers: [BookService],
  exports: [BookService],
  controllers: [BookController],
})
export class BookModule {}
