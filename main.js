function validateForm() {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      if (input.value === "") {
        input.style.backgroundColor = "red";
        return false;
      }
    }
    const username = document.querySelector("input[name='username']");
    if (username.value.length < 3) {
      username.style.backgroundColor = "red";
      return false;
    }
    const password = document.querySelector("input[name='password']");
    if (password.value.length < 4) {
      password.style.backgroundColor = "red";
      return false;
    }

    return true;
  }
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const isValidated = validateForm();
  
    if (!isValidated) {
      return;
    }
    window.location.href = "https://www.example.com";
  });