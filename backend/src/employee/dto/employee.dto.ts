import { IsNotEmpty, IsString } from 'class-validator';

export class EmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  empType: string;

  @IsString()
  @IsNotEmpty()
  designation: string;

  @IsString()
  @IsNotEmpty()
  experiance: string;
}
