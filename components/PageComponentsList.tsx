import React from 'react';
import type { Entry } from 'contentful';
import { resolveRenderer } from './index';
import { IPageFields } from '../@types/generated/contentful';

export function PageComponentsList({ components }: { components: IPageFields['components'] }) {
  return (
    <div>
      {components &&
        components.map((entry) => {
          // @todo figure out why testing-library is applied inside non-test file
          // I have tried https://github.com/testing-library/eslint-plugin-testing-library#eslint-overrides
          // eslint-disable-next-line testing-library/render-result-naming-convention, @typescript-eslint/no-explicit-any
          const Component: React.ComponentType<Entry<any>> = resolveRenderer(entry);

          return <Component key={entry.sys.id} {...entry} />;
        })}
    </div>
  );
}
