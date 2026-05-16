const form = document.querySelector(".login-form");

const handleSubmit = (e) =>{
 e.preventDefault();
 
 const formData = e.target.elements;
 const email = formData.email.value.trim();
 const password = formData.password.value.trim();

 if(email.length === 0 || password.length === 0){
   alert("All form fields must be filled in");
   return
 }
 console.log({email, password});

 form.reset()
}

form.addEventListener("submit", handleSubmit)