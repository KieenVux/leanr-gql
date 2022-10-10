import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
