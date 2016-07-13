'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import AbstractForm from '../../dist/js/AbstractForm'
import Dropdown from '../../dist/js/Dropdown';
import RangeSlider from '../../dist/js/RangeSlider';
import StarRating from '../../dist/js/StarRating';
import TagBoolean from '../../dist/js/TagBoolean';
import TextArea from '../../dist/js/TextArea';

function getDomNode(selector) {
    return document.querySelector(selector);
}

const dropdownEl = getDomNode('.component-dropdown-container'),
      rangeSliderEl = getDomNode('.component-range-slider-container'),
      starRatingEl = getDomNode('.component-star-rating-container'),
      tagBooleanEl = getDomNode('.component-tag-boolean-container'),
      textAreaEl = getDomNode('.component-textarea-container');

let ToRender,
    model,
    container,
    formModel = require('../../models/abstract-form'),
    renderReact = true;

if (dropdownEl) {
    ToRender = Dropdown;
    container = dropdownEl;
    model = require('../../models/dropdown');
} else if (rangeSliderEl) {
    ToRender = RangeSlider;
    container = rangeSliderEl;
    model = require('../../models/range-slider');
} else if (starRatingEl) {
    ToRender = StarRating;
    container = starRatingEl;
    model = require('../../models/star-rating');
} else if (tagBooleanEl) {
    ToRender = TagBoolean;
    container = tagBooleanEl;
    model = require('../../models/tag-boolean');
} else if (textAreaEl) {
    ToRender = TextArea;
    container = textAreaEl;
    model = require('../../models/textarea');
} else {
  renderReact = false;
}


if (renderReact) {
    ReactDOM.render(
      <AbstractForm model={formModel}>
          <ToRender model={model} />
      </AbstractForm>,
      container
    );
}