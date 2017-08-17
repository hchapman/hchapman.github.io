
function loadFileToTextarea(files, dstid) {
    /* Take an imported file and place its data in #csvfile on load
     */
    for (var i = 0, numFiles = files.length; i < numFiles; i++) {
        var file = files[i];

        var reader = new FileReader();
        reader.onload = (function(aParent) { return function(e) {
            aParent.value = e.target.result;
        }; })(document.getElementById(dstid));
        reader.readAsText(file);
    }
}

function athenaFullnameToLastname(fullname) {
    /* Given fullname Lastname, Firstname M., return the student's last
       name, usually "Lastname" */
    return fullname.split(",")[0];
}

function athenaFullnameToFirstname(fullname) {
    /* Given fullname Lastname, Firstname M., return the student's first
       name, usually "Firstname" */
    var trimmed = fullname.split(",")[1].trim();
    var tokens = trimmed.split(" ");

    var initial = tokens[tokens.length-1];
    if (initial[initial.length-1] == "." && initial.length == 2) {
        // initial is probably a middle initial
        return tokens.slice(0, tokens.length-1).join(" ");
    }

    // initial is missing, so the whole trimmed string should be firstname
    return trimmed;
}

function ugaEmailToUsername(email) {
    /* Given a UGA email "myid@uga.edu", return myid. We are probably
       guaranteed not to have any "\@" or other confusing characters. */
    return email.split("@")[0];
}

function parseStudent(datarow, colmap) {
    var password, lastname, firstname, username, section;
    password = datarow[colmap.password];
    lastname = athenaFullnameToLastname(datarow[colmap.fullname]);
    if (colmap.prefname !== undefined && datarow[colmap.prefname] != "") {
        firstname = datarow[colmap.prefname];
    } else {
        firstname = athenaFullnameToFirstname(datarow[colmap.fullname]);
    }
    username = ugaEmailToUsername(datarow[colmap.email]);
    section = datarow[colmap.section];

    return {
        password: password,
        lastname: lastname,
        firstname: firstname,
        username: username,
        section: section
    };
}

function convertAthenaCSV(data, colmap) {
    /* Parse CSV into list of {password, lastname, firstname, myid},
       one per student, for conversion to WebWork format

       First row of Athena CSV file is header row
       Important columns of Athena CSV file are (0-indexed):
       1: Preferred first name; we use this as firstname
       2: Last, First, M.; we grab up to the comma as lastname
       3: UGA ID; we use this as password
       9: Email in fmt [username]@uga.edu; grepped appropriately */

    var res = Papa.parse(data, {skipEmptyLines: true});
    var students = new Array();

    // First row is header information, which we don't need
    for (var i = 1, numStudents = res.data.length;
         i < numStudents; i++) {
        students.push(parseStudent(res.data[i], colmap));
    }

    return students;
}

function convertStudentsToWW(students) {
    /* Given a list of dicts with keys password, lastname, firstname,
       username, return a valid row for WebWork lst import. If data is
       incomplete, return None. */
    var wwdata = new Array();
    for (var i = 0, numStudents = students.length;
         i < numStudents; i++) {
        var student = students[i];
        wwdata.push([
            student.password,
            student.lastname,
            student.firstname,
            "C",
            "", (student.section || ""), "",
            "\t"+student.username+"@uga.edu",
            student.username
        ].join(","));
    }

    return wwdata.join("\n");
}

function convertData(srcid, dstid, colmapid) {
    /* Take data in #csvdata, convert it, and place it in #lstdata */
    var data = document.getElementById(srcid).value;
    var colmap = parseColmap(document.getElementById(colmapid));

    students = convertAthenaCSV(data, colmap);
    lststr = convertStudentsToWW(students);

    document.getElementById(dstid).value = lststr;
}

