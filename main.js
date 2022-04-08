
function getData(){

    let formData={
        fname:document.querySelector("#fname").value,
        lname:document.querySelector("#lname").value,
     email:document.querySelector("#email").value,
    pwd:document.querySelector("#pwd").value

    }
 
   
    userRecord.push(users)
    console.log(JSON.stringify(userRecord))

localStorage.setItem('username',JSON.stringify(userRecord))
localStorage.setItem('pwd',pwd)
alert("Registered")

//window.location.href="login.html"
}



// login 
function login(){
    let email=document.querySelector("#email").value
    let pwd=document.querySelector("#pwd").value

    let emailuser=localStorage.getItem('username')
    let userpass=localStorage.getItem('pwd')
   // alert(emailuser)

   if(email==emailuser && pwd== userpass){

    alert("logged in")
    
    window.location.href="dashboard.html"

   }else{
    alert("Invalid Username or password")
   }

}


function logout(){

    localStorage.removeItem('username')
    localStorage.removeItem('pwd')
    window.location.href="login.html"

}