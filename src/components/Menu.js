import React from 'react';
import recipes from '../recipes';

const Menu = () => {
    return (
      <div id='menu' className='menu-container'>
          <div className='menu-header'>
              <h2>Specials this week!</h2>
          </div>
          <div className='cards'>
              {
                  recipes.map(recipe =>
                    <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                        </div>
                    </div>
                  )
              }
          </div>
      </div>
    );
};

export default Menu;