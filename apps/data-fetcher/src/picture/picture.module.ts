import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PictureModuleBase } from "./base/picture.module.base";
import { PictureService } from "./picture.service";
import { PictureController } from "./picture.controller";
import { PictureResolver } from "./picture.resolver";

@Module({
  imports: [PictureModuleBase, forwardRef(() => AuthModule)],
  controllers: [PictureController],
  providers: [PictureService, PictureResolver],
  exports: [PictureService],
})
export class PictureModule {}
