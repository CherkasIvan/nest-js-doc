import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(cat);
    console.log(`This action adds a new cat with data ${cat}`);
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    console.log('This action returns all cats');
    return this.cats;
  }
}
