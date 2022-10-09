import { Injectable, Logger } from '@nestjs/common';
import { CustomerRepository } from 'src/repository/customer.repository';
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

  async getByDocumentNumber(documentNumber: string): Promise<CustomerData> {
    this.logger.log(`Get by document number ${documentNumber}`);

    return await this.customerRepository.findByDocumentNumber(documentNumber);
  }

  async add(customerPostModel: CustomerPostModel): Promise<CustomerData> {
    this.logger.log(`add ${JSON.stringify(customerPostModel)}`);

    return await this.customerRepository.create(customerPostModel);
  }

  replace() {}

  update() {}

  delete() {}

  disable() {}
}
