import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    create(dto: EmployeeDto): Promise<import(".prisma/client").Employee>;
    get(): Promise<import(".prisma/client").Employee[]>;
    getEmployee(id: number): Promise<import(".prisma/client").Employee>;
    update(id: number, name: string, empType: string, designation: string, experiance: string): Promise<import(".prisma/client").Employee | {
        data: string;
    }>;
    remove(id: number): Promise<{
        data: string;
    }>;
}
