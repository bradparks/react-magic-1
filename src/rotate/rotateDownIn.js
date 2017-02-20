// @flow
import { compose, perspective, rotateX, translateZ } from '../utils/utils';
import type { Animation } from '../utils/types';

const perspectiveRotateXTranslateZ = compose(perspective, rotateX, translateZ)

const rotateDownIn: Animation = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 100%',
    transform: perspectiveRotateXTranslateZ(['800px'], [-180], ['300px'])
  },
  '100%': {
    opacity: 1,
    transformOrigin: '0 0',
    transform: perspectiveRotateXTranslateZ(['800px'], [0], ['0px'])
  }
};

export default rotateDownIn;
