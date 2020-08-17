$(document).ready(() => {
  const loginForm = $("form.project");
  const titleInput = $("input#title");
  const nameInput = $("input#name");
  const descriptionInput = $("#description");
  const languageInput = $("#language");
  const causeInput = $("input#cause");
  const websiteInput = $("input#website");
  const locationInput = $("input#location");
  loginForm.on("submit", event => {
    event.preventDefault();
    console.log(descriptionInput.val().trim());
    const projectData = {
      title: titleInput.val().trim(),
      name: nameInput.val().trim(),
      description: descriptionInput.val().trim(),
      language: languageInput.val().trim(),
      cause: causeInput.val().trim(),
      website: websiteInput.val().trim(),
      location: locationInput.val().trim()
    };
    if (!projectData.title || !projectData.name) {
      return;
    } // If we have an email and password we run the loginUser function and clear the form
    createProject(
      projectData.title,
      projectData.name,
      projectData.description,
      projectData.language,
      projectData.cause,
      projectData.website,
      projectData.location
    );
    titleInput.val("");
    nameInput.val("");
    descriptionInput.val("");
    languageInput.val("");
    causeInput.val("");
    websiteInput.val("");
    locationInput.val("");
  });
  function createProject(
    title,
    name,
    description,
    language,
    cause,
    website,
    location
  ) {
    $.post("/api/projects/", {
      title: title,
      name: name,
      description: description,
      language: language,
      cause: cause,
      website: website,
      location: location
    })
      .then(() => {
        window.location.replace("/blog"); // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
