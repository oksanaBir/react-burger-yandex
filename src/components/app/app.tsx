import React, { ReactElement, useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';
import { fetchIngredients } from "../../utils/api.js";
import { IIngredient } from '../../utils/types';

function App():ReactElement {
  const [addedIngredients, addIngredients] = useState<IIngredient[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  useEffect(() => {
    fetchIngredients().then(({ data }) => setIngredients(data));
  }, []);

  return (
    <div className={appStyles['app-block']}>
      <AppHeader />
      <main className={`${appStyles['main-blocks']} pb-10`}>
        <BurgerIngredients
          ingredients={ingredients}
          addedIngredients={addedIngredients}
          addIngredients={addIngredients}
        />
        <BurgerConstructor ingredients={addedIngredients} />
      </main>
    </div>
  );
}

export default App;
