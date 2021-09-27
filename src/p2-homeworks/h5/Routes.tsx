import React from 'react'
import {Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus'
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
