import React from 'react';
import { connect } from 'react-redux';
import { unfollow, follow,  setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../components/common/Preloader/Preloader';
import {usersAPI} from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/users-selectors';



class UsersContainer extends React.Component {
  
   
    componentDidMount(){
        const {currentPage,pageSize} = this.props;

        this.props.requestUsers(currentPage, pageSize);
        

        
    }

     onPageChanged = (pageNumber) => {

        const {pageSize} = this.props;

        this.props.requestUsers(pageNumber, pageSize);

     }    

     render() {      
        return <>
            {this.props.isFetching ? 
            <Preloader/>
             :null}
           <Users totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     unfollow={this.props.unfollow}
                     follow={this.props.follow}
                    
                     followingInProgress={this.props.followingInProgress}
            /> 
        </>           
     }

 }


// let mapStateToProps = (state) =>{      
//     return{
//         users: state.usersPage.users, //отправка в props Users.jsx     
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,     
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }


let mapStateToProps = (state) =>{      
    return{
       // users: getUsers(state), //отправка в props Users.jsx     
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),     
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}




export default compose( 
    connect(mapStateToProps,
    {follow, unfollow,  setCurrentPage,  toggleFollowingProgress, requestUsers})
    (UsersContainer));




    //  onPageChanged = (pageNumber) => {

    //     this.props.getUsers(pageNumber, this.props.pageSize);


        //  this.props.setCurrentPage(pageNumber);
        //  this.props.toggleIsFetching(true);
        //  usersAPI.getUsers(pageNumber, this.props.pageSize)
        //      .then(data => {
        //         this.props.toggleIsFetching(false);
        //          this.props.setUsers(data.items)
        //      }); было так рефакторинг
   //  }  



     // let mapDispatchToProps = (dispatch) =>{
//     return{
//         follow: (userId) =>{    
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) =>{
//             dispatch(unfollowAC(userId));
//         }, 
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (curentPage) => {
//             dispatch(setCurentPageAC(curentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }// потимизация для connect


    // export default connect(mapStateToProps, {
    //     follow: follow,
    //     unfollow: unfollow,
    //     setUsers: setUsers,
    //     setCurrentPage: setCurentPage,
    //     setTotalUsersCount: setUsersTotalCount,
    //     toggleIsFetching: toggleIsFetching
    //     })(UsersContainer);


    // let name = 15;
    // let user = {
    //     name :name
    // }

    // let name = 15;
    // let user = {
    //     name
    // }
    //сокращенный синтаксис