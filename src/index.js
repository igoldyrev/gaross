import React from 'react';
import { render } from 'react-dom';
// import './components/body';
// import MenuListCls from "./components/MenuList";
// import Wrapper from "./components/Wrapper";
import IndexText from './components/IndexText';

const IndexTextElement = <IndexText text="ggdg" />;

render(
  IndexTextElement,
  document.getElementById('root')
);
