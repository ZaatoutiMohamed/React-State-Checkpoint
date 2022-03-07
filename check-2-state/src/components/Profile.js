import React, {useState}  from 'react';
 
class Profile extends React.Component {
    constructor(){
        super()
        this.state ={ fullName: 'Mohamed Zaatouti',
        profession: 'GoMyCode student',
        imgSrc: "https://www.entreprises-magazine.com/wp-content/uploads/2020/05/Gomycode-et-Tunisia-Jobs-696x385.jpg"
        }
      }
    
render(){
    return(


    <div>
      <h1>{this.state.fullName}</h1>
      <img  src={this.state.imgSrc}/>
      <h3>{this.state.profession}</h3>
    </div>

    )
};
}
export default Profile;