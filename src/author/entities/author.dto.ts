import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('author_dto')
export class AuthorDTO {
  @Field()
  id?: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updateAt?: Date;
}
