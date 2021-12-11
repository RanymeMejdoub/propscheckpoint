import react from 'react';
import Proptypes from 'prop-types';
import myprofile from './myprofile.jpg';

export const Profile =(props) => {
    const handleName =()=> alert ('this is ${props.fullName}')
    console.log(props)
    return(
        <div>
  {props.children} 
<h1>{props.fullNname}</h1>
<h1>{props.Bio}</h1>
<h1>{props.Profission}</h1>
<img src={myprofile} alt='this is my profile pic !'></img> 
<button onClick={handleName}>click me</button>
</div>
    )

 
    Profile.defaultProps = {
        fullName:"fullName"
    }

    Profile.Proptypess={
        fullName : Proptypes.string
    }

}
export default Profile;

