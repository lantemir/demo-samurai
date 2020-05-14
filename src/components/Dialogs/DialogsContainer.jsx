import React from 'react';

import Dialogs from './Dialogs';

import {sendMessageCreator} from '../../redux/dialogs-reducer';
//import StoreContext from './../../StoreContext';
import { connect } from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from 'redux';





// const DialogsContainer = () => {

    
//     return <StoreContext.Consumer> 
//             {   (store) => {                     

//                     let OnSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     }

//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateBodyOfNewMessageBodyCreator(body));
//                     }  


//                     return <Dialogs updateNewMessageBody = {onNewMessageChange} 
//                                     sendMessage ={OnSendMessageClick} 
//                                     dialogsPage={store.getState().dialogsPage} />
//                 }       
//             }
//            </StoreContext.Consumer>    
    
// }        

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {    
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }    
       
    }
}



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs) 