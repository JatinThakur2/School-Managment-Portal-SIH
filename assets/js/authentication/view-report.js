//Create elements and render schools
var schoolDatabaseReference = db.ref("schools");
var new_html = "";
window.onload = function () {
  //displaySchoolData();
};

const state = document.getElementById("state");
const district = document.getElementById("district");
const block = document.getElementById("block");
const stateTable = document.getElementById("state-level");
const districtTable = document.getElementById("district-level");
const blockTable = document.getElementById("block-level");

state.addEventListener("click", (e) => {
  stateLevelSchool();
});

district.addEventListener("click", (e) => {
  districtLevelSchool();
});

block.addEventListener("click", (e) => {
  blockLevelSchool();
});

// function displaySchoolData() {
//   schoolDatabaseReference.on("child_added", function (schData) {
//     new_html += '<tr id="' + schData.val().sch_id + '">';
//     new_html +=
//       '<td id="schoolName_' +
//       schData.val().sch_id +
//       '">' +
//       schData.val().SchoolName +
//       "</td>";
//     new_html +=
//       '<td id="schoolLevel_' +
//       schData.val().sch_id +
//       '">' +
//       schData.val().schoolLevel +
//       "</td>";
//     new_html +=
//       '<td id="place_' +
//       schData.val().sch_id +
//       '">' +
//       schData.val().Schoolplace +
//       "</td>";
//     new_html +=
//       '<td id="year_' +
//       schData.val().sch_id +
//       '">' +
//       schData.val().yearOfEstablishment +
//       "</td>";
//     new_html +=
//       '<td id="principal_' +
//       schData.val().sch_id +
//       '">' +
//       schData.val().principalName +
//       "</td>";
//     new_html += '<td><a href="#"><button class="btn btn-info"';
//     new_html += '">View School on Drive</button></a>';
//     new_html += "</td>";
//     new_html += "</tr>";

//     table.innerHTML = new_html;
//     // $("#myTable").html(new_html);
//   });
// }

function stateLevelSchool() {
  schoolDatabaseReference
    .orderByChild("schoolLevel")
    .equalTo("State")
    .on("child_added", function (schData) {
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
        '<td id="place_' +
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
      new_html += '<td><a href="#"><button class="btn btn-info"';
      new_html += '">View School on Drive</button></a>';
      new_html += "</td>";
      new_html += "</tr>";

      // stateTable.innerHTML = new_html;
      // districtTable.innerHTML = "";
      // blockTable.innerHTML = "";
      // var tableHeaderRowCount = 1;
      // var table = document.getElementById("mygbh");
      // var rowCount = table.rows.length;
      // for (var i = tableHeaderRowCount; i < rowCount; i++) {
      //   table.deleteRow(tableHeaderRowCount);
      // }
      // var x = document.getElementById("mygbh").rows.length;
      // if (x == 1) {
      //   $("#state-level").html(new_html);
      // }
      $("#state-level").html(new_html);
    });
}

function blockLevelSchool() {
  schoolDatabaseReference
    .orderByChild("schoolLevel")
    .equalTo("Block")
    .on("child_added", function (schData) {
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
        '<td id="place_' +
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
      new_html += '<td><a href="#"><button class="btn btn-info"';
      new_html += '">View School on Drive</button></a>';
      new_html += "</td>";
      new_html += "</tr>";

      stateTable.innerHTML = "";
      districtTable.innerHTML = "";
      blockTable.innerHTML = new_html;
      // $("#myTable").html(new_html);
    });
}

function districtLevelSchool() {
  schoolDatabaseReference
    .orderByChild("schoolLevel")
    .equalTo("District")
    .on("child_added", function (schData) {
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
        '<td id="place_' +
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
      new_html += '<td><a href="#"><button class="btn btn-info"';
      new_html += '">View School on Drive</button></a>';
      new_html += "</td>";
      new_html += "</tr>";

      stateTable.innerHTML = "";
      districtTable.innerHTML = new_html;
      blockTable.innerHTML = "";
      // $("#myTable").html(new_html);
    });
}
