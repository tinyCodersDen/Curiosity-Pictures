import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EarthDateModuleBase } from "./base/earthDate.module.base";
import { EarthDateService } from "./earthDate.service";
import { EarthDateController } from "./earthDate.controller";
import { EarthDateResolver } from "./earthDate.resolver";

@Module({
  imports: [EarthDateModuleBase, forwardRef(() => AuthModule)],
  controllers: [EarthDateController],
  providers: [EarthDateService, EarthDateResolver],
  exports: [EarthDateService],
})
export class EarthDateModule {}
