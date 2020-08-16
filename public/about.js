$(function() {
    // Grab the template script
    var theTemplateScript = $("#president-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Define our data object
    var president = {
        "name": "Washington",
        "firstname": "George",
        "born": "1732",
        "death": "1799"
    };

    // Pass our data to the template
    var theCompiledHtml = theTemplate(president);

    // Add the compiled html to the page
    $('.anchor').html(theCompiledHtml);
});