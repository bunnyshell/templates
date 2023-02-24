import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
} from "class-validator";

/**
 * Create Book Payload Class
 */
export class CreateBookPayload {
  /**
   * Title field
   */
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  title: string;

  /**
   * Description field
   */
  @ApiProperty({
    required: false,
  })
  description: string;
}
