
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {

        profilePage:{
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 11 },
                { id: 2, message: "It's my first post", likesCount: 77 },
                { id: 3, message: 'bla bla bla', likesCount: 11 },
                { id: 4, message: "da da", likesCount: 77 },
            ],
            newPostText: 'it-kamasutra.com'        
        },
    
        dialogsPage: {
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
            newMessageBody: "" 
        },   
        sidebar: {} 
    },

    _callSubscriber () {
        console.log('state was changed'); //перезапишется subscribe на колбеке
    },


    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer; //патерн observer
    
    },


    // _addPost () {  
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // _updateNewPostText (newText) {      
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);        

    }


}

// export const fake = () => 5;  //это фунция ретурник 5





export default store;


window.store = store;

