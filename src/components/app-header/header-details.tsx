import React, { ReactElement } from 'react';
import headerStyles from './app-header.module.css';

function MenuNav({text, icon}: { text: string; icon: ReactElement}) {
  return (
    <nav className={`${headerStyles['item-wrapper']} pl-5 pr-5 pb-4 pt-4 mr-2`}>
      {icon}
      <p className='pl-2 text text_type_main-default text_color_inactive'>{text}</p>
    </nav>
  );
}

export default MenuNav;
