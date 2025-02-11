document.addEventListener("input", function () {
    const nameField = document.querySelector(".name");
    const emailField = document.querySelector(".email");
    const messageField = document.querySelector(".message");
    const target = document.querySelector(".submit");

    const nameTag = document.querySelector(".name_tag");
    const emailTag = document.querySelector(".email_tag");
    const messageTag = document.querySelector(".message_tag");

    // Define regex patterns
    const nameRegex = /^[A-Za-z\s]{3,}$/; // Example: Only letters & spaces, min 3 chars
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Simple email validation

    // Check if both fields match their respective regex
    if (nameRegex.test(nameField.value.trim()) && emailRegex.test(emailField.value.trim()) && messageField.value.trim() != "") {
        target.classList.remove("inactive");
        target.classList.add("active"); // Apply styles
        target.disabled = false;
    } else {
        target.classList.remove("active"); // Remove styles if criteria are not met
        target.classList.add("inactive");
        target.disabled = true;
    }

    nameField.addEventListener('blur', () => {
        // Perform another check at the same time, for example:
        if (!nameRegex.test(nameField.value.trim())) {
            nameTag.classList.add("error");
            nameField.classList.add("error");
        } else {
            nameTag.classList.remove("error");
            nameField.classList.remove("error");
        }
    });

    emailField.addEventListener('blur', () => {
        // Perform another check at the same time, for example:
        if (!emailRegex.test(emailField.value.trim())) {
            emailTag.classList.add("error");
            emailField.classList.add("error");
        } else {
            emailTag.classList.remove("error");
            emailField.classList.remove("error");
        }
    });

    messageField.addEventListener('blur', () => {
        // Perform another check at the same time, for example:
        if (messageField.value.trim() == "") {
            messageTag.classList.add("error");
            messageField.classList.add("error");
        } else {
            messageTag.classList.remove("error");
            messageField.classList.remove("error");
        }
    });
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