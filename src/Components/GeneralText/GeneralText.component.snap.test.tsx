import GeneralText from './GeneralText.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';

describe('General Text', () => {
  const configs = [
    {
      props: {
        children: 'Default Text',
      },
      desc: 'renders correctly with default props',
    },
    {
      props: {
        children: 'Header Text',
        variant: 'h1',
      },
      desc: 'renders correctly with custom variant',
    },
    {
      props: {
        children: 'Colored Text',
        color: 'primary',
      },
      desc: 'renders correctly with custom color',
    },
    {
      props: {
        children: 'Truncated Text Content That Spans Multiple Lines',
        numberOfLines: 1,
      },
      desc: 'renders correctly with numberOfLines prop',
    },
    {
      props: {
        children: 'Custom Styled Text',
        style: { marginTop: 10, fontSize: 16 },
      },
      desc: 'renders correctly with custom style',
    },
    {
      props: {
        children: 'Pressable Text',
        onPress: jest.fn(),
      },
      desc: 'renders correctly with onPress handler',
    },
    {
      props: {
        children: 'Combined Props Text',
        variant: 'caption',
        color: 'secondary',
        numberOfLines: 2,
        style: { opacity: 0.8 },
        onPress: jest.fn(),
      },
      desc: 'renders correctly with all custom props combined',
    },
  ];

  runSnapshotTests(GeneralText, configs);
});