import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PictureService } from "./picture.service";
import { PictureControllerBase } from "./base/picture.controller.base";

@swagger.ApiTags("pictures")
@common.Controller("pictures")
export class PictureController extends PictureControllerBase {
  constructor(
    protected readonly service: PictureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
