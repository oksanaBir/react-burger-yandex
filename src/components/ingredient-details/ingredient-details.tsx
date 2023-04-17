import React, { ReactNode } from 'react';
import modalStyles from './ingredient-details.module.css';
import { IIngredient } from '../../utils/types';

function IngredientDetails({ ingredient }: { ingredient: IIngredient}) {
  const { name, image_large, calories, carbohydrates, fat, proteins } = ingredient;
  const addParameter = [
    { id: 1, title: 'Калории,ккал', value: calories },
    { id: 2, title: 'Белки, г', value: carbohydrates },
    { id: 3, title: 'Жиры, г', value: fat },
    { id: 4, title: 'Углеводы, г' , value: proteins }
  ];

  interface IParameter {
    id: number;
    title: string;
    value: ReactNode;
  }

  return (
    <div className={`${modalStyles['modal-layout']}`}>
      <img alt={name} src={image_large} />
      <p className={`text text_type_main-medium mt-4 mb-8`}>
        {name}
      </p>
      <div className={`${modalStyles['parameters-block']} pb-15`}>
        {addParameter.map((parameter: IParameter) => (
          <div key={parameter.id}>
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