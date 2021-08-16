const table = document.querySelector("#myTable");

//Create elements and render schools
function renderSchools(doc) {
  const html = `
    <tr data-id="${doc.id}">
    <td>${doc.data().schoolName}</td>
    <td>${doc.data().SchoolLevel}</td>
    <td>${doc.data().schoolPlace}</td>
    <td>${doc.data().yearOfEstablishment}</td>
    <td>${doc.data().principalName}</td>
    <td class="text-center"><button class="btn btn-danger" id="danger">Delete</button></td>
    </tr>
  `;
  table.innerHTML += html;
  //deleting  data
  const deleteButton = document.querySelector("#danger");
  deleteButton.addEventListener("click", (e) => {
    let id = e.target.parentElement.parentElement.getAttribute("data-id");
    db.collection("schools").doc(id).delete();
  });
}

db.collection("schools")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderSchools(doc);
    });
  });
