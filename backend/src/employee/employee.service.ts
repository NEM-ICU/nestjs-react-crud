import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDto } from './dto';
@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  async create(dto: EmployeeDto) {
    const user = await this.prisma.employee.create({
      data: {
        name: dto.name,
        designation: dto.designation,
        experiance: dto.experiance,
        empType: dto.empType,
      },
    });
    return user;
  }

  async get() {
    const results = await this.prisma.employee.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return results;
  }

  async getEmployee(id: number) {
    const user = await this.prisma.employee.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }

  async update(id: number, newEmployeeData: object) {
    const user = await this.prisma.employee.findUnique({
      where: {
        id: id,
      },
    });
    if (user) {
      const updateUser = await this.prisma.employee.update({
        where: {
          id: id,
        },
        data: {
          ...newEmployeeData,
        },
      });

      return updateUser;
    }
    return { data: 'User Not Found' };
  }

  async delete(id: number) {
    const user = await this.prisma.employee.findUnique({
      where: {
        id: id,
      },
    });
    if (user) {
      const deleteUser = await this.prisma.employee.delete({
        where: {
          id: id,
        },
      });
      return null;
    }
    return { data: 'User Not Found' };
  }
}
