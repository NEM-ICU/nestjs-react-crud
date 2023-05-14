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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const dto_1 = require("./dto");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    create(dto) {
        return this.employeeService.create(dto);
    }
    get() {
        return this.employeeService.get();
    }
    getEmployee(id) {
        return this.employeeService.getEmployee(id);
    }
    update(id, name, empType, designation, experiance) {
        return this.employeeService.update(id, {
            name,
            empType,
            designation,
            experiance,
        });
    }
    remove(id) {
        return this.employeeService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "getEmployee", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('empType')),
    __param(3, (0, common_1.Body)('designation')),
    __param(4, (0, common_1.Body)('experiance')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "remove", null);
EmployeeController = __decorate([
    (0, common_1.Controller)('employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map