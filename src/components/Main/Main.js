import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

function Main() {
  return (
    <Switch>
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  );
}

export default Main;
