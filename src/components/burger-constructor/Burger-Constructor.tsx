import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import constructorStyles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../modal/Modal";
import AcceptModal from "../modal/Accept-Modal";

function BurgerConstructor({ingredients} : {ingredients:  Array<any>}) {
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
    <div style={{ height: 'calc(100vh - 300px)' }}>
      <div className={`${constructorStyles['constructor-block']} custom-scroll mt-25`} style={{ overflow: 'auto'}}>
        {bunIngregients.map(ingredient => (
          <div style={{ maxHeight: '80px' }}>
            <ConstructorElement
              text={ingredient.name}
              type='top'
              price={ingredient.price}
              thumbnail={ingredient.image_mobile}
            />
          </div>
        ))}
        {ingredients.map(ingredient => {
          const { name, price, image_mobile } = ingredient;
          if (ingredient.type !== 'bun') {
          return (
            <div style={{ maxHeight: '80px' }}>
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image_mobile}
              />
            </div>
            )
          } else return null;
        })}
          {bunIngregients.map(ingredient => (
          <div style={{ maxHeight: '80px' }}>
            <ConstructorElement
              text={ingredient.name}
              type='bottom'
              price={ingredient.price}
              thumbnail={ingredient.image_mobile}
            />
          </div>
        ))}
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
          <AcceptModal />
        </Modal>
      )}
    </div>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default BurgerConstructor;
