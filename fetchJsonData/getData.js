

// const axios = require('axios');

// axios.get('http://localhost:3000/employees')

//     .then(resp => {
//         //console.log(resp)
//         data = resp.data;
//         data.forEach(e => {
//             console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });


  
    // fetch(url)
    // .then(response => {
    //     // handle the response
    // })
    // .catch(error => {
    //     // handle the error
    // });



    fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let data1 = "";
       
    // using map function
    data.map((records)=>{
        //console.log(records.EmployeeID)
        let row=`<tr>
                  <td>${records.first_name}</td>
                  <td>${records.last_name}</td>
                  <td>${records.email}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                  </tr>`
                  document.getElementById("showData").innerHTML+=row;
      })

        


        
    }).catch((err) => {
        console.log(err);
    });
    