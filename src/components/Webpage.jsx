import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ReactNotification from 'react-notifications-component'

import SignedContract from './contractSigned/Main';
import ReviewContract from './reviewContract/Main';
import Reservation from './reservation/Main';
import Landing from "./landing/Main";
import Header from './header/Main'
import Footer from './footer/Main'
import Page404 from './Page404'

import DocumentContext from '~/src/context/Document'
import contractFields from '~/src/static/contract/fields'

const Webpage = () => {
    //Set up global context with state management
    const [data, setData] = React.useState(contractFields);
    const [reference_id,setReference_id] = React.useState();
    const [brand_id, setBrand_id] = React.useState(2);

    return (
        <DocumentContext.Provider value={{data,setData,reference_id,setReference_id,brand_id, setBrand_id}}>
            <ReactNotification />
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/reservation" component={Reservation}/>
                    <Route path="/signed" component={SignedContract}/>
                    <Route path="/review" component={ReviewContract}/>
                    <Route component={Page404}/>
                </Switch>
            </Router>
            <Footer/>
        </DocumentContext.Provider>
    )
}

export default Webpage