import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EarthDateServiceBase } from "./base/earthDate.service.base";

@Injectable()
export class EarthDateService extends EarthDateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
