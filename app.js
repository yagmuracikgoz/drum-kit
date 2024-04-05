let numberOfDrumButtons =document.querySelectorAll(".drum").length;

for (let i =0  ; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

    function handleClick(){
        alert("I got clicked!");
    }
//   handleClick functionı şöyle kısaltılabilirdi -----

//   document.querySelectorAll("button")[].addEventListener("click", function () {
//     alert("i got clicked");
    
//  })

}


