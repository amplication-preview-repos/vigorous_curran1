import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialDataServiceBase } from "./base/financialData.service.base";

@Injectable()
export class FinancialDataService extends FinancialDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
