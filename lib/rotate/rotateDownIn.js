'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateXTranslateZ = (0, _utils.compose)(_utils.perspective, _utils.rotateX, _utils.translateZ);


var rotateDownIn = {
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

exports.default = rotateDownIn;