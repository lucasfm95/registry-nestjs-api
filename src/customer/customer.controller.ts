import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  getAll(): string {
    return 'getall';
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
