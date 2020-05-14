import React, {useState, useEffect}from 'react';
import s from './ProfileInfo.module.css';



const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(true); // это обяснение нижней строчки
    // let editMode = stateWithSetState[0];
    // let seteditMode = stateWithSetState[1];
    let [editMode, seteditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => { //запускается после того как всё отрисуется и покажется на экране постоянно
        setStatus(props.status);
    }, [props.status]); //  привязяли к пропсу поэтому запустится один раз после отрисовки

    const activateEditMode = () => {
        seteditMode(true);
    }

    const deactivateEditMode = () =>  {        
        seteditMode(false);
        props.updateStatus(status);  
    }

    const onStatusChange =  (e) => {
        setStatus(e.currentTarget.value);        
    }


    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "----"} </span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange}  autoFocus={true}  onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks