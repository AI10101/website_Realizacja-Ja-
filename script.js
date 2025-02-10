document.addEventListener("input", function () {
    const nameField = document.querySelector(".name");
    const emailField = document.querySelector(".email");
    const target = document.querySelector(".submit");

    // Define regex patterns
    const nameRegex = /^[A-Za-z\s]{3,}$/; // Example: Only letters & spaces, min 3 chars
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation

    // Check if both fields match their respective regex
    if (nameRegex.test(nameField.value.trim())) {
        target.classList.add("active"); // Apply styles
    } else {
        target.classList.remove("active"); // Remove styles if criteria are not met
    }
});

// document.addEventListener("input", function () {
//     const nameField = document.querySelector(".name");
//     const emailField = document.querySelector(".email");
//     const messageField = document.querySelector(".message");
//     const target = document.querySelector(".submit");

//     // Define regex patterns
//     const nameRegex = /^[A-Za-z\s]{3,}$/; // Example: Only letters & spaces, min 3 chars
//     const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Simple email validation
//     const messageRegex = /{3,}$/; // Example: Only letters & spaces, min 3 chars

//     // Check if both fields match their respective regex
//     if (nameRegex.test(nameField.value.trim()) && emailRegex.test(emailField.value.trim()) && messageRegex.test(messageField.value.trim())) {
//         target.classList.add(".active"); // Apply styles
//     } else {
//         target.classList.remove(".active"); // Remove styles if criteria are not met
//     }
// });