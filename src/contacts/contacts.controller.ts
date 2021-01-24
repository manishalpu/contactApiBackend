import { Controller, Get, Post, Body, Param, HttpException, HttpStatus, Delete, Put } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import {ContactsService } from './contacts.service';
import {Contact as ContactInterface } from './interfaces/contact.interface';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService){}

    @Post()
    async create(@Body() createContactDto: CreateContactDto){
        this.contactsService.create(createContactDto);
    }

    @Get('/list')
    async findAll(): Promise<ContactInterface[]>{
        return this.contactsService.findAll();
    }

    @Get('name/:name')
    async findByName(@Param('name') name:string ){
        console.log(name);
        const response = await this.contactsService.findByName(name);
        console.log(response);
        if(!response)
            throw new HttpException('No contact with '+name,HttpStatus.NOT_FOUND); 
        return response;
    }

    @Get('email/:emailId')
    async findByemail(@Param('emailId') emailId:string ){
        console.log(emailId);
        const response = await this.contactsService.findByEmail(emailId);
        console.log(response);
        if(!response)
            throw new HttpException('No contact with '+emailId,HttpStatus.NOT_FOUND); 
        return response;
    }

    @Delete(':name')
    async deleteByName(@Param('name') name:string)
    {
        const response = await this.contactsService.deleteByName(name);
        if(!response)
            throw new HttpException('Not able to delete contact',HttpStatus.FORBIDDEN);
    }

    @Put(':name')
    async updateByName(@Param('name') name:string, @Body() body: any)
    {
        const response = await this.contactsService.updateByName(name,body);
        if(!response)
            throw new HttpException('Not able to delete contact',HttpStatus.FORBIDDEN);
        return response;
    }
}
