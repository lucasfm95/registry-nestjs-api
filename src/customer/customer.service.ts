import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import CustomerData from './models/data/customer.data';
import { CustomerPostModel } from './models/requests/customer-post.model';

@Injectable()
export class CustomerService {
  private readonly logger: Logger = new Logger(CustomerService.name);

  private customers: CustomerData[];

  getAll(): object[] {
    this.logger.log('get all');

    return this.customers;
  }

  getByDocumentNumber(documentNumber: string): object {
    this.logger.log(`Get by document number ${documentNumber}`);

    return this.customers.find(customer => customer.documentNumber === documentNumber);
  }

  add(customerPostModel: CustomerPostModel): object {
    this.logger.log(`add ${JSON.stringify(customerPostModel)}`);

    let customer: CustomerData = {
      ...customerPostModel,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.customers.push(customer);

    return customer;
  }

  replace() { }

  update() { }

  delete() { }

  disable() { }
}
