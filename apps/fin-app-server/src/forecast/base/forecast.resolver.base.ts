/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Forecast } from "./Forecast";
import { ForecastCountArgs } from "./ForecastCountArgs";
import { ForecastFindManyArgs } from "./ForecastFindManyArgs";
import { ForecastFindUniqueArgs } from "./ForecastFindUniqueArgs";
import { CreateForecastArgs } from "./CreateForecastArgs";
import { UpdateForecastArgs } from "./UpdateForecastArgs";
import { DeleteForecastArgs } from "./DeleteForecastArgs";
import { ForecastService } from "../forecast.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Forecast)
export class ForecastResolverBase {
  constructor(
    protected readonly service: ForecastService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Forecast",
    action: "read",
    possession: "any",
  })
  async _forecastsMeta(
    @graphql.Args() args: ForecastCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Forecast])
  @nestAccessControl.UseRoles({
    resource: "Forecast",
    action: "read",
    possession: "any",
  })
  async forecasts(
    @graphql.Args() args: ForecastFindManyArgs
  ): Promise<Forecast[]> {
    return this.service.forecasts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Forecast, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Forecast",
    action: "read",
    possession: "own",
  })
  async forecast(
    @graphql.Args() args: ForecastFindUniqueArgs
  ): Promise<Forecast | null> {
    const result = await this.service.forecast(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Forecast)
  @nestAccessControl.UseRoles({
    resource: "Forecast",
    action: "create",
    possession: "any",
  })
  async createForecast(
    @graphql.Args() args: CreateForecastArgs
  ): Promise<Forecast> {
    return await this.service.createForecast({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Forecast)
  @nestAccessControl.UseRoles({
    resource: "Forecast",
    action: "update",
    possession: "any",
  })
  async updateForecast(
    @graphql.Args() args: UpdateForecastArgs
  ): Promise<Forecast | null> {
    try {
      return await this.service.updateForecast({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Forecast)
  @nestAccessControl.UseRoles({
    resource: "Forecast",
    action: "delete",
    possession: "any",
  })
  async deleteForecast(
    @graphql.Args() args: DeleteForecastArgs
  ): Promise<Forecast | null> {
    try {
      return await this.service.deleteForecast(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
