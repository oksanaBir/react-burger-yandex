import React from 'react';
import { ReactComponent as CheckMark } from '../../images/check-mark.svg';
import detailStyles from './order-details.module.css';

function OrderDetails() {
  return (
    <div className={`${detailStyles['modalLayout']}`}>
      <div className={`text text_type_digits-large`}>
       {Math.floor(Math.random() * 1000000)}
      </div>
      <div className='text text_type_main-medium mt-8 mb-15'>
        идентификатор заказа
      </div>
      <CheckMark />
      <div className='text text_type_main-small mt-15 mb-2'>
        Ваш заказ начали готовить
      </div>
      <div className='text  text_type_main-small text_color_inactive mb-30'>
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  );
};

export default OrderDetails;