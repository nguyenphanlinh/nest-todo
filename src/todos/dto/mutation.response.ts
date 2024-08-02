import { Field, GqlTypeReference, ObjectType } from '@nestjs/graphql';

export default function MutationResponse<TItemsFieldValue, TErrorFieldValue>(
  itemsFieldValue: GqlTypeReference<TItemsFieldValue>,
  errorFieldValue: GqlTypeReference<TErrorFieldValue>,
) {
  @ObjectType({ isAbstract: true })
  abstract class MutationResponseClass {
    @Field(() => itemsFieldValue, { nullable: true })
    data: TItemsFieldValue;

    @Field(() => errorFieldValue, { nullable: true })
    error: TErrorFieldValue;

    @Field(() => Boolean)
    status: boolean;
  }
  return MutationResponseClass;
}
