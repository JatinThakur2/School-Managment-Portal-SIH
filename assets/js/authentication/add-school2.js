//TABLE REFERENCE
var schoolDatabaseReference = db.ref("schools");
//$('#sch-table').find('tbody').html('');
var new_html = "";
window.onload = function () {
  initApp();
  displaySchoolData();
};
//BUTTONS OR ACTIONS
function initApp() {
  document
    .getElementById("add_school")
    .addEventListener("click", addNewSchool, false);
}

// INSERT DATA
function addNewSchool() {
  var name = document.getElementById("schoolName").value;
  var dg = document.getElementById("school-level");
  var schoolLevel = dg.options[dg.selectedIndex].text;
  var place = document.getElementById("place").value;
  var year = document.getElementById("year").value;
  var principalName = document.getElementById("principalName").value;
  var timeStamp = new Date().getTime();
  var schID = "SCHOOL_" + timeStamp;
  schoolDatabaseReference.child(schID).set({
    SchoolName: name,
    schoolLevel: schoolLevel,
    Schoolplace: place,
    yearOfEstablishment: year,
    principalName: principalName,
    sch_id: schID,
  });
  $("#name").val("");
  $("#place").val("");
  $("#year").val("");
  $("#principalName").val("");
}

//Display Employee Data

function displaySchoolData() {
  schoolDatabaseReference.on("child_added", function (schData) {
    console.log(schData.val());

    new_html += '<tr id="' + schData.val().sch_id + '">';
    new_html +=
      '<td id="schoolName_' +
      schData.val().sch_id +
      '">' +
      schData.val().SchoolName +
      "</td>";
    new_html +=
      '<td id="schoolLevel_' +
      schData.val().sch_id +
      '">' +
      schData.val().schoolLevel +
      "</td>";
    new_html +=
      '<td id="schoolPlace_' +
      schData.val().sch_id +
      '">' +
      schData.val().Schoolplace +
      "</td>";
    new_html +=
      '<td id="year_' +
      schData.val().sch_id +
      '">' +
      schData.val().yearOfEstablishment +
      "</td>";
    new_html +=
      '<td id="principal_' +
      schData.val().sch_id +
      '">' +
      schData.val().principalName +
      "</td>";
    new_html +=
      '<td><a  class="edit" data-toggle="modal"><button class="btn btn-warning editSch"';
    new_html +=
      'data-toggle="tooltip" data-sch-id="' +
      schData.val().sch_id +
      '" title="Edit">Edit</button></a>';
    new_html +=
      '<a style="margin-left: 10px;" class="" data-toggle="modal"><button class="btn btn-danger delete"';
    new_html +=
      'data-toggle="tooltip"  data-sch-id="' +
      schData.val().sch_id +
      '" title="Delete">Delete</button></a>';
    new_html += "</td>";
    new_html += "</tr>";

    $("#sch-table").html(new_html);
  });
}

$(document).on("click", ".delete", function () {
  var sch_id = $(this).attr("data-sch-id");

  schoolDatabaseReference.child(sch_id).once("value", function (sch) {
    var modal_header = "";

    modal_header +=
      '<h4 class="modal-title">Delete ' + sch.val().SchoolName + "</h4>";
    modal_header +=
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

    var modal_body = "";
    modal_body += "<p>Are you sure you want to delete this Record?</p>";
    modal_body +=
      '<p class="text-warning"><small>This action cannot be undone.</small></p>';
    var modal_footer = "";
    modal_footer +=
      '<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">';
    modal_footer +=
      '<input type="submit" data-dismiss="modal" data-sch-id="' +
      sch_id +
      '" class="btn btn-danger deleteEmpData" value="Delete">';
    $("#deleteSchoolModal").find(".modal-header").html(modal_header);
    $("#deleteSchoolModal").find(".modal-body").html(modal_body);
    $("#deleteSchoolModal").find(".modal-footer").html(modal_footer);
    $("#deleteSchoolModal").modal();
  });
});

$(document).on("click", ".editSch", function () {
  var sch_id = $(this).attr("data-sch-id");

  schoolDatabaseReference.child(sch_id).once("value", function (sch) {
    var modal_header = "";

    modal_header +=
      '<h4 class="modal-title">Edit ' + sch.val().SchoolName + "</h4>";
    modal_header +=
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

    var modal_body = "";
    modal_body += '<div class="form-group">';
    modal_body += "<label>School Name</label>";
    modal_body +=
      '<input id="edit-name" type="text" value="' +
      sch.val().SchoolName +
      '" class="form-control" required>';
    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>School Level</label>";
    modal_body +=
      '<select class="form-control" id="edit-school-level" value="' +
      sch.val().schoolLevel +
      '">';
    modal_body += "<option>Block</option>";
    modal_body += "<option>District</option>";
    modal_body += "<option>State</option>";
    modal_body += "</select>";

    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>Place</label>";
    modal_body +=
      '<input id="edit-place" type="text" value="' +
      sch.val().Schoolplace +
      '" class="form-control" required>';
    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>Year of Establishment</label>";
    modal_body +=
      '<input id="edit-year" type="text" value="' +
      sch.val().yearOfEstablishment +
      '" class="form-control" required>';
    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>Principal Name</label>";
    modal_body +=
      '<input id="edit-principal" type="text" value="' +
      sch.val().principalName +
      '" class="form-control" required>';
    modal_body += "</div>";

    var modal_footer = "";
    modal_footer +=
      '<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">';
    modal_footer +=
      '<input type="submit" data-dismiss="modal" data-sch-id="' +
      sch_id +
      '"  class="btn btn-danger updateSchoolData" value="Save">';
    $("#editSchoolModal").find(".modal-header").html(modal_header);
    $("#editSchoolModal").find(".modal-body").html(modal_body);
    $("#editSchoolModal").find(".modal-footer").html(modal_footer);
    $("#editSchoolModal").modal();
  });
});

$(document).on("click", ".deleteEmpData", function () {
  var sch_id = $(this).attr("data-sch-id");

  schoolDatabaseReference.child(sch_id).remove();

  $("#" + sch_id).remove();
});

$(document).on("click", ".updateSchoolData", function () {
  var sch_id = $(this).attr("data-sch-id");

  var name = document.getElementById("edit-name").value;
  var level = document.getElementById("edit-school-level");
  var schoolLevel = level.options[level.selectedIndex].text;
  var year = document.getElementById("edit-year").value;
  var place = document.getElementById("edit-place").value;
  var principal = document.getElementById("edit-principal").value;

  schoolDatabaseReference.child(sch_id).update({
    SchoolName: name,
    schoolLevel: schoolLevel,
    Schoolplace: place,
    yearOfEstablishment: year,
    principalName: principal,
  });

  $("#schoolName_" + sch_id).html(name);
  $("#schoolLevel_" + sch_id).html(schoolLevel);
  $("#schoolPlace_" + sch_id).html(place);
  $("#year_" + sch_id).html(year);
  $("#principal_" + sch_id).html(principal);
});
