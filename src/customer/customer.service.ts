import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findAll(): object[] {
    return [{ oi: 'oi' }];
  }
}
