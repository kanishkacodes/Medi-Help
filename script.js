const searchExpertise = () => {
    let searchbox1 = document.getElementById("search-expertise").value.toUpperCase();
    let doctorslist = document.getElementById("doctors-list");
    let doctor = document.querySelectorAll(".doctor");
    let dname = document.getElementsByTagName("h5");

    for (var i = 0; i < dname.length; i++) {
        let equal1 = doctor[i].getElementsByTagName("h5")[0];

        if (equal1) {
            let textvalue = equal1.textContent || equal1.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox1) > -1) {
                doctor[i].style.display = "";
            } else {
                doctor[i].style.display = "none";
            }
        }


    }
}


const searchLocation = () => {
    let searchbox2 = document.getElementById("search-location").value.toUpperCase();
    let doctorslist = document.getElementById("doctors-list");
    let doctor = document.querySelectorAll(".doctor");
    let dname = document.getElementsByTagName("h4");

    for (var i = 0; i < dname.length; i++) {
        let equal2 = doctor[i].getElementsByTagName("h4")[0];

        if (equal2) {
            let textvalue = equal2.textContent || equal2.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox2) > -1) {
                doctor[i].style.display = "";
            } else {
                doctor[i].style.display = "none";
            }
        }


    }

}