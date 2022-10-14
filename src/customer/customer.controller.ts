import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerPatchModel } from './models/requests/customer-patch.model';
import { CustomerPostModel } from './models/requests/customer-post.model';
import { CustomerPutModel } from './models/requests/customer-put.model';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Get()
  async getAll() {
    return await this.customerService.getAll();
  }

  @Get(':documentNumber')
  async getByDocumentNumber(@Param('documentNumber') documentNumber: string) {
    const result = await this.customerService.getByDocumentNumber(documentNumber);
    if (!result) {
      throw new HttpException('', HttpStatus.NO_CONTENT);
    }
    return result;
  }

  @Post()
  async post(@Body() newCustomer: CustomerPostModel) {
    if(await this.customerService.getByDocumentNumber(newCustomer.documentNumber)) {
      throw new HttpException('value duplicated', HttpStatus.BAD_REQUEST);
    } else {
      return await this.customerService.add(newCustomer);
    }
  }

  @Put(':documentNumber')
  put(
    @Param('documentNumber') documentNumber: string,
    @Body() customer: CustomerPutModel,
  ) {
    return customer;
  }

  @Patch(':documentNumber')
  patch(
    @Param('documentNumber') documentNumber: string,
    @Body() customer: CustomerPatchModel,
  ) {
    return customer;
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
