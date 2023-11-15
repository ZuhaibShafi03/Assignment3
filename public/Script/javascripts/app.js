// IIFE (Immediately Invoked Function Expression)
(function () {
  function Start() {
      console.log('App started....');
      let deleteButtons = document.querySelectorAll('.btn-outline-danger');
      console.log(deleteButtons);
      for (button of deleteButtons) {
          button.addEventListener('click', (event) => {
              console.log('Button clicked');
              if (!confirm("Are you sure you want to delete?")) {
                  event.preventDefault(); // Prevent the default action (deletion)
              }
          });
      }
  }

  window.addEventListener("load", Start);
})();