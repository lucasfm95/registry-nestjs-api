import { Injectable, Logger } from '@nestjs/common';
import { CustomerRepository } from 'src/repository/customer.repository';
import { v4 as uuid } from 'uuid';
import CustomerData from './models/data/customer.data';
import { CustomerPostModel } from './models/requests/customer-post.model';

@Injectable()
export class CustomerService {
  private readonly logger: Logger = new Logger(CustomerService.name);

  constructor(private readonly customerRepository: CustomerRepository) { }

  private customers: CustomerData[];

  async getAll(): Promise<CustomerData[]> {
    this.logger.log('get all');

    return await this.customerRepository.findAll();
  }

  getByDocumentNumber(documentNumber: string): object {
    this.logger.log(`Get by document number ${documentNumber}`);

    return this.customers.find(
      (customer) => customer.documentNumber === documentNumber,
    );
  }

  async add(customerPostModel: CustomerPostModel): Promise<CustomerData> {
    this.logger.log(`add ${JSON.stringify(customerPostModel)}`);

    return await this.customerRepository.create(customerPostModel);

    /*const customer: CustomerData = {
      ...customerPostModel,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.customers.push(customer);

    return customer;*/
  }

  replace() {}

  update() {}

  delete() {}

  disable() {}
}
