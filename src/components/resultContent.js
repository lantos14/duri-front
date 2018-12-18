import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/styles.scss';

import { Card } from '../components/card';

export class ResultContent extends React.Component {

  render() {
    return (
      <div id='result-content' className='content'>
        <div className='columns is-multiline is-mobile'>

          <Card img='http://lp2.hm.com/hmgoepprod?set=source[/38/54/385434d93d0c0a46baa9893dc6e49d99ccdbac7c.jpg],origin[dam],category[ladies_shirtsblouses_blouses],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'
            name='Fodros blúz'
            price='6,995' />

          <Card img='http://lp2.hm.com/hmgoepprod?set=source[/38/54/385434d93d0c0a46baa9893dc6e49d99ccdbac7c.jpg],origin[dam],category[ladies_shirtsblouses_blouses],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'
            name='Fodros blúz'
            price='6,995' />

          <Card img='http://lp2.hm.com/hmgoepprod?set=source[/38/54/385434d93d0c0a46baa9893dc6e49d99ccdbac7c.jpg],origin[dam],category[ladies_shirtsblouses_blouses],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'
            name='Fodros blúz'
            price='6,995' />

          <Card img='http://lp2.hm.com/hmgoepprod?set=source[/38/54/385434d93d0c0a46baa9893dc6e49d99ccdbac7c.jpg],origin[dam],category[ladies_shirtsblouses_blouses],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'
            name='Fodros blúz'
            price='6,995' />

        </div>
      </div>
    )
  }
}