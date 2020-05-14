import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import {Input} from '../common/FormsControls/FomsControls'
import { connect } from 'react-redux';
import {login} from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from "./../common/FormsControls/FormsControls.module.css";


const LoginForm = ({handleSubmit, error}) => {
    return(     
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} 
                        validate={[required]}
                        component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[required]} component={Input} type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            { error && <div className={ style.formSummaryError }>            
                {error}
            </div>
            }   
            <div>
                <button>Login</button>
            </div>
        </form>
   
    )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe); //колбек это не нижняя функция, это колбек. Она внутри себя вызывает диспачер нижний функции
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    
    return( 
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login}) (Login); // законекченную компоненту возвращает по дефолту 
// {login} это, здесь санк криэйтер