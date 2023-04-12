import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

function MenuNav({text, icon}: { text: string; icon: ReactElement}) {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }}
      className='pl-5 pr-5 pb-4 pt-4 mr-2'
    >
      {icon}
      <p className='pl-2 text text_type_main-default text_color_inactive'>{text}</p>
    </nav>
  );
}

MenuNav.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element
}

export default MenuNav;
