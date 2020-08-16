// $(document).ready(() => {
//     // Getting jQuery references to the project body, title, form, and npo select
//     const bodyInput = $("#body");
//     const titleInput = $("#title");
//     const projectForm = $("#project");
//     const npoSelect = $("#npo");
//     // Adding an event listener for when the form is submitted
//     $(projectForm).on("submit", handleFormSubmit);
//     // Gets the part of the url that comes after the "?" (which we have if we're updating a project)
//     const url = window.location.search;
//     let projectId;
//     let npoId;
//     // Sets a flag for whether or not we're updating a project to be false initially
//     let updating = false;

//     // If we have this section in our url, we pull out the project id from the url
//     // In '?project_id=1', projectId is 1
//     if (url.indexOf("?project_id=") !== -1) {
//         projectId = url.split("=")[1];
//         getProjectData(projectId, "project");
//     }
//     // Otherwise if we have an npo_id in our url, preset the npo select box to be our npo
//     else if (url.indexOf("?npo_id=") !== -1) {
//         npoId = url.split("=")[1];
//     }

//     // Getting the npos, and their projects
//     getNPO();

//     // A function for handling what happens when the form to create a new project is submitted
//     function handleFormSubmit(event) {
//         event.preventDefault();
//         // Wont submit the project if we are missing a body, title, or npo
//         if (
//             !titleInput.val().trim() ||
//             !bodyInput.val().trim() ||
//             !npoSelect.val()
//         ) {
//             return;
//         }
//         // Constructing a newproject object to hand to the database
//         const newProject = {
//             title: titleInput.val().trim(),
//             body: bodyInput.val().trim(),
//             npoId: npoSelect.val()
//         };

//         // If we're updating a project run updateproject to update a project
//         // Otherwise run submitproject to create a whole new project
//         if (updating) {
//             newProject.id = projectId;
//             updateProject(newProject);
//         } else {
//             submitProject(newProject);
//         }
//     }

//     // Submits a new project and brings user to blog page upon completion
//     function submitProject(project) {
//         $.project("/api/projects", project, () => {
//             window.location.href = "/blog";
//         });
//     }

//     // Gets project data for the current project if we're editing, or if we're adding to an npo's existing projects
//     //   function getProjectData(id, type) {
//     //     let queryUrl;
//     //     switch (type) {
//     //     case "project":
//     //       queryUrl = "/api/projects/" + id;
//     //         break;
//     //     case "npo":
//     //       queryUrl = "/api/npos/" + id;
//     //       break;
//     //     default:
//     //       return;
//     //     }
//     $.get(queryUrl, data => {
//         if (data) {
//             console.log(data.NPOId || data.id);
//             // If this project exists, prefill our cms forms with its data
//             titleInput.val(data.title);
//             bodyInput.val(data.body);
//             npoId = data.NPOId || data.id;
//             // If we have a project with this id, set a flag for us to know to update the project
//             // when we hit submit
//             updating = true;
//         }
//     });
// }

//   // A function to get npos and then render our list of npos
//     function getNPO() {
//      $.get("/api/npo", renderNPOList);
//     }
//   // Function to either render a list of npos, or if there are none, direct the user to the page
//   // to create an npo first
//     function renderNPOList(data) {
//         if (!data.length) {
//             window.location.href = "/npos";
//         }
//         $(".hidden").removeClass("hidden");
//         const rowsToAdd = [];
//         for (let i = 0; i < data.length; i++) {
//             rowsToAdd.push(createNPORow(data[i]));
//         }
//         npoSelect.empty();
//         console.log(rowsToAdd);
//         console.log(npoSelect);
//         npoSelect.append(rowsToAdd);
//         npoSelect.val(npoId);
//     }

//   // Creates the npo options in the dropdown
//   function createNPORow(npo) {
//         const listOption = $("<option>");
//         listOption.attr("value", npo.id);
//         listOption.text(npo.name);
//         return listOption;
//     }

//   // Update a given project, bring user to the blog page when done
//   function updateProject(project) {
//         $.ajax({
//             method: "PUT",
//             url: "/api/projects",
//             data: project
//         }).then(() => {
//             window.location.href = "/blog";
//         });
//     }
// });
