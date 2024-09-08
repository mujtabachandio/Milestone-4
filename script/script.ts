// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement | null;
    const emailElement = document.getElementById("email") as HTMLInputElement | null;
    const phoneElement = document.getElementById("phone") as HTMLInputElement | null;
    const educationElements = document.querySelectorAll("#education-container textarea");
    const experienceElements = document.querySelectorAll("#experience-container textarea");
    const skillsElements = document.querySelectorAll("#skills-container textarea");

    if (!nameElement || !emailElement || !phoneElement) {
        console.error("One or more elements are missing");
        return;
    }

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;

    const education = Array.from(educationElements).map(e => (e as HTMLTextAreaElement).value).join("<br>");
    const experience = Array.from(experienceElements).map(e => (e as HTMLTextAreaElement).value).join("<br>");
    const skills = Array.from(skillsElements).map(e => (e as HTMLTextAreaElement).value).join("<br>");

    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span class="editable" id="editName">${name}</span></p>
        <p><strong>Email:</strong> <span class="editable" id="editEmail">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable" id="editPhone">${phone}</span></p>
    
        <h3>Education</h3>
        <p class="editable" id="editEducation">${education}</p>
    
        <h3>Experience</h3>
        <p class="editable" id="editExperience">${experience}</p>
    
        <h3>Skills</h3>
        <p class="editable" id="editSkills">${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error("The resume output element is missing");
    }
}

// Function to handle toggling between Edit and Save modes
function toggleEditMode(): void {
    const editButton = document.getElementById("editButton") as HTMLButtonElement | null;
    if (!editButton) return;

    const editableElements = document.querySelectorAll(".editable");

    if (editButton.textContent === "Edit") {
        // Switch to edit mode
        editableElements.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    } else {
        // Switch to save mode
        editableElements.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
}

// Function to add a new education field
function addEducationField(): void {
    const container = document.getElementById("education-container") as HTMLDivElement | null;
    if (container) {
        const newField = document.createElement("textarea");
        newField.rows = 4;
        container.appendChild(newField);
    }
}

// Function to add a new experience field
function addExperienceField(): void {
    const container = document.getElementById("experience-container") as HTMLDivElement | null;
    if (container) {
        const newField = document.createElement("textarea");
        newField.rows = 4;
        container.appendChild(newField);
    }
}

// Function to add a new skill field
function addSkillField(): void {
    const container = document.getElementById("skills-container") as HTMLDivElement | null;
    if (container) {
        const newField = document.createElement("textarea");
        newField.rows = 4;
        container.appendChild(newField);
    }
}

// Attach event listeners only once
function attachEventListeners(): void {
    const formElement = document.getElementById("resumeForm");
    const editButton = document.getElementById("editButton");
    const addEducationButton = document.getElementById("addEducation");
    const addExperienceButton = document.getElementById("addExperience");
    const addSkillButton = document.getElementById("addSkill");

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
