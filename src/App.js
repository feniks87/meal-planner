import React from 'react';
import Layout from './hoc/Layout';
import { useDispatch } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/Recipes/RecipeList';
import CreateRecipe from './components/Recipes/CreateRecipe';
import WeeklyMenu from './components/Menu/WeeklyMenu';
import { clearMessage } from './actions/alertActions';
import { history } from './helpers/history';
import HomePage from './components/Home/HomePage';


function App() {

  const dispatch = useDispatch();
  history.listen((location, action) => {
    dispatch(clearMessage());
});

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/menu" component={WeeklyMenu}/>
          <Route path="/recipe-list" component={RecipeList} />
          <Route path="/create-recipe" component={CreateRecipe} />
        </Switch>
      </Layout>
    </Router>
);

}

export default App;
