import React, { Dispatch, SetStateAction, useState } from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data.json';
import Modal from '../modal/Modal';
import IngredientModal from '../modal/Ingredient-Modal';

interface ITypeSection {
  title: string;
  ingredientType: string;
  addIngredients: Dispatch<SetStateAction<any[]>>;
  ingredients: Array<any>;
};

interface ISections {
  name: string;
  type: string;
}

interface IItem {
  price: number;
  image: string;
  name: string;
}

interface ICard {
  item: IItem;
  addIngredients: Dispatch<SetStateAction<any[]>>;
  ingredients: Array<any>;
}

function Card({ item, addIngredients, ingredients }: ICard) {
  const { price, image, name } = item;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`${ingredientsStyles['info-card']} mt-10`}
        onClick={() => {
          addIngredients([...ingredients, item]);
          setModalOpen(true)
        }}
      >
        <img alt='ingredient' src={image} className='pl-4 pr-4' />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className='text text_type_main-default pr-2'>{price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p className='text text_type_main-default pt-2 pb-6'>{name}</p>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)} title='Добавить ингредиент'>
          <IngredientModal ingredient={item} />
        </Modal>
      )}
    </div>
  );
}

function Tabs({ sections } : {sections: ISections[]}) {
  const [current, setCurrent] = React.useState<string>(sections[0].type);

  return (
    <div style={{ display: 'flex' }}>
      {sections.map(section => (
        <Tab value={section.type} active={current === section.type} onClick={setCurrent}>
          {section.name}
        </Tab>
      ))}
    </div>
  );
}

function TypeSection({ title, ingredientType, addIngredients, ingredients }: ITypeSection) {
  return (
    <>
			<p className='text text_type_main-medium mt-10 mb-6'>{title}</p>
			<section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
				{data.map((item) => {
					if (item.type === ingredientType) {
						return <Card addIngredients={addIngredients} ingredients={ingredients} item={item} />
					} else return null;
				})}
			</section>
    </>
  );
}

Card.propTypes = {
  item: PropTypes.shape({ price: PropTypes.number, image: PropTypes.string, name: PropTypes.string}),
  addIngredients: PropTypes.func,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

Tabs.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string),
};

TypeSection.propTypes = {
  title: PropTypes.string,
  ingredientType: PropTypes.string,
  addIngredients: PropTypes.func,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export { TypeSection, Tabs, Card };