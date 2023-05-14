import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  create(@Body() dto: EmployeeDto) {
    return this.employeeService.create(dto);
  }

  @Get()
  get() {
    return this.employeeService.get();
  }

  @Get(':id')
  getEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.getEmployee(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
    @Body('empType') empType: string,
    @Body('designation') designation: string,
    @Body('experiance') experiance: string,
  ) {
    return this.employeeService.update(id, {
      name,
      empType,
      designation,
      experiance,
    });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.delete(id);
  }
}
