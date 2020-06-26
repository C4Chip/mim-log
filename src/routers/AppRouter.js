import React from 'react';
import Mimlog from '../mimComponents/mimApp';
import PastMim from '../mimComponents/PastMimPage';
import EditCasePage from '../pastMimComponents/EditCasePage';
import AddCasePage from '../pastMimComponents/AddCasePage';
import HelpPage from '../mimComponents/HelpPage';
import { BrowserRouter, Route, Link } from "react-router-dom";

const AppRouter = ()=>(

        <BrowserRouter>
        <div>
            <Route path="/" component={Mimlog} exact={true}/>
            <Route path="/mim-man" component={PastMim}/>
            <Route path="/add" component={AddCasePage} />
            <Route path="/edit/:id" component={EditCasePage} />
            <Route path="/help" component={HelpPage} />
        </div>
        </BrowserRouter>
)

export default AppRouter;