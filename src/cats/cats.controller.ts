import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from 'src/services/cats-service/cats.service';
import { CreateCatDto } from './dto/create.cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
  }
  // @Post()
  // create(@Body() createCatDto: CreateCatDto): string {
  //   console.log(createCatDto);
  //   return `This action adds a new cat with data ${createCatDto}`;
  // }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  // @Get('ab*cd')
  // findAllWild() {
  //   return 'This route uses a wildcard';
  // }
  // @Get('redirect')
  // @Redirect('https://nestjs.com', 301)
  // redirect() {
  //   return 'This route uses a wildcard';
  // }
  // @Get('docs')
  // @Redirect('https://nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     console.log(params);
  //     console.log(params.id);
  //     return `This action returns a #${params.id} cat`;
  //   }
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }

  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  // }

  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  // }
}
