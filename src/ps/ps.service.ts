import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, now } from 'mongoose';
import { PSdto } from './dto';

import { parking_space } from './ps.model';

@Injectable()
export class psService {

  // private products: Product[] = [];
  constructor(@InjectModel('ps') private psModel: Model<parking_space>){}

  insertPS(dto:PSdto){
    const newPS = new this.psModel({
      user_profile:dto.user_profile,
      location:dto.location,
      created_at: now(),
      updated_at:now(),
      image:dto.photo
    })
    newPS.save()
    return newPS.id
  }


  // insertProduct(title: string, desc: string, price: number) {
  //   const prodId = Math.random().toString();
  //   const newProduct = new Product(prodId, title, desc, price);
  //   this.products.push(newProduct);
  //   return prodId;
  // }

  // getProducts() {
  //   return [...this.products];
  // }

  // getSingleProduct(productId: string) {
  //   const product = this.findProduct(productId)[0];
  //   return { ...product };
  // }

  // updateProduct(productId: string, title: string, desc: string, price: number) {
  //   const [product, index] = this.findProduct(productId);
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (desc) {
  //     updatedProduct.description = desc;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   this.products[index] = updatedProduct;
  // }

  // deleteProduct(prodId: string) {
  //     const index = this.findProduct(prodId)[1];
  //     this.products.splice(index, 1);
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex(prod => prod.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find product.');
  //   }
  //   return [product, productIndex];
  // }
}
