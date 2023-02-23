import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsAlphanumeric,
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
  @IsAlphanumeric()
  @IsNotEmpty()
  title: string;

  /**
   * Description field
   */
  @ApiProperty({
    required: true,
  })
  @IsAlphanumeric()
  @IsNotEmpty()
  description: string;
}
