(function() {
    emailjs.init("-gVB8zMtb5oVeC5TO"); 
  
    document.getElementById("signup-form").addEventListener("submit", function(e) {
      e.preventDefault();
  
      emailjs.send("default_service", "template_jzyfyjn", {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value
      })
      .then(() => {
        window.location.href = "succes.html";
      }, (error) => {
        alert("Erreur d'envoi: " + error.text);
      });
    });
  })();
  
