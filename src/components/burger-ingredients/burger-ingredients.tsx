import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuid } from 'uuid';
import { IIngredient } from '../../utils/types';
import { Tabs, TypeSection } from '../burger-ingredients/ingredient-components';
import ingredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients({ addIngredients, ingredients, addedIngredients } : {
  addIngredients: Dispatch<SetStateAction<IIngredient[]>>;
  ingredients: Array<IIngredient>;
  addedIngredients: Array<IIngredient>;
}) {
  const sections = [{ name: 'Булки', type: 'bun' }, { name: 'Соусы', type: 'sauce' }, { name: 'Начинки', type: 'main' }];

  return (
    <div>
      <p className='text text_type_main-large mb-10 mt-5' >Соберите бургер</p>
      <Tabs sections={sections} />
      <div className={`${ingredientsStyles['main-section-wrapper']} custom-scroll`}>
        {sections.map(section => (
          <TypeSection
            key={uuid()}
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
