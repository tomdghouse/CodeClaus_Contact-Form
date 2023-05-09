const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the default form submit behavior
  
  // get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const captchaInput = document.getElementById("captcha-input").value;
  const captchaImg = document.querySelector(".captcha-img");
  const captchaText = captchaImg.getAttribute("alt");
  
  // check if captcha is correct
  if (captchaInput !== captchaText) {
    alert("Please enter the correct captcha code.");
    return;
  }
  
  // create an object with the form data
  const formData = { name, email, message };
  
  // save the form data to local storage
  localStorage.setItem("contactFormData", JSON.stringify(formData));
  
  // display an alert message
  alert("Thank you for your message! We will get back to you soon.");
  
  // clear the form fields
  form.reset();
  
  // generate a new captcha
  generateCaptcha();
});

// Generate a new CAPTCHA code
function generateCaptcha() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var captcha = "";
  for (var i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  var captchaImg = document.querySelector(".captcha-img");
  captchaImg.setAttribute("src", "https://dummyimage.com/200x50/000/fff&text=" + captcha);
  captchaImg.setAttribute("alt", captcha);
}

// Refresh the CAPTCHA code
function refreshCaptcha() {
  generateCaptcha();
}

// Call the generateCaptcha function when the page loads
window.onload = generateCaptcha;
