window.onload = listFun;

function listFun() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "xml/rulerList.xml");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let xmlData = xhr.responseXML;

        let Rulers = xmlData.getElementsByTagName("Rulers");
        let table = "";

        for (let i = 0; i < Rulers.length; i++) {
          let title = Rulers[i].getElementsByTagName("Title")[0].textContent;

          table +=
            "<tr><th colspan='2'style='font-size:40px'>" + title + "</th></tr>";

          let rulerDetails = Rulers[i].getElementsByTagName("rulerDetails");

          for (let j = 0; j < rulerDetails.length; j++) {
            let dynasty =
              rulerDetails[j].getElementsByTagName("Dynasty")[0].textContent;
            let dynastyDate =
              rulerDetails[j].getElementsByTagName("dynastyDate")[0]
                .textContent;

            table +=
              "<tr><td style='color: blue; font-weight:bold;font-size:25px'>" +
              dynasty +
              "</td><td style='color: blue;font-size:25px'>" +
              dynastyDate +
              "</td></tr>";

            let data = rulerDetails[j].getElementsByTagName("data");

            for (let k = 0; k < data.length; k++) {
              let name = data[k].getElementsByTagName("name")[0].textContent;
              let date = data[k].getElementsByTagName("date")[0].textContent;

              table += "<tr><td>" + name + "</td><td>" + date + "</td></tr>";
            }
          }
        }

        document.getElementById("table").innerHTML = table;
      } else {
        document.getElementById("print").innerHTML =
          this.status + " " + this.statusText + " " + this.readyState;
      }
    }
  };
}
