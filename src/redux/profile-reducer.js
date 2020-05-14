import {usersAPI} from "./../api/api"
import {profileAPI} from "./../api/api"

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

//моя работа
// const ADD_NEW_POST = 'ADD_NEW_POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: "It's my first post", likesCount: 77 },
        { id: 3, message: 'bla bla bla', likesCount: 11 },
        { id: 4, message: "da da", likesCount: 77 },
    ],
   
    profile: null,
    status: ""        
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };           
        }        
        case SET_STATUS: {
            return {
                ...state,
                status: action.status   
            };                
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }

        //моя работа
        // case ADD_NEW_POST:{
        //     let newPostAdd = {
        //         id: 9,
        //         message: action.profilePost,
        //         likesCount: 0
        //     };
        //     return {
        //         ...state,
        //         posts: [...state.posts, newPostAdd],                
        //     };           
        // }

        default :
         return state;
    } 
}

export const addPostActionCreator = (newPostText) => ( {type: 'ADD-POST', newPostText} ); // тоже самое как нижняя функция // вверху сохранил в const
// export const updateNewPostTextActionCreator = (text) => {    
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     }
// };
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setStatus = (status) => ({type: 'SET_STATUS', status});


export const getUserProfile = (userId) => (dispatch) =>{
    usersAPI.getProfile(userId).then( response => {
        dispatch( setUserProfile(response.data));
       });     
} 

export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
    .then( response =>{ 
       
        dispatch(setStatus(response.data))
    });     
} 

export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)    
    .then( response => {                 
         if(response.data.resultCode === 0){                      
             dispatch(setStatus(status));                       
        }         
    });     
} 

// // моя пабота
// export const addPostAC = (profilePost) =>
//     ({type: 'ADD_NEW_POST', profilePost});




export default profileReducer;