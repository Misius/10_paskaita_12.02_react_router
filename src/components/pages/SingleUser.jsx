import { useState } from "react";
import { useHistory, useParams } from "react-router-dom"

import { usersData } from '../../App'
export default function SingleUser(props) {
    const history = useHistory();
    const { userId } = useParams();
    console.log('userId ===', userId);
    console.log('usersData ===', usersData);



    const [currentUser, setCurrentUser] = useState(
        usersData.find((uObj) => uObj.id === +userId)
        );
    
    function goBack() {
        // window.location.href
        history.push('/users');
    }
    // const currentUserId = params.userId;
    return (
        // gauti id to userio kutio informacija norim atvaizduoti
       <div> 
            <div className="card">
                <h1>{currentUser.name}</h1>
                <h4>Age is {currentUser.age}</h4>
                <p>Lives in {currentUser.town}</p>
                {/* <p className="subtitle"> Lorem ipsum dolor sit amet.</p> */}
            </div>
            <button onClick={goBack}>Go back to users</button>
        </div>
    )
}