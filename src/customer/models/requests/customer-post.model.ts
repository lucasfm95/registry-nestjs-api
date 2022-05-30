import {
  IsBoolean,
  IsDefined,
  IsString,
  MaxLength,
  MinLength,
  ValidationArguments,
} from 'class-validator';

export class CustomerPostModel {
  @MinLength(11, {
    message: (args: ValidationArguments) =>
      `The ${args.property} field must be minimum ${args.constraints[0]}  caracters long`,
  })
  @MaxLength(14, {
    message: (args: ValidationArguments) =>
      `The ${args.property} field must be maximum ${args.constraints[0]} caracters long`,
  })
  @IsDefined()
  @IsString()
  public documentNumber: string;
  @MinLength(3, {
    message: (args: ValidationArguments) =>
      `The ${args.property} field must be minimum ${args.constraints[0]}  caracters long`,
  })
  @MaxLength(80, {
    message: (args: ValidationArguments) =>
      `The ${args.property} field must be maximum ${args.constraints[0]} caracters long`,
  })
  @IsDefined()
  @IsString()
  public name: string;
  @IsDefined()
  @IsBoolean()
  public enabled: boolean;
}
