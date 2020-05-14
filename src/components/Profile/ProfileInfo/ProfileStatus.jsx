import React from 'react';
import s from './ProfileInfo.module.css';



class ProfileStatus extends React.Component  {



    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = ()=>  {
        this.setState({
            editMode: true
        });     
    }
    
    deactivateEditMode = () =>  {
        this.setState({
            editMode: false
        });     
        this.props.updateStatus(this.state.status);  
    }

    onStatusChange =  (e) => {
        this.setState({
            status: e.currentTarget.value
        }) ;
    }

    componentDidUpdate(prevProps, prevState) {  //меняется когда локальный state меняется или props

        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
        console.log("componentDidUpdate");
    }
    



    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}><div>{this.props.status || "----" }</div></span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus