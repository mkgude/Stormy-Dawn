$(document).ready(() => {
  function a(a, b, c, d, e, f, g) {
    $.post("/api/projects", {
      title: a,
      name: b,
      description: c,
      language: d,
      cause: e,
      website: f,
      location: g
    })
      .then(() => {
        window.location.replace("/blog");
      })
      .catch(a => {
        console.log(a);
      });
  }
  const b = $("input#title"),
    c = $("input#name"),
    d = $("#description"),
    e = $("#language"),
    f = $("input#cause"),
    g = $("input#website"),
    h = $("input#location");
  $("#submitBtn").click(i => {
    i.preventDefault(), console.log("Form submitted");
    const j = {
      title: b.val().trim(),
      name: c.val().trim(),
      description: d.val().trim(),
      language: e.val().trim(),
      cause: f.val().trim(),
      website: g.val().trim(),
      location: h.val().trim()
    };
    j.title &&
      j.name &&
      (a(
        j.title,
        j.name,
        j.description,
        j.language,
        j.cause,
        j.website,
        j.location
      ),
      b.val(""),
      c.val(""),
      d.val(""),
      e.val(""),
      f.val(""),
      g.val(""),
      h.val(""));
  });
});
