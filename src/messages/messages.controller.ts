import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'HelloWorld';
  }

  @Post()
  createMessage(@Body() body: any) {
    return {
      statusCode: 200,
      body: `Post with content: ${JSON.stringify(body)} created`,
    };
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('requestId:', id);
  }
}
