import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('/messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'Hello World';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
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
