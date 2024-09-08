// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElements = document.querySelectorAll("#education-container textarea");
    var experienceElements = document.querySelectorAll("#experience-container textarea");
    var skillsElements = document.querySelectorAll("#skills-container textarea");
    if (!nameElement || !emailElement || !phoneElement) {
        console.error("One or more elements are missing");
        return;
    }
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = Array.from(educationElements).map(function (e) { return e.value; }).join("<br>");
    var experience = Array.from(experienceElements).map(function (e) { return e.value; }).join("<br>");
    var skills = Array.from(skillsElements).map(function (e) { return e.value; }).join("<br>");
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span class=\"editable\" id=\"editName\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\" id=\"editEmail\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span class=\"editable\" id=\"editPhone\">").concat(phone, "</span></p>\n    \n        <h3>Education</h3>\n        <p class=\"editable\" id=\"editEducation\">").concat(education, "</p>\n    \n        <h3>Experience</h3>\n        <p class=\"editable\" id=\"editExperience\">").concat(experience, "</p>\n    \n        <h3>Skills</h3>\n        <p class=\"editable\" id=\"editSkills\">").concat(skills, "</p>\n    ");
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
}
// Function to handle toggling between Edit and Save modes
function toggleEditMode() {
    var editButton = document.getElementById("editButton");
    if (!editButton)
        return;
    var editableElements = document.querySelectorAll(".editable");
    if (editButton.textContent === "Edit") {
        // Switch to edit mode
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    }
    else {
        // Switch to save mode
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
}
// Function to add a new education field
function addEducationField() {
    var container = document.getElementById("education-container");
    if (container) {
        var newField = document.createElement("textarea");
        newField.rows = 4;
        container.appendChild(newField);
    }
}
// Function to add a new experience field
function addExperienceField() {
    var container = document.getElementById("experience-container");
    if (container) {
        var newField = document.createElement("textarea");
        newField.rows = 4;
        container.appendChild(newField);
    }
}
// Function to add a new skill field
function addSkillField() {
    var container = document.getElementById("skills-container");
    if (container) {
        var newField = document.createElement("textarea");
        newField.rows = 4;
        container.appendChild(newField);
    }
}
// Attach event listeners only once
function attachEventListeners() {
    var formElement = document.getElementById("resumeForm");
    var editButton = document.getElementById("editButton");
    var addEducationButton = document.getElementById("addEducation");
    var addExperienceButton = document.getElementById("addExperience");
    var addSkillButton = document.getElementById("addSkill");
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
    if (editButton) {
        editButton.addEventListener("click", toggleEditMode);
    }
    if (addEducationButton) {
        addEducationButton.addEventListener("click", addEducationField);
    }
    if (addExperienceButton) {
        addExperienceButton.addEventListener("click", addExperienceField);
    }
    if (addSkillButton) {
        addSkillButton.addEventListener("click", addSkillField);
    }
}
// Initialize the script
attachEventListeners();
