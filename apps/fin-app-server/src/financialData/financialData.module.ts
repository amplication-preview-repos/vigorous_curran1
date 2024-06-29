import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialDataModuleBase } from "./base/financialData.module.base";
import { FinancialDataService } from "./financialData.service";
import { FinancialDataController } from "./financialData.controller";
import { FinancialDataResolver } from "./financialData.resolver";

@Module({
  imports: [FinancialDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialDataController],
  providers: [FinancialDataService, FinancialDataResolver],
  exports: [FinancialDataService],
})
export class FinancialDataModule {}
