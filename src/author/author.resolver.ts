import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { AuthorDTO } from './entities/author.dto';

@Resolver(() => AuthorDTO)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => AuthorDTO)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ) {
    return this.authorService.create(createAuthorInput);
  }
}
