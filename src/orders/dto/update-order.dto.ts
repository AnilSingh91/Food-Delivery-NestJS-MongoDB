import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    readonly orderRating?: number;
    readonly orderFeedback?: number;
    readonly orderStatus: string;
    readonly deliveryTime?: string;
}    

