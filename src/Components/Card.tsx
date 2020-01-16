import * as React from 'react';
import firebase from 'firebase';


export default class Counter extends React.Component {

  state = ({    data: [] , Complete : "" });

  async componentDidMount() {


  initialise();
  // ____________________________________________________________________________________________
  // Define Methods

  
    const asyncExample = async() => {
      let Res;
     
        Res =  await firebase.database().ref('/users')
        .once('value').then((data) => {
         return data.val()
         })   

        return Res;
    };
    
 // _______________________________________________________________________________________________
 // Use Methods

    const Read_Users = await asyncExample();  
    console.log(Read_Users);

  
  
  }


  

 constructor (props:Object) {
 super(props)

 }

 
 

  render() {
    return (
      <div>
       <h1>
       </h1>
      </div>
    );
  }

}











const initialise = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAvYQLFEgjGSJcSHnZdtRgoEDrQMCDG-B4",
    authDomain: "influence-8f6f6.firebaseapp.com",
    databaseURL: "https://influence-8f6f6.firebaseio.com",
    projectId: "influence-8f6f6",
    storageBucket: "influence-8f6f6.appspot.com",
    messagingSenderId: "316263593649",
    appId: "1:316263593649:web:c3f6f5e698acba9d365490"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}