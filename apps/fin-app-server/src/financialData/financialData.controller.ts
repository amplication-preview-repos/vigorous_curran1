import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialDataService } from "./financialData.service";
import { FinancialDataControllerBase } from "./base/financialData.controller.base";

@swagger.ApiTags("financialData")
@common.Controller("financialData")
export class FinancialDataController extends FinancialDataControllerBase {
  constructor(
    protected readonly service: FinancialDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
