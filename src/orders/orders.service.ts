import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_MODEL') private readonly orderModel: Model<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = this.orderModel.create({
      ...createOrderDto,
      orderStatus: 'PLACED',
      orderTime: new Date(),
      orderId: uuidv4(),
      sequenceId: (await this.orderModel.countDocuments()) + 1,
    });
    return createdOrder;
  }

  async findAll(queryObj?: any ): Promise<Order[]> {
    return this.orderModel.find({...queryObj}).sort({sequenceId : 1});
  }

  async findOne(id: string): Promise<Order[]> {
    return this.orderModel.find({
      orderId: id,
    });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const response = await this.orderModel.updateOne(
        {
          orderId: id,
        },
        updateOrderDto,
      );
      if(response?.modifiedCount) {
        return `Order updated successfully !!`;
      } else {
        return `Could not update order :(`;  
      }
    } catch (err) {
      return `Could not update order :(`;
    }
  }

  async remove(id: string) {
    try {
      const response = await this.orderModel.deleteOne(
        {
          orderId: id,
        });
      if(response?.deletedCount) {
        return `Order deleted successfully !!`;
      } else {
        return `Could not delete order :(`;  
      }
    } catch (err) {
      return `Could not delete order :(`;
    }
  }
}
