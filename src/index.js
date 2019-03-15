import React from 'react';
import { render } from 'react-dom';
import './components/Body';
import IndexText from './components/IndexText';

const IndexTextElement = <IndexText text="ggdg" />;

render(
  IndexTextElement,
  document.getElementById('root')
);
