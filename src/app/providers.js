'use client';

import TutorialHeader from '@/components/tutorial-header/tutorial-header';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
