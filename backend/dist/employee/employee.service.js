"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeeService = class EmployeeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
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
    async getEmployee(id) {
        console.log(id);
        const user = await this.prisma.employee.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    }
    async update(id, newEmployeeData) {
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
                data: Object.assign({}, newEmployeeData),
            });
            return updateUser;
        }
        return { data: 'User Not Found' };
    }
    async delete(id) {
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
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map