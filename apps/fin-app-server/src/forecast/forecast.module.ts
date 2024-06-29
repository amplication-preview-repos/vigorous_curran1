import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ForecastModuleBase } from "./base/forecast.module.base";
import { ForecastService } from "./forecast.service";
import { ForecastController } from "./forecast.controller";
import { ForecastResolver } from "./forecast.resolver";

@Module({
  imports: [ForecastModuleBase, forwardRef(() => AuthModule)],
  controllers: [ForecastController],
  providers: [ForecastService, ForecastResolver],
  exports: [ForecastService],
})
export class ForecastModule {}
