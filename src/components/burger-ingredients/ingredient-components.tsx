import React, { Dispatch, SetStateAction, useState } from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import { IIngredient } from '../../utils/types';
import IngredientModal from '../ingredient-details/ingredient-details';

interface ITypeSection {
  title: string;
  ingredientType: string;
  addIngredients: Dispatch<SetStateAction<IIngredient[]>>;
  ingredients: Array<IIngredient>;
  addedIngredients: Array<IIngredient>;
};

interface ISections {
  id: number;
  name: string;
  type: string;
}

interface ICard {
  item: IIngredient;
  addIngredients: Dispatch<SetStateAction<IIngredient[]>>;
  ingredients: Array<IIngredient>;
}

function Card({ item, addIngredients, ingredients }: ICard) {
  const { price, image, name, type } = item;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const bunIngregients = ingredients.filter(ingredient => ingredient.type === 'bun');

  const handleAddIngredient = () => {
    setModalOpen(true);
    if (!(bunIngregients.length > 1 && type === 'bun')) {
      addIngredients([...ingredients, item]);
    }
  }

  return (
    <div>
      <div className={`${ingredientsStyles['info-card']} mt-10`}>
        <img alt={name} src={image} onClick={() => setModalOpen(true)} className='pl-4 pr-4' />
        <div onClick={handleAddIngredient} className={`${ingredientsStyles['description-card']} mt-10`}>
          <p className='text text_type_main-default pr-2'>{price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p onClick={handleAddIngredient} className='text text_type_main-default pt-2 pb-6'>{name}</p>
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
    <div className={`${ingredientsStyles['tabs-wrapper']}`}>
      {sections.map(section => (
        <Tab key={section.id} value={section.type} active={current === section.type} onClick={setCurrent}>
          {section.name}
        </Tab>
      ))}
    </div>
  );
}

function TypeSection({ title, ingredientType, addIngredients, ingredients, addedIngredients }: ITypeSection) {
  return (
    <>
			<p className='text text_type_main-medium mt-10 mb-6'>{title}</p>
			<section className={`${ingredientsStyles['section-wrapper']}`}>
				{ingredients.map((item) => {
					if (item.type === ingredientType) {
						return <Card key={item._id} addIngredients={addIngredients} ingredients={addedIngredients} item={item} />
					} else return null;
				})}
			</section>
    </>
  );
}

export { TypeSection, Tabs, Card };