let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);
var formElement = document.querySelector("form")

if(!getUsersdata){
   function nologin(){
      window.location.href = "signin.html"
   }
}



function Signup(){
   let username = document.getElementById("naam").value;
   let mobile = document.getElementById("phone").value;
   let password = document.getElementById("pass").value;
   
   if(mobile.length==0)
   {
    alert("Enter mobile number");
    }
   else if(mobile.length !== 10)
   {
      alert("mobile number should have 10 digits");
   }
   else{

       let userData = {
        username:username,
        mobile:mobile,
        password:password
       }
    
      let users = [...getUsersdata,userData];
      localStorage.setItem("usersdata", JSON.stringify(users));
    formElement.reset()

 

      alert("Signup Successfull");
      window.location.href = "signin.html"
   }


}
