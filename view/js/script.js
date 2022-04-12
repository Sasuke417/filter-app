var data = [
  {
    id: 0,
    name: "Janu",
    English: 50,
    Maths: 86,
    Science: 77,
    SocialScience: 88,
  },
  {
    id: 1,
    name: "Thanu",
    English: 75,
    Maths: 96,
    Science: 67,
    SocialScience: 91,
  },
  {
    id: 2,
    name: "Tara",
    English: 90,
    Maths: 35,
    Science: 86,
    SocialScience: 100,
  },
  {
    id: 3,
    name: "Glen",
    English: 79,
    Maths: 68,
    Science: 77,
    SocialScience: 78,
  },
  {
    id: 4,
    name: "Zara",
    English: 80,
    Maths: 85,
    Science: 96,
    SocialScience: 68,
  },
];
let radioValue;

function onPageLoad() {
  // code goes here to display table on page loads
  data.forEach((element) => {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    let text = document.createTextNode(String(element["id"] + 1));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["name"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["English"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["Maths"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["Science"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["SocialScience"]));
    td.appendChild(text);
    tr.appendChild(td);
    document.getElementById("studentData").appendChild(tr);
  });
}

function filterBy() {
  // code goes here to select filter by option
  radioValue = document.querySelector('input[name="mode"]:checked').value;
  dropDownValue = document.getElementById("subjects").value;
  // console.log(radioValue,dropDownValue);
  if (radioValue === "between") {
    document.getElementById("to").style.display = "inline";
    document.getElementById("maxMark").style.display = "inline";
  }
}

function Clear() {
  // code goes here to clear filter
  document.querySelector('input[name="mode"]:checked').value = "";
  //console.log("clear value:",document.querySelector('input[name="mode"]:checked').value)
  document.getElementById("studentData").innerHTML = "";
  data.forEach((element) => {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    let text = document.createTextNode(String(element["id"] + 1));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["name"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["English"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["Maths"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["Science"]));
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement("td");
    text = document.createTextNode(String(element["SocialScience"]));
    td.appendChild(text);
    tr.appendChild(td);
    document.getElementById("studentData").appendChild(tr);
  });
}

function filterClick() {
  // code goes here to handle filter button
  radioValue = document.querySelector('input[name="mode"]:checked').value;
  dropDownValue = document.getElementById("subjects").value;
  // console.log(radioValue,dropDownValue);
  document.getElementById("studentData").innerHTML = "";
  if (radioValue === "above") {
    let i = 1;
    data.forEach((element) => {
      if (
        element[dropDownValue] > parseInt(document.getElementById("mark").value)
      ) {
        const tr = document.createElement("tr");
        let td = document.createElement("td");
        let text = document.createTextNode(String(i++));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["name"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["English"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["Maths"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["Science"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["SocialScience"]));
        td.appendChild(text);
        tr.appendChild(td);
        document.getElementById("studentData").appendChild(tr);
      }
    });
  } else if (radioValue === "below") {
    let i = 1;
    data.forEach((element) => {
      if (
        element[dropDownValue] < parseInt(document.getElementById("mark").value)
      ) {
        const tr = document.createElement("tr");
        let td = document.createElement("td");
        let text = document.createTextNode(String(i++));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["name"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["English"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["Maths"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["Science"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["SocialScience"]));
        td.appendChild(text);
        tr.appendChild(td);
        document.getElementById("studentData").appendChild(tr);
      }
    });
  } else if (radioValue === "between") {
    let i = 1;
    data.forEach((element) => {
      if (
        element[dropDownValue] >
          parseInt(document.getElementById("mark").value) &&
        element[dropDownValue] <
          parseInt(document.getElementById("maxMark").value)
      ) {
        const tr = document.createElement("tr");
        let td = document.createElement("td");
        let text = document.createTextNode(String(i++));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["name"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["English"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["Maths"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["Science"]));
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(String(element["SocialScience"]));
        td.appendChild(text);
        tr.appendChild(td);
        document.getElementById("studentData").appendChild(tr);
      }
    });
  }
  if (dropDownValue === "") {
    document.getElementById("studentData").innerHTML = "";
    data.forEach((element) => {
      const tr = document.createElement("tr");
      let td = document.createElement("td");
      let text = document.createTextNode(String(element["id"] + 1));
      td.appendChild(text);
      tr.appendChild(td);
      td = document.createElement("td");
      text = document.createTextNode(String(element["name"]));
      td.appendChild(text);
      tr.appendChild(td);
      td = document.createElement("td");
      text = document.createTextNode(String(element["English"]));
      td.appendChild(text);
      tr.appendChild(td);
      td = document.createElement("td");
      text = document.createTextNode(String(element["Maths"]));
      td.appendChild(text);
      tr.appendChild(td);
      td = document.createElement("td");
      text = document.createTextNode(String(element["Science"]));
      td.appendChild(text);
      tr.appendChild(td);
      td = document.createElement("td");
      text = document.createTextNode(String(element["SocialScience"]));
      td.appendChild(text);
      tr.appendChild(td);
      document.getElementById("studentData").appendChild(tr);
    });
  }
}
