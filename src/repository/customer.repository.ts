import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CustomerData, {
  CustomerDocument,
} from 'src/customer/models/data/customer.data';
import { CustomerPostModel } from 'src/customer/models/requests/customer-post.model';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel('customer-nestjs')
    private customerModel: Model<CustomerDocument>,
  ) {};

  async create(createCatDto: CustomerPostModel): Promise<CustomerData> {
    const createdCustomer = new this.customerModel(createCatDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<CustomerData[]> {
    return this.customerModel.find().exec();
  }
}
