import * as React from 'react';
import './Styles/spc.css'
import './circle.scss'
import $ from 'jquery'
import {Locations} from './data.js'


export default class LogoAnime extends React.Component {

    componentDidMount(e) {  
    
      document.onkeydown = this.Arrow;

      locations = Locations(0,0,0);
      var Page3 = Locations (0,2000 , 11)


      Page3.forEach((obj) => {
         locations.push(obj)     
      })





      var Screen_Width = window.innerWidth;


      this.setState({CraterInfo:locations , Visible_Area : Screen_Width})

$(document).on('mousewheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);

    if(Math.abs(event.deltaY)<=40)         event.deltaY/=40;if(event.DeltaX > 0) alert("")
    if(Math.abs(event.deltaX)>=40)         event.deltaX/=40;





});


}
   
 constructor (props) {
    super(props);

    this.state = {
    CraterInfo:[],
    CurrentCrater : -1,
    CurrentLeft : 300,
    CurrentTop : 800,
    Visible_Area : 1024

    };



}       

 AutoScroll = (x) => {
 $("html,body").animate({
        scrollLeft:x 
    }, 1000);
 }


 SuperStructure  = (iTop , iLeft , Locked) => {  

  
            
                var previousTop = this.state.CurrentTop
                var previousLeft = this.state.CurrentLeft
            

          this.setState({CurrentCrater : this.state.CurrentCrater + 1 })


           
              if (previousLeft < iLeft)  {  
  
                        
                       $('#Spaceship').animateRotate(25);
                       if (previousTop < iTop) $('#Spaceship').animateRotate(55);
                       if (previousTop > iTop) $('#Spaceship').animateRotate(15);
                     
                       ScrollState = 1
                 

}

              if (previousLeft > iLeft)  {


                       $('#Spaceship').animateRotate(-155);
                            if (previousTop > iTop) $('#Spaceship').animateRotate(-115);
                            if (previousTop < iTop) $('#Spaceship').animateRotate(-165);

                     ScrollState = -1

}
     if (previousLeft == iLeft)  {


                       $('#Spaceship').animateRotate(-155);
                            if (previousTop > iTop) $('#Spaceship').animateRotate(-65);
                            if (previousTop < iTop) $('#Spaceship').animateRotate(117);


}





         if(!Locked)       this.setState({ CurrentTop : iTop , CurrentLeft: iLeft  }) 


                                    
var w = window.innerWidth;var h = window.innerHeight

var DecLeft = (w/100) * iLeft
var DecTop = (h/100) * iTop

var Leftsubtract = (DecLeft / 100) * 2
var Topsubtract =  (DecTop / 100) * 2


  if (Locked)  {

            $("#Spaceship").delay(400).animate({left: DecLeft - Leftsubtract  , top: DecTop - Topsubtract  },500); // halfway
            setTimeout (() => {  $('#Spaceship').animateRotate(-200) } , 1500)  
            $("#Spaceship").delay(800).animate({left: previousLeft + "%" , top: previousTop + "%"  },500); //return

            setTimeout (() => {alert("You Ran Out Of Fuel")} , 1000)
 
   }

  if (!Locked) { 


           var Where = DecLeft

           var Screen = window.innerWidth

           var Start = $(document).scrollLeft()

           var EndPoint = Start + Screen

           var TwoParts = (Screen / 3)  + (Screen / 3)

           var First_Tri = Start + (Screen / 3) 

           var Middle = Start + TwoParts

           var n = (Screen/4) * ScrollState

           if (Where > First_Tri && Where < Middle) { this.AutoScroll(Start + n) }

           $("#Spaceship").delay(200).animate({left: DecLeft  , top:DecTop },500);



      }

 

      
           
                      //    $('html,body').stop()

                       //   var v = $(document).scrollLeft()

                        //  var Screen = window.innerWidth

                       //   var n = (Screen/2.6) * ScrollState

                        //console.log(v + n)

                         //if (v < (Screen + 700))    { this.AutoScroll(2000) }



  }


 

  
     render() {
       return (
         <div>


      <img id = "Spaceship" src = {require("./Images/rocket-trans.png")} />

        {this.state.CraterInfo.map(i=>{



return ( 

    

      <img className = "Crater" key = {i.key} style ={{top:i.Top + "%"  , left:i.Left + "%"   }} 

           src = {require("./Images/CraterTitle.jpg")} onClick = {() =>   {

  this.SuperStructure(i.Top , i.Left)

                

}}/>

)




   
             })}

  <img id = "Theme" src = {require("./Images/Theme3.jpg")} /> 

  <img className = "Crater" id = "CSL" style = {{top:"5%",left:"260%"}}  src = {require("./Images/LockedCrater.jpg")}
                                                                         onClick = {() => { this.SuperStructure(5,230,true) }} /> 


         <img className = "Crater" id = "CL"  style = {{top:"80%",left:"290%"}} src = {require("./Images/LockedCrater.jpg")} 
                                                                          onClick = {() => { this.SuperStructure(70,250,true)  }} /> 


         </div>
       );
     }

}

var MyTop
var locations
var Time = 1


var scrnum = [6,12,18,24]
var LockedCrators
var ScrollState = 1


$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};



