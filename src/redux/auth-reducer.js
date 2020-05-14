import {authAPI} from './../api/api';
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';




let initialState = {
    userId: null,
    email:null,
    login: null, 
    isAuth: false  
   
};
      
const authReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_DATA: 
            return {
                ...state, 
                ...action.payload // перезатрёт стэйт
                
               
            }

        
        default:
         return state;
    } 
}

export const setAuthUserData  = (userId, email, login, isAuth) => ( {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}  ); // тоже самое как нижняя функция // вверху сохранил в const

export const getAuthUserData = () => async (dispatch) =>{
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;// деструктуризация
        dispatch(setAuthUserData(id, email, login, true));
    }

} 


// санка. фукция которая принимает параметры и возвращает санку. у санки есть досту к параметрам первым
export const login = (email, password, rememberMe) => async (dispatch) =>{

    //let action = stopSubmit("login",{email: "Coomon erroe" });  //const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm) отсюда 'login' берётся
    
 
   let response = await authAPI.login(email, password, rememberMe);
        
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else{
                let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error";
                dispatch(stopSubmit("login", {_error: message }));
            }
      
} 

export const logout = () => async (dispatch) =>{
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
        
} 

export default authReducer;