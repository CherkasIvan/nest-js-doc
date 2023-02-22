import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('dogs')
export class DogsController {
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get('/observable')
  findAllObservable(): Observable<any[]> {
    return of([]);
  }
}
