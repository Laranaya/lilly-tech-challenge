//get the data

const med = document.getElementById("displayMedicines"); 
//^line above is just referencing to the div element called "displayMedicines"

//constants below declared for posting functionality 
const userMedName=document.getElementById("inputMed");
const userPriceMed=document.getElementById("inputPrice");
const addMedButton = document.getElementById("addMed");

function showToast(text) {
    const toast = document.getElementById("toast");
    toast.textContent = text;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

async function myFunc(){
  med.innerHTML = ""; //this clears any old cards
  try{
    const response = await fetch("http://localhost:8000/medicines"); //data is not in front end folder, real data served by backend API
    //data.json lives in backend folder and NOT automatically accessible to browser unless serve it through endpoint
    const data = await response.json();
    for(let i=0; i<data.medicines.length; i++){ //need to iterate through

      let card = document.createElement("div");
      card.classList.add("medCard");
      
      //flexible way to add HTML content dynamically through JavaScript
      let nameMed = document.createElement("h3"); //creates new HTML <h3> element to store name of medicine
      let priceMed = document.createElement("p"); //same as above but for price of medicine

      if (data.medicines[i].name===""||data.medicines[i].name===null){  
        nameMed.textContent=`Invalid medicine name`; //error handling  for if medicine name is blank
      }

      else{
        nameMed.textContent=data.medicines[i].name;
      }

      if(data.medicines[i].price===null||data.medicines[i].price===""){ //error handling for if price is null
        priceMed.textContent=`Invalid price`;
      }

      else{
        priceMed.textContent="£"+data.medicines[i].price;
      }

    card.appendChild(nameMed); 
    //^^after creating and populating the nameMed element, we want to add to HTML page
    //append child method adds created h3 (nameMed) to parent element - card
    card.appendChild(priceMed); 
    //^^after creating & populating the priceMed element, this line adds the price (<p>) to the parent container card (<div>) on the webpage
    
    //I used appendChild because it lets me dynamically build the UI using JavaScript. 
    //Instead of writing static HTML, I create elements based on the API response and insert them into the DOM

    med.appendChild(card);

    } 
  }
  catch(error){
    console.error("Oh no, something went wrong! :(");
  }
}

//post data

 async function userAdd(med1, price1){
  try{
    const numRegex = /^[0-9]+(\.[0-9]+)?$/;
    const wordRegex = /^[A-Za-z]+$/;

    if(med1===""||med1===" "||price1==" "||price1===""){
      showToast("Please enter a value!");
    }

    else if(!wordRegex.test(med1)){
      showToast("Please enter only letters!")
    }

     else if(!numRegex.test(price1)){
      showToast("Please enter only numbers!")
    }

    else{
      const formData = new FormData();
      formData.append("name", med1);
      formData.append("price", price1);

    const userResponse = await fetch("http://localhost:8000/create", {
    method: "POST",
    body: formData //backend file accepts formdata
    });

    if(userResponse.ok){
      showToast("Medicine added!");
      myFunc(); //refresh medicine list
    }
    }
  }

  catch(error){
    console.error("Oh no! Something has gone wrong :(", error);
  }

 }
addMedButton.addEventListener("click", () => {
  userAdd(userMedName.value, userPriceMed.value);
});
 
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    toggleBtn.textContent = 
        document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});


window.onload = myFunc; 
//makes sure function runs automatically as SOON as the webpage finishes loading
//used this since there is no other way for me to trigger the webpage to work 
  //(as in I am not triggering in any way for the json data to be displayed on the front end 
  // therefore I essentially have this "trigger" if you will)

//I used window.onload so that the fetch request only runs after the page finishes loading.
  //This ensures that the <div id="displayMedicines"> exists before I try to put elements inside it.

//why NOT DOMContentLoaded:
  //window.onload waits for everything - HTML, CSS, images - to load, while DOMContentLoaded triggers earlier. 
  //In this case, either works because I only depend on the DOM, but I went with the simpler window.onload trigger.