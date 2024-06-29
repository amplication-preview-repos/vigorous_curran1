import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ForecastService } from "./forecast.service";
import { ForecastControllerBase } from "./base/forecast.controller.base";

@swagger.ApiTags("forecasts")
@common.Controller("forecasts")
export class ForecastController extends ForecastControllerBase {
  constructor(
    protected readonly service: ForecastService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
