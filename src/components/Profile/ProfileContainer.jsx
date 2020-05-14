import React from 'react';
import Profile from './Profile';
import {getUserProfile, getStatus,updateStatus } from './../../redux/profile-reducer';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'



class ProfileContainer extends React.Component { 

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
                 
        return (            
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />            
        )
    }
} // 1слой выполняется потом


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile, // отправит в profInfo state 
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId, //ветки смотреть комбайнер редсер
    isAuth: state.auth.isAuth    
});


export default compose(connect(mapStateToProps,{getUserProfile ,getStatus , updateStatus}),
                                       withRouter
                                      // withAuthRedirect
                                       )(ProfileContainer); 








// let mapStateToProps = (state) => ({
//     a: 13
// }) // возврат объекта

// let mapStateToProps = (state) => {
//     тело функции
// } //  тело функции