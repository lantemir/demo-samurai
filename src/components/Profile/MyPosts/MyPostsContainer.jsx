import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator, addPostAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from './../../../StoreContext';
import { connect } from 'react-redux';



// const MyPostsContainer = () => {

//     //let state = props.store.getState();

//     return (
//         <StoreContext.Consumer> 
//             {
//             (store) => {
//                 let state = store.getState(); // ошибка?
//                 let addPost = () => {            
//                     store.dispatch(addPostActionCreator());              
//                 }
            
//                 let onPostChange = (text) => { 
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action); // запускает profileReducer я думаю
//                 }

//                 return <MyPosts updateNewPostText={onPostChange} 
//                           addPost = {addPost}    
//                           posts={state.profilePage.posts}    
//                           newPostText={state.profilePage.newPostText}/> }
//             }
//        </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state) => {
    
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText 
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText)); 
        }

        // // моя работа
        // addPostDis: (profilePost) => {
        //     dispatch(addPostAC(profilePost));
        // }

        
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer