function Palidrom(){

    let value=123;

    function PalidromNumber(){
         let reversValue = value.toString().split("").reverse().join("");
           let reversStr= value.toString();

          if(reversValue == reversStr){
               console.log(true)
          }else{
             console.log(false)
          }
    };

    PalidromNumber();
     return(
        <>
                             
        </>
     )
};


export default Palidrom;