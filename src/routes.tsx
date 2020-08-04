import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeachList from './pages/TeachList';
import TeachForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={TeachList}/>
            <Route path="/give-classes" component={TeachForm}/>
        </BrowserRouter>
    )
}
export default Routes;
