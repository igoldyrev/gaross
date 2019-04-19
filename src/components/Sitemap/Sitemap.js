import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { titles } from '../variables';
import Wrapper from '../common_components/wrapper/wrapper';
import H1Title from '../common_components/title-h1/titleH1';
import UnsortedList from '../common_components/list_unsorted/listUnsorted';
import ListItem from '../common_components/list_item/listItem';
import MetaTags from "react-meta-tags";

class Sitemap extends Component {
  componentDidMount() {
    document.title = `${titles.sitemap}`;
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return (
      <Wrapper>
        <MetaTags>
          <meta name="description" content="Общество с ограниченной ответственностью Гаросс - карта сайта" />
        </MetaTags>
        <H1Title text="Карта сайта" />
        <UnsortedList>
          <ListItem>
            <Link to="/" className="link">О компании</Link>
          </ListItem>
          <ListItem>
            <Link to="/licenses" className="link">Лицензии</Link>
          </ListItem>
          <ListItem>
            <Link to="/orders" className="link">Заказчики</Link>
          </ListItem>
          <ListItem>
            <Link to="/letters" className="link">Благодарственные письма</Link>
          </ListItem>
          <ListItem>
            <Link to="/contacts" className="link">Контакты</Link>
          </ListItem>
        </UnsortedList>
      </Wrapper>
    );
  }
}

export default Sitemap;
