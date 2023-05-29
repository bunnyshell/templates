import { Schema, Document } from "mongoose";

/**
 * Mongoose Book Schema
 */
export const Book = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false, default: null },
  available: { type: Boolean, required: false, default: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

Book.set("toJSON", {
  virtuals: true
});

/**
 * Mongoose Book Document
 */
export interface IBook extends Document {
  /**
   * UUID
   */
  readonly _id: Schema.Types.ObjectId;
  /**
   * Title
   */
  readonly title: string;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Available
   */
  readonly available: boolean;
  /**
   * Create date
   */
  readonly createdAt: Date;
  /**
   * Uopdated Date
   */
  readonly updatedAt: Date;
}
