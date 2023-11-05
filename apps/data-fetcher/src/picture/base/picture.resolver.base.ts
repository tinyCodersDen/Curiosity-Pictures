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
import { DeletePictureArgs } from "./DeletePictureArgs";
import { PictureCountArgs } from "./PictureCountArgs";
import { PictureFindManyArgs } from "./PictureFindManyArgs";
import { PictureFindUniqueArgs } from "./PictureFindUniqueArgs";
import { Picture } from "./Picture";
import { PictureService } from "../picture.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Picture)
export class PictureResolverBase {
  constructor(
    protected readonly service: PictureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "read",
    possession: "any",
  })
  async _picturesMeta(
    @graphql.Args() args: PictureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Picture])
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "read",
    possession: "any",
  })
  async pictures(
    @graphql.Args() args: PictureFindManyArgs
  ): Promise<Picture[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Picture, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "read",
    possession: "own",
  })
  async picture(
    @graphql.Args() args: PictureFindUniqueArgs
  ): Promise<Picture | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Picture)
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "delete",
    possession: "any",
  })
  async deletePicture(
    @graphql.Args() args: DeletePictureArgs
  ): Promise<Picture | null> {
    try {
      return await this.service.delete(args);
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