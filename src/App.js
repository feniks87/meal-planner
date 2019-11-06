import React from 'react';
import Layout from './hoc/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/Recipes/RecipeList';
import CreateRecipe from './components/Recipes/CreateRecipe';
import WeeklyMenu from './components/Menu/WeeklyMenu';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/menu" component={WeeklyMenu} />
          <Route path="/recipe-list" component={RecipeList} />
          <Route path="/create-recipe" component={CreateRecipe} />
        </Switch>
      </Layout>
    </Router>
);

}

export default App;
