/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FinancialDataService } from "../financialData.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FinancialDataCreateInput } from "./FinancialDataCreateInput";
import { FinancialData } from "./FinancialData";
import { FinancialDataFindManyArgs } from "./FinancialDataFindManyArgs";
import { FinancialDataWhereUniqueInput } from "./FinancialDataWhereUniqueInput";
import { FinancialDataUpdateInput } from "./FinancialDataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FinancialDataControllerBase {
  constructor(
    protected readonly service: FinancialDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialData })
  @nestAccessControl.UseRoles({
    resource: "FinancialData",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFinancialData(
    @common.Body() data: FinancialDataCreateInput
  ): Promise<FinancialData> {
    return await this.service.createFinancialData({
      data: data,
      select: {
        createdAt: true,
        expenses: true,
        id: true,
        income: true,
        investments: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FinancialData] })
  @ApiNestedQuery(FinancialDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FinancialData",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async financialDataItems(
    @common.Req() request: Request
  ): Promise<FinancialData[]> {
    const args = plainToClass(FinancialDataFindManyArgs, request.query);
    return this.service.financialDataItems({
      ...args,
      select: {
        createdAt: true,
        expenses: true,
        id: true,
        income: true,
        investments: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinancialData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FinancialData",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async financialData(
    @common.Param() params: FinancialDataWhereUniqueInput
  ): Promise<FinancialData | null> {
    const result = await this.service.financialData({
      where: params,
      select: {
        createdAt: true,
        expenses: true,
        id: true,
        income: true,
        investments: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FinancialData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FinancialData",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFinancialData(
    @common.Param() params: FinancialDataWhereUniqueInput,
    @common.Body() data: FinancialDataUpdateInput
  ): Promise<FinancialData | null> {
    try {
      return await this.service.updateFinancialData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          expenses: true,
          id: true,
          income: true,
          investments: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FinancialData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FinancialData",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFinancialData(
    @common.Param() params: FinancialDataWhereUniqueInput
  ): Promise<FinancialData | null> {
    try {
      return await this.service.deleteFinancialData({
        where: params,
        select: {
          createdAt: true,
          expenses: true,
          id: true,
          income: true,
          investments: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
