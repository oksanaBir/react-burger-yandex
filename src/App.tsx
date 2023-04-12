import React, { useState } from 'react';
import AppHeader from './components/app-header/App-Header';
import BurgerIngredients from './components/burger-ingredients/Burger-Ingredients';
import BurgerConstructor from './components/burger-constructor/Burger-Constructor';

function App() {
  const [ingredients, addIngredients] = useState<any>([]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <AppHeader />
      <div
        className='pb-10'
        style={{
          display: 'grid',
          gridColumnGap: '40px',
          gridTemplateColumns: 'repeat(2, minmax(600px, 600px))',
          justifyContent: 'center',
          paddingTop: '88px',
        }}>
        <BurgerIngredients ingredients={ingredients} addIngredients={addIngredients} />
        <BurgerConstructor ingredients={ingredients} />
      </div>
    </div>
  );
}

export default App;
