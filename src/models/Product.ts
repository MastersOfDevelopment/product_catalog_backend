import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

console.log('here');

@Table({
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
})
@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    category: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    phoneId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    itemId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    image: string;
}

// "id": "1",
// "category": "phones",
// "phoneId": "apple-iphone-7-32gb-black",
// "itemId": "apple-iphone-7-32gb-black",
// "name": "Apple iPhone 7 32GB Black",
// "fullPrice": 400,
// "price": 375,
// "screen": "4.7' IPS",
// "capacity": "32GB",
// "color": "black",
// "ram": "2GB",
// "year": 2016,
// "image": "img/phones/apple-iphone-7/black/00.jpg"
