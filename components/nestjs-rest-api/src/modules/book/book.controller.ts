import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Post,
    Get,
    Param,
    Put,
  } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { BookService, IGenericMessageBody } from "./book.service";
import { IBook } from "./book.model";
import { CreateBookPayload } from "./payload/create.book.payload";
  
/**
 * Book Controller
 */
@ApiTags("book")
@Controller("books")
export class BookController {
  /**
   * Constructor
   * @param bookService
   */
  constructor(private readonly bookService: BookService) {}

  /**
   * Retrieves the list of books
   * @returns {Promise<IBook[]>} books list data
   */
  @Get()
  @ApiResponse({ status: 200, description: "Fetch Books list Request Received" })
  async getBooks(): Promise<IBook[]> {
    const books = await this.bookService.getAll();

    return books;
  }

  /**
   * Retrieves a particular book
   * @param {string} bookId the ID of the book to fetch
   * @returns {Promise<IBook>} queried book data
   */
  @Get(":bookId")
  @ApiResponse({ status: 200, description: "Fetch Book Request Received" })
  @ApiResponse({ status: 400, description: "Fetch Book Request Failed" })
  async getBook(@Param("bookId") bookId: string): Promise<IBook> {
    const book = await this.bookService.get(bookId);
    if (!book) {
      throw new BadRequestException(
        "The book with that ID could not be found.",
      );
    }
    return book;
  }

  /**
   * Create a new book
   * @param {CreateBookPayload} payload
   * @returns {Promise<IBook>} created book data
   */
  @Post()
  @ApiResponse({ status: 200, description: "Create Book Request Received" })
  @ApiResponse({ status: 400, description: "Create Book Request Failed" })
  async createBook(@Body() payload: CreateBookPayload): Promise<IBook> {
    const book = await this.bookService.create(payload);
    if (!book) {
      throw new BadRequestException(
        "The book with that ID could not be created.",
      );
    }

    return book;
  }

  /**
   * Edit a book
   * @param {string} bookId the book ID to update
   * @param {CreateBookPayload} payload
   * @returns {Promise<IBook>} mutated book data
   */
  @Put(":bookId")
  @ApiResponse({ status: 200, description: "Patch Book Request Received" })
  @ApiResponse({ status: 400, description: "Patch Book Request Failed" })
  async replaceBook(
    @Param("bookId") bookId: string,
    @Body() payload: CreateBookPayload,
  ): Promise<IBook> {
    return await this.bookService.update(bookId, payload);
  }

  /**
   * Removes a book from the database
   * @param {string} bookId the book ID to remove
   * @returns {Promise<IGenericMessageBody>} whether or not the book has been deleted
   */
  @Delete(":bookId")
  @ApiResponse({ status: 200, description: "Delete Book Request Received" })
  @ApiResponse({ status: 400, description: "Delete Book Request Failed" })
  async delete(
    @Param("bookId") bookId: string,
  ): Promise<IGenericMessageBody> {
    return await this.bookService.delete(bookId);
  }

  /**
   * Removes all the books from the database
   * @returns {Promise<IGenericMessageBody>} whether or not the books have been deleted
   */
  @Delete()
  @ApiResponse({ status: 200, description: "Delete all the Books Request Received" })
  @ApiResponse({ status: 400, description: "Delete all the Books Request Failed" })
  async deleteAll(): Promise<IGenericMessageBody> {
    return await this.bookService.deleteAll();
  }
}
