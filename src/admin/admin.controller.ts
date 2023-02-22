import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':localhost' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }

  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
