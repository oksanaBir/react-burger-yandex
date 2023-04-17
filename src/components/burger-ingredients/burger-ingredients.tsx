import React, { Dispatch, SetStateAction } from 'react';
import { IIngredient } from '../../utils/types';
import { Tabs, TypeSection } from '../burger-ingredients/ingredient-components';
import ingredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients({ addIngredients, ingredients, addedIngredients } : {
  addIngredients: Dispatch<SetStateAction<IIngredient[]>>;
  ingredients: Array<IIngredient>;
  addedIngredients: Array<IIngredient>;
}) {
  const sections = [
    { id: 1, name: 'Булки', type: 'bun' },
    { id: 2, name: 'Соусы', type: 'sauce' },
    { id: 3, name: 'Начинки', type: 'main' }
  ];

  return (
    <div>
      <p className='text text_type_main-large mb-10 mt-5' >Соберите бургер</p>
      <Tabs sections={sections} />
      <div className={`${ingredientsStyles['main-section-wrapper']} custom-scroll`}>
        {sections.map(section => (
          <TypeSection
            key={section.id}
            ingredients={ingredients}
            addedIngredients={addedIngredients}
            ingredientType={section.type}
            title={section.name}
            addIngredients={addIngredients}
          />
        ))}
      </div>
    </div>
  );
}

export default BurgerIngredients;
