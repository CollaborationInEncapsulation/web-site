/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';
import chunk from 'lodash.chunk';
import Layout from '../../components/Layout';
import Keynote from '../../components/Keynote';
import s from './styles.css';
import Posts from '../posts';
import { title, banner, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content} header={{ background: `url(${banner}) center / cover`, title }}>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h4>Keynotes</h4>

        <Grid className="demo-grid-ruler">
          {
            chunk(Posts.list(), 2).map(ck =>
              (
                <Cell col={6}>
                  {ck.map(post => <Keynote post={post} />)}
                </Cell>
              ),
            )
          }
        </Grid>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
