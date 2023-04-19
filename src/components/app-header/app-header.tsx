import React from 'react';
import MenuNav from './header-details';
import headerStyles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`${headerStyles['app-header']}`}>
      <div className={`${headerStyles['main-menu']}`}>
        <MenuNav icon={<BurgerIcon type='secondary' />} text='Конструктор' />
        <MenuNav icon={<ListIcon type='secondary' />} text='Лента заказов' />
      </div>
      <Logo />
      <MenuNav icon={<ProfileIcon type='secondary' />} text='Личный кабинет' />
    </header>
  );
}

export default AppHeader;
