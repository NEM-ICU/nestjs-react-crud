import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDto } from './dto';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: EmployeeDto): Promise<import(".prisma/client").Employee>;
    get(): Promise<import(".prisma/client").Employee[]>;
    getEmployee(id: number): Promise<import(".prisma/client").Employee>;
    update(id: number, newEmployeeData: object): Promise<import(".prisma/client").Employee | {
        data: string;
    }>;
    delete(id: number): Promise<{
        data: string;
    }>;
}
