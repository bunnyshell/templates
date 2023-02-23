import * as crypto from "crypto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
} from "@nestjs/common";
import { IBook } from "./book.model";
import { CreateBookPayload } from "./payload/create.book.payload";

/**
 * Models a typical response for a crud operation
 */
export interface IGenericMessageBody {
  /**
   * Status message to return
   */
  message: string;
}

/**
 * Book Service
 */
@Injectable()
export class BookService {
  /**
   * Constructor
   * @param {Model<IBook>} bookModel
   */
  constructor(
    @InjectModel("Book") private readonly bookModel: Model<IBook>,
  ) {}

  /**
   * Fetches the list of books
   * @returns {Promise<IBook[]>} queried books list data
   */
  getAll(): Promise<IBook[]> {
    return this.bookModel.find({}).exec();
  }

  /**
   * Fetches a book from database by UUID
   * @param {string} id
   * @returns {Promise<IBook>} queried book data
   */
  get(id: string): Promise<IBook> {
    return this.bookModel.findById(id).exec();
  }

  /**
   * Create a book with CreateBookPayload fields
   * @param {CreateBookPayload} payload book payload
   * @returns {Promise<IBook>} created book data
   */
  async create(payload: CreateBookPayload): Promise<IBook> {
    const createdBook = new this.bookModel(payload);

    return createdBook.save();
  }

  /**
   * Update book data
   * @param {string} bookId
   * @param {CreateBookPayload} payload
   * @returns {Promise<IBook>} mutated book data
   */
  async update(bookId: string, payload: CreateBookPayload): Promise<IBook> {
    const updatedBook = await this.bookModel.updateOne(
      { _id: bookId },
      {
        ...payload,
        updatedAt: new Date()
      },
    );
    if (updatedBook.modifiedCount !== 1) {
      throw new BadRequestException(
        `The book ID ${bookId} was not found.`,
      );
    }

    return this.get(bookId);
  }

  /**
   * Delete book given an ID
   * @param {string} bookId
   * @returns {Promise<IGenericMessageBody>} whether or not the crud operation was completed
   */
  delete(bookId: string): Promise<IGenericMessageBody> {
    return this.bookModel.deleteOne({ _id: bookId }).then(book => {
      if (book.deletedCount === 1) {
        return { message: `The Book was deleted successfully` };
      } else {
        throw new BadRequestException(
          `Failed to delete the book with ID ${bookId}.`,
        );
      }
    });
  }

  /**
   * Delete all the books
   * @returns {Promise<IGenericMessageBody>} whether or not the operation was completed
   */
  deleteAll(): Promise<IGenericMessageBody> {
    return this.bookModel.deleteMany({}).then(res => {
        return { message: `All the books were deleted successfully` };
    });
  }
}
