$(() => {
  // Grab the template script
  const theTemplateScript = $("#president-template").html();

  // Compile the template
  const theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  const president = {
    name: "Washington",
    firstname: "George",
    born: "1732",
    death: "1799"
  };

  // Pass our data to the template
  const theCompiledHtml = theTemplate(president);

  // Add the compiled html to the page
  $(".anchor").html(theCompiledHtml);
});
