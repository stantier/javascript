// Get post data
let getPosts= ()=>{

    fetch('http://localhost:3000/employees').then(response => response.json())
    .then((data) => {
        console.log(data)
        
    // using map function
    data.map((records)=>{
        //console.log(records.EmployeeID)
        let row=`<tr>
        <td>${records.id}</td>
                  <td>${records.first_name}</td>
                  <td>${records.last_name}</td>
                  <td>${records.email}</td>
                  <td><a href="" onclick="edit(${records.id})">Edit</a></td>
                  <td><a href="" >Delete Record</a></td>
                  </tr>`
                  document.getElementById("showData").innerHTML+=row;
      })

    
    }).catch((err) => {
        console.log(err);
    });
    
}
getPosts();


// edit record

let edit=(id)=>{
    let users1={
        first_name:document.querySelector("#first_name").value,
        last_name:document.querySelector("#last_name").value,
        email:document.querySelector("#email").value

    }
    console.log(users1)
    //alert(id)
    fetch('http://localhost:3000/employees/id',{
            method:"PUT",
            body:JSON.stringify(users1)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

}




//insert New Record

 
let addNew=()=>{
   
    // let first_name=document.querySelector("#first_name").value;
    // let last_name=document.querySelector("#last_name").value
    // let email=document.querySelector("#email").value
    // alert(email)
    let users={
        first_name:document.querySelector("#first_name").value,
        last_name:document.querySelector("#last_name").value,
        email:document.querySelector("#email").value

    }
    console.log(users)
   

    

 // document.querySelector("#regform").addEventListener("submit",addNew)

let getData= {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8", 
      },
      body: JSON.stringify(users)

}
   fetch("http://localhost:3000/employees",getData) .then(res=>res.json())
   .then(json=>console.log(json))
 


}


// Delete record
let deleteRecord=(id)=>{

}