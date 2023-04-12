import React, { Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';
import { Tabs, TypeSection } from './IngredientDetails';

function BurgerIngredients({ addIngredients, ingredients } : { addIngredients: Dispatch<SetStateAction<any[]>>; ingredients: Array<any>}) {
  const sections = [{ name: 'Булки', type: 'bun' }, { name: 'Соусы', type: 'sauce' }, { name: 'Начинки', type: 'main' }];

  return (
    <div>
      <p className='text text_type_main-large mb-10 mt-5' >Соберите бургер</p>
      <Tabs sections={sections} />
      <div className='custom-scroll' style={{ overflowY: 'scroll', height: 'calc(100vh - 244px)' }}>
        {sections.map((section, index) => (
          <TypeSection
            key={index}
            ingredients={ingredients}
            ingredientType={section.type}
            title={section.name}
            addIngredients={addIngredients}
          />
        ))}
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  addIngredients: PropTypes.func,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default BurgerIngredients;
