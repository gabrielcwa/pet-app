import {Model, Column, Table, CreatedAt, UpdatedAt, HasMany} from "sequelize-typescript";
import { Order } from "./Order";

@Table
export class Pet extends Model<Pet>{
    @Column
    name: string;

    @Column
    photo: string;

    @Column
    tags: string;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;

    @HasMany(() => Order)
    orders: Order[];

    static scope(...args: any[]): typeof Pet {
        args[0] = args[0] || 'defaultScope';
        return super.scope.call(this, ...args);
    }

}