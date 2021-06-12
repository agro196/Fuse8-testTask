import React from 'react';
import cx from 'clsx';
import {Container} from "../Container";
import './Header.scss';

export function Header({className, ...props}) {
   return (
     <header className={cx(className, 'page-header')} {...props}>
        <Container className="page-header__wrapper">
           <h1 className="page-header__title">Our Latest Developments</h1>
        </Container>
     </header>
   )
}
