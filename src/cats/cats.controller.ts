import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create.cat.dto';

@Controller('cats')
export class CatsController {
  // @Post()
  // @Header('Cache-Control', 'none')
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return `This action adds a new cat with data ${createCatDto}`;
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAllWild() {
    return 'This route uses a wildcard';
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     console.log(params);
  //     console.log(params.id);
  //     return `This action returns a #${params.id} cat`;
  //   }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
