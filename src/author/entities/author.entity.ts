import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'first_name' })
  firstName?: string;

  @Column({ name: 'last_name' })
  lastName?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt?: Date;

  // @Field(() => [Post])
  // posts: Post[];
}
