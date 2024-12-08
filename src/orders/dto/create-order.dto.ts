export class CreateOrderDto {
    readonly foodId: string;
    readonly quantity: number;
    readonly customerName: string;
    readonly customerEmail: string;
    readonly customerAddress: string;
    readonly customerMobile: string;
}
