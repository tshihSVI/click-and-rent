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
import Header from './header/Main'
import Footer from './footer/Main'

import DocumentContext from '~/src/context/Document'
import contractFields from '~/src/static/contract/fields'

const Webpage = () => {
    //Set up global context with state management
    const [data, setData] = React.useState(contractFields);
    const [reference_id,setReference_id] = React.useState()

    return (
        <DocumentContext.Provider value={{data,setData,reference_id,setReference_id}}>
            <ReactNotification />
            <Header/>
            <Router>
                <Switch>
                    <Route path="/signed">
                        <SignedContract/>
                    </Route>
                    <Route path="/review">
                        <ReviewContract/>
                    </Route>
                    <Route path="">
                        <Reservation/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </DocumentContext.Provider>
    )
}

export default Webpage