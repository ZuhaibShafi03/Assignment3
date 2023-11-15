// IIFE (Immediately Invoked Function Expression)
(function () {
    // Function to start the application
    function Start() {
        console.log('App started....');

        // Select all elements with the class 'btn-outline-danger'
        let deleteButtons = document.querySelectorAll('.btn-outline-danger');
        console.log(deleteButtons);

        // Loop through each delete button and add a click event listener
        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                console.log('Button clicked');

                // Display a confirmation dialog before allowing deletion
                if (!confirm("Are you sure you want to delete?")) {
                    event.preventDefault(); // Prevent the default action (deletion)
                }
            });
        }
    }

    // Add a 'load' event listener to the window, triggering the Start function
    window.addEventListener("load", Start);
})();
