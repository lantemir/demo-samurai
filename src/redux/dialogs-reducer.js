
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
        { id: 1, name: 'Димыч' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Темир' },
        { id: 4, name: 'Маке' },
        { id: 5, name: 'Виктор' },
        { id: 6, name: 'Валера' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are your it' },
        { id: 3, message: 'you' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ],
    
}    

 const dialogsReducer = (state = initialState, action) => {

   

        switch(action.type){   
            
            case SEND_MESSAGE:
                let body = action.newMessageBody;   
                return {
                    ...state,                  
                    messages: [...state.messages, {id:6, message: body}]
                };                    
            
            default:
                return state;
        }      
        
}

export const sendMessageCreator = (newMessageBody) => ({type: 'SEND_MESSAGE', newMessageBody})



export default dialogsReducer;