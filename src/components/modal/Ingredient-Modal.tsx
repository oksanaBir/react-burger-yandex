import React from 'react';
import PropTypes from 'prop-types';

function IngredientModal({ ingredient }: { ingredient: any }) {
  const { name, image_large, calories, carbohydrates, fat, proteins } = ingredient;
  const addParameter = [
    { title: 'Калории,ккал', value: calories },
    { title: 'Белки, г', value: carbohydrates },
    { title: 'Жиры, г', value: fat },
    { title: 'Углеводы, г' , value: proteins }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img alt='ingredient' src={image_large} />
      <p className={`text text_type_main-medium mt-4 mb-8`}>
        {name}
      </p>
      <div
        className='pb-15'
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 120px)', gap: '20px' }}
      >
        {addParameter.map((parameter, index) => (
          <div key={index}>
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

IngredientModal.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    image_large: PropTypes.string,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    proteins: PropTypes.number,
  }),
};

export default IngredientModal;