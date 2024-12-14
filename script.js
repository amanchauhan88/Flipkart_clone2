
var loggedInUser = JSON.parse(localStorage.getItem("usersdata")) || null
var cartData = JSON.parse(localStorage.getItem("cartData")) || []
function pageloadFun(){
   
       document.querySelector("#cart-count").innerText = cartData.length

    if(!loggedInUser){
        window.location.href="signup.html"
    }

    var loginUserName= loggedInUser[0].username

  document.querySelector("#login-user-name").innerText = loginUserName


    }



function indexpage() {
    window.location.href = "index.html"
}





    var index = 1
    slideFun(index)

    function addSlide(num){
        index = index + num
        slideFun(index)
    }

    function slideFun(idx){
        var allDivs = document.querySelectorAll(".slides")

        var dotsDiv = document.querySelectorAll("#dots>div")

        if(idx<=0){
            index = allDivs.length
        }

        if(idx>allDivs.length){
            index = 1
        }

        for(var i=0;i<allDivs.length;i++){
            allDivs[i].style.display="none"
        }

        for(var j=0;j<dotsDiv.length;j++){
            dotsDiv[j].style.backgroundColor="black"
        }

        allDivs[index-1].style.display = "block"
        dotsDiv[index-1].style.backgroundColor="blue"

    }




    // how to automate above slider

    function automateSlide(){
        addSlide(1)

        //call above function after each 2 seconds
        setTimeout(automateSlide, 2000)
    }
    automateSlide()





    function prodfun(){
        window.location.href = "product.html"
    }

    

