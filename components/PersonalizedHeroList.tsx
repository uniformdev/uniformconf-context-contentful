import { Personalize } from '@uniformdev/context-react';
import { Hero } from './Hero';
import { formatPersonalizeVariants } from '../lib/formatPersonalizeVariants';
import { LIST_FIELD_ID } from '../lib/constants';
import { I3ZPkEj1KqeSn4QdsdnNko3Fields } from '../@types/generated/contentful';

export function PersonalizedHeroList({ fields }: { fields: I3ZPkEj1KqeSn4QdsdnNko3Fields }) {
  if (!fields?.[LIST_FIELD_ID] || !fields[LIST_FIELD_ID].length) {
    return null;
  }
  return (
    <Personalize
      name={fields.name ?? 'Default name for Personalized list of Heros'}
      variations={formatPersonalizeVariants(fields[LIST_FIELD_ID])}
      component={Hero}
    />
  );
}
