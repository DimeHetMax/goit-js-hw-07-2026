const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const handleInput = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  
    span.textContent = e.target.value.trim();
      if(span.textContent.length === 0){
         span.textContent = "Anonymous";
    }
    
};
input.addEventListener("input", handleInput);
