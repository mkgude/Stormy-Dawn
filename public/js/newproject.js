const titleInput = $("#title");
const nameInput = $("#name");
const descriptionInput = $("#description");
const languageInput = $("#language");
const causeInput = $("#cause");
const websiteInput = $("#website");
const locationInput = $("#location");

$(document).ready(() => {
    $(".submit").on("submit", event => {
        event.preventDefault();

        const newProject = {
            title: titleInput.val().trim(),
            name: nameInput.val().trim(),
            description: descriptionInput.val().trim(),
            language: languageInput.val().trim(),
            cause: causeInput.val().trim(),
            website: websiteInput.val().trim(),
            location: locationInput.val().trim()

        };
        // console.log("new project:" + newProject);
        $.ajax("/api/projects/", {
            type: POST,
            data: newProject
        }).than(function() {
            console.log("added project");
            location.reload();
        });
    })
})