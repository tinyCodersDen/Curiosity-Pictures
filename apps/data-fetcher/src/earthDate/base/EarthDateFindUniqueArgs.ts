/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EarthDateWhereUniqueInput } from "./EarthDateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class EarthDateFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => EarthDateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EarthDateWhereUniqueInput)
  @Field(() => EarthDateWhereUniqueInput, { nullable: false })
  where!: EarthDateWhereUniqueInput;
}

export { EarthDateFindUniqueArgs as EarthDateFindUniqueArgs };
