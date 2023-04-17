import React, { ReactNode } from 'react';
import modalStyles from './ingredient-details.module.css';
import { v4 as uuid } from 'uuid';
import { IIngredient } from '../../utils/types';

function IngredientDetails({ ingredient }: { ingredient: IIngredient}) {
  const { name, image_large, calories, carbohydrates, fat, proteins } = ingredient;
  const addParameter = [
    { title: 'Калории,ккал', value: calories },
    { title: 'Белки, г', value: carbohydrates },
    { title: 'Жиры, г', value: fat },
    { title: 'Углеводы, г' , value: proteins }
  ];

  interface IParameter {
    title: string;
    value: ReactNode;
  }

  return (
    <div className={`${modalStyles['modal-layout']}`}>
      <img alt='big view of burger ingredient' src={image_large} />
      <p className={`text text_type_main-medium mt-4 mb-8`}>
        {name}
      </p>
      <div className={`${modalStyles['parameters-block']} pb-15`}>
        {addParameter.map((parameter: IParameter) => (
          <div key={uuid()}>
            {parameter.title}
            <div className='text text_type_digits-default text_color_inactive'>
              {parameter.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientDetails;