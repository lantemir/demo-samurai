import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
//import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FomsControls';


const maxLength10 = maxLengthCreator(10);




const MyPosts = React.memo(props => {

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps != this.props || nextState != this.state; // что бы не отрисовывать копоненту лишний раз это же за нас дедает PureComponent для классовой компоненты
    // }    

    let postsElements = 
        [...props.posts] // интьютабельность делает копию массива и не меняет в бизнесе state 88 урок 22 минута pure function
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {      
        props.addPost(values.newPostText);       
    }
   
    return (
        
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>

                {postsElements}

                {/* <Post message= {posts[0].message} likesCount={posts[0].likesCount} id={posts[0].id} />  
                <Post message= {posts[1].message} likesCount={posts[1].likesCount} id={posts[1].id} />                */}
            </div>
        </div>

    )
    
});


// моя работа 
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name="newPostText" component={Textarea} placeholder={"Post message"} 
                        validate ={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    ) 
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts