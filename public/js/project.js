$(document).ready(() => {
  /* global moment */

  // blogContainer holds all of our projects
  const blogContainer = $(".blog-container");
  const projectCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleProjectDelete);
  $(document).on("click", "button.edit", handleProjectEdit);
  // Variable to hold our projects
  let projects;

  // The code below handles the case where we want to get blog projects for a specific user
  // Looks for a query param in the url for user_id
  const url = window.location.search;
  let userId;
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    getProjects(userId);
  }
  // If there's no userId we just get all projects as usual
  else {
    getProjects();
  }

  // This function grabs projects from the database and updates the view
  function getProjects(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/projects" + userId, data => {
      console.log("Projects", data);
      projects = data;
      if (!projects || !projects.length) {
        displayEmpty(user);
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete projects
  function deleteProject(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/projects/" + id
    }).then(() => {
      getProjects(projectCategorySelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed project HTML inside blogContainer
  // TODO: change from row to 1 poroject
  function initializeRows() {
    blogContainer.empty();
    const projectsToAdd = [];
    for (let i = 0; i < projects.length; i++) {
      projectsToAdd.push(createNewRow(projects[i]));
    }
    blogContainer.append(projectsToAdd);
  }

  // This function constructs a project's HTML
  function createNewRow(project) {
    let formattedDate = new Date(project.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    const newProjectCard = $("<div>");
    newProjectCard.addClass("card");
    const newProjectCardHeading = $("<div>");
    newProjectCardHeading.addClass("card-header");
    const deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    const editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    const newProjectTitle = $("<h2>");
    const newProjectDate = $("<small>");
    const newProjectUser = $("<h5>");
    newProjectUser.text("Written by: " + project.User.name);
    newProjectUser.css({
      float: "right",
      color: "blue",
      "margin-top": "-10px"
    });
    const newProjectCardBody = $("<div>");
    newProjectCardBody.addClass("card-body");
    const newProjectBody = $("<p>");
    newProjectTitle.text(project.title + " ");
    newProjectBody.text(project.body);
    newProjectDate.text(formattedDate);
    newProjectTitle.append(newProjectDate);
    newProjectCardHeading.append(deleteBtn);
    newProjectCardHeading.append(editBtn);
    newProjectCardHeading.append(newProjectTitle);
    newProjectCardHeading.append(newProjectUser);
    newProjectCardBody.append(newProjectBody);
    newProjectCard.append(newProjectCardHeading);
    newProjectCard.append(newProjectCardBody);
    newProjectCard.data("project", project);
    return newProjectCard;
  }

  // This function figures out which project we want to delete and then calls deleteProject
  function handleProjectDelete() {
    const currentProject = $(this)
      .parent()
      .parent()
      .data("project");
    deleteProject(currentProject.id);
  }

  // This function figures out which project we want to edit and takes it to the appropriate url
  function handleProjectEdit() {
    const currentProject = $(this)
      .parent()
      .parent()
      .data("project");
    window.location.href = "/cms?project_id=" + currentProject.id;
  }

  // This function displays a message when there are no projects
  function displayEmpty(id) {
    const query = window.location.search;
    let partial = "";
    if (id) {
      partial = " for User #" + id;
    }
    blogContainer.empty();
    const messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      "No projects yet" +
        partial +
        ", navigate <a href='/cms" +
        query +
        "'>here</a> in order to get started."
    );
    blogContainer.append(messageH2);
  }
});
