import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Response,
} from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAll() {
    const result = this.customerService.findAll();

    if (!result || result.length == 0) {
      throw new HttpException('bad', HttpStatus.NO_CONTENT);
    }
    return result;
  }

  @Get(':documentNumber')
  getByDocumentNumber(@Param('documentNumber') documentNumber: string): string {
    return documentNumber;
  }

  @Post()
  post(@Body() body: object) {
    return body;
  }

  @Put(':documentNumber')
  put(@Param('documentNumber') documentNumber: string, @Body() body: object) {
    return body;
  }

  @Patch(':documentNumber')
  patch(@Param('documentNumber') documentNumber: string, @Body() body: object) {
    return body;
  }

  @Delete(':documentNumber')
  delete(@Param('documentNumber') documentNumber: string) {
    return documentNumber;
  }

  @Patch('disable/:documentNumber')
  disable(@Param('documentNumber') documentNumber: string) {
    return documentNumber;
  }
}
