import React, { useEffect, useState } from 'react';
import constructorStyles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../modal/modal";
import { IIngredient } from '../../utils/types';
import OrderDetails from "../order-details/order-details";

function BurgerConstructor({ingredients} : {ingredients: Array<IIngredient>}) {
  const bunIngregients = ingredients.filter(ingredient => ingredient.type === 'bun');
  const [price, setPrice] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const totalPrice = ingredients.reduce(
      (acc, item) => acc + item.price, 0
    );
    setPrice(totalPrice);
  }, [ingredients]);


  return (
    <div className={`${constructorStyles['main-wrapper']}`}>
      <div className={`${constructorStyles['constructor-block']} mt-25`}>
        {bunIngregients.length > 0 && (
          <div className={`${constructorStyles['card-wrapper']} ml-8`}>
            <ConstructorElement
              isLocked
              text={bunIngregients[0].name + '(верх)'}
              type='top'
              price={bunIngregients[0].price}
              thumbnail={bunIngregients[0].image_mobile}
            />
          </div>
        )}
        <div className={`${constructorStyles['list-items']} custom-scroll`}>
          {ingredients.map((ingredient, index) => {
            const { name, price, type, image_mobile, _id } = ingredient;
            if (type !== 'bun') {
            return (
              <div key={index} className={`${constructorStyles['card-wrapper']} mb-4`}>
                <span className='mr-2'>
                  <DragIcon type="primary" />
                </span>
                <ConstructorElement
                  text={name}
                  price={price}
                  thumbnail={image_mobile}
                />
              </div>
              )
            } else return null;
          })}
        </div>
        {bunIngregients.length > 0 && (
          <div className={`${constructorStyles['card-wrapper']} ml-8`}>
            <ConstructorElement
              isLocked
              text={bunIngregients[0].name + '(низ)'}
              type='bottom'
              price={bunIngregients[0].price}
              thumbnail={bunIngregients[0].image_mobile}
            />
          </div>
        )}
      </div>
      <div className={`${constructorStyles['counter-box']} mt-10`}>
        <p className='text text_type_digits-medium mr-2'>{price}</p>
        <CurrencyIcon type="primary" />
        <div className='pl-10'>
          <Button htmlType='button' type='primary' size='medium' onClick={() => setModalOpen(true)}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  )
}

export default BurgerConstructor;
