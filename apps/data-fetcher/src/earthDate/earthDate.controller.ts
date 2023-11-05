import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EarthDateService } from "./earthDate.service";
import { EarthDateControllerBase } from "./base/earthDate.controller.base";

@swagger.ApiTags("earthDates")
@common.Controller("earthDates")
export class EarthDateController extends EarthDateControllerBase {
  constructor(
    protected readonly service: EarthDateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