function parseColmap(el) {
    var colmap = {};
    var password, fullname, email, section, prefname;

    password = el.data_password.get();
    fullname = el.data_fullname.get();
    email = el.data_email.get();
    section = el.data_section.get();
    prefname = el.data_prefname.get();

    if (section < 0) { section = undefined; }
    if (prefname < 0) { prefname = undefined; }

    return {
        password: password,
        fullname: fullname,
        email: email,
        section: section,
        prefname: prefname
    };
}

function autoguessColumns(srcid, dstid) {
    /* Take data in #csvdata, try to guess column types, and place it in #colmap
     * table */
    var data = document.getElementById(srcid).value;

    var res = Papa.parse(data, {skipEmptyLines: true});
    var headrow = res.data[0];
    var previewrow = res.data[1];

    var dst = document.getElementById(dstid);
    dressColumnSelection(dst, headrow, previewrow);

    // Trim the header row to remove any extra space, and make lower case
    for (var i = 0; i < headrow.length; i++) {
        headrow[i] = headrow[i].trim().toLowerCase();
    }

    // Begin header search. These should find correct rows on the two types of
    // csv I have seen, but feel free to extend this search here to make this
    // automagic work on additional file formats

    // Search for student ID column (password)
    var password_i = headrow.indexOf("uga_id");

    // Search for student fullname column
    var fullname_i = headrow.indexOf("name");

    // Search for student email column
    var email_i = headrow.indexOf("email");

    // Search for student section column
    var section_i = headrow.indexOf("crn");

    // Search for student preferred firstname column
    // Not guaranteed to exist in the CSV
    var prefname_i = headrow.indexOf("preferred_first_name");

    // ** end header search **
    dst.data_password.set(password_i);
    dst.data_fullname.set(fullname_i);
    dst.data_email.set(email_i);
    dst.data_section.set(section_i);
    dst.data_prefname.set(prefname_i);
}

function dressColumnSelection(dst, headerdata, previewdata) {
    dst.previewdata = previewdata;
    dst.style = "";

    if (dst.__dressed) {
        return;
    }

    function initSelect(select) {
        var opt = document.createElement("option");
        opt.value = -1;
        opt.label = "None selected";
        select.add(opt);
        for (var i = 0; i < headerdata.length; i++) {
            opt = document.createElement("option");
            opt.value = i;
            opt.label = headerdata[i] + " (" + i + ")";
            select.add(opt);
        }
    }

    dst.__dressed = true;

    var table = dst.getElementsByClassName("mapform")[0];

    // TODO: automagic?

    // Set up the password row
    var passwordTr = table.getElementsByClassName("mapform_password")[0];
    var fullnameTr = table.getElementsByClassName("mapform_fullname")[0];
    var emailTr = table.getElementsByClassName("mapform_email")[0];
    var sectionTr = table.getElementsByClassName("mapform_section")[0];
    var prefnameTr = table.getElementsByClassName("mapform_prefname")[0];

    var data_trs = [passwordTr, fullnameTr, emailTr, sectionTr, prefnameTr];

    for (let j = 0; j < data_trs.length; j++) {
        var tr = data_trs[j];
        tr.select = tr.getElementsByClassName("map_select")[0].children[0];
        tr.preview = tr.getElementsByClassName("map_preview")[0];
        tr.select.datarow = tr;
        tr.set = function(i) {
            this.select.value = i;
            this.update(i);
        };
        tr.update = function(i) {
            if (i != -1) {
                this.preview.innerText = dst.previewdata[i];
            } else {
                if (this.dataset.required == true) {
                    this.preview.innerHTML = "<strong>Required</strong>: Please select a column";
                } else {
                    this.preview.innerText = "";
                }
            }
        };
        tr.get = function() {
            return parseInt(this.select.value);
        };
        initSelect(tr.select);
        tr.select.onchange = function(e) { this.datarow.update(e.target.value); };
    }

    dst.data_password = passwordTr;
    dst.data_fullname = fullnameTr;
    dst.data_email = emailTr;
    dst.data_section = sectionTr;
    dst.data_prefname = prefnameTr;
}
