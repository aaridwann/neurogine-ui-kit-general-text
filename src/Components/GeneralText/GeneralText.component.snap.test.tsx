import React from 'react';
import { render } from '@testing-library/react-native';
import { describe, expect, it } from 'vitest';
import GeneralText from './GeneralText.component';
import { VARIANT } from '../../Constants';

/**
 * Configurations for testing the GeneralText component. 
 * Each configuration includes a description 
 * and the props to be passed to the component during rendering.
 * @type {Array<{desc: string, props: {children: string, variant: string}}>}
 */
const configs = [
  {
    desc: 'should render GeneralText component with default props',
    props: {
      children: 'Default Text',
      variant: VARIANT.BODY2,
    },
  },
];

describe('GeneralText component', () => {
  configs.forEach(({ desc, props }) => {
    it(desc, async () => {
      const { toJSON } = await render(<GeneralText  {...props}>{props.children}</GeneralText>);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});