//***********************************
//     Déclaration de variables
//***********************************

let projectList = [
    {
        "_id": "5b3e3da860e7c6eeb88e3ceb",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ZENTURY",
        "creation": "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da85d52b4482e60904a",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "POLARAX",
        "creation": "Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da830d91c6264ec2371",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "BICOL",
        "creation": "Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da84172d52b597c35ca",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "CYTREX",
        "creation": "Tue Oct 06 1970 07:07:42 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8bdabcef689e8f0d4",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "PLAYCE",
        "creation": "Sun Aug 29 2010 07:52:18 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da8f5132e9b61630c5e",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "NETROPIC",
        "creation": "Fri Nov 17 1989 09:10:32 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da83cec1f4a3f959388",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "UNISURE",
        "creation": "Tue Aug 09 2005 02:26:51 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da83319a70043710f9f",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "CALCU",
        "creation": "Mon Jan 14 1980 12:08:39 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8dfc260a3993d2e64",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "QUADEEBO",
        "creation": "Thu Jan 08 2009 03:25:20 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8a8b5ffda3cf89cc0",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "PROXSOFT",
        "creation": "Sun Jan 04 1998 23:19:53 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da87d3d148f090316ca",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "VERBUS",
        "creation": "Mon Mar 12 1990 07:33:18 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8e734d6f18fd20d99",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "FURNITECH",
        "creation": "Fri Jan 15 1971 15:23:19 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da84769754f62adcd1e",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ZENTHALL",
        "creation": "Mon Sep 26 1994 07:13:17 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8e0ca663902594537",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "BEADZZA",
        "creation": "Sun Dec 07 1975 14:46:01 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da88c8a4ff9e7a470af",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ENERSOL",
        "creation": "Fri Oct 28 2016 03:41:22 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da8971220d673089795",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ORBIN",
        "creation": "Wed Mar 17 1999 20:59:11 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8b36fc54ea95f52fe",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ANDRYX",
        "creation": "Sat Apr 20 2013 16:19:59 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da8387a4b96cd64ac5c",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "MARKETOID",
        "creation": "Wed Apr 14 2004 19:06:20 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da8524620a282935367",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "COMBOGENE",
        "creation": "Thu Apr 02 1998 14:13:33 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da8bd1847d4bd46ceb3",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "PASTURIA",
        "creation": "Fri Jan 26 1979 22:25:57 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da83802b7161e97bcb5",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ECRAZE",
        "creation": "Sun Jul 30 1989 18:07:17 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da81b7d9fdc1ac4a598",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "KEEG",
        "creation": "Tue Nov 23 1976 03:32:12 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da8408a1a197944bb07",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "SHOPABOUT",
        "creation": "Sun Jun 24 1990 03:34:24 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da855907b132f341230",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "name": "ZILLAR",
        "creation": "Mon Oct 10 2016 19:36:16 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da8a72b0faaac30690b",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "EQUITAX",
        "creation": "Fri Sep 11 1992 06:15:12 GMT+0200 (Central European Summer Time)"
    },
    {
        "_id": "5b3e3da85447219ab25178da",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "DIGIPRINT",
        "creation": "Thu Dec 10 1981 23:31:45 GMT+0100 (Central European Standard Time)"
    },
    {
        "_id": "5b3e3da861f2d927949fa8da",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "name": "PUSHCART",
        "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
    }
]
let tabWithNewDate = convert(projectList);

//*********************
//     Fonctions
//*********************

// Fonction de remplissage du tableau
function fillTable (tab) {
    for (let i = 0; i < tab.length; i++) {

        // Affiche oui ou non à la place de true ou false
        let isActive = tab[i].isActive;
        if (isActive){
            isActive = "Actif";
        } else {
            isActive = "Inactif";
        }

        $("#data").append("<tr id='row" + i + "'></tr>");
        $("#row" + i).append("<td class='picture' style='text-align:center'" + ">" + "<img src=" + tab[i].picture + "></td>")
        $("#row" + i).append("<td class='name'" + ">" + tab[i].name + "</td>")
        $("#row" + i).append("<td class='isActive' style='text-align:center'" + "'>" + isActive + "</td>")
        $("#row" + i).append("<td class='creation'" + ">" + tab[i].creation + "</td>")
    }
}

// Fonction de filtrage sur le nom
function research(tab, val) {

    let newTab = [];
    // Compare la recherche avec le nom dans le tableau qu'elle soit en minuscule ou en majuscule
    for (i = 0; i < tab.length; i++) {
        if (tab[i].name.startsWith(val) || tab[i].name.startsWith(val.toUpperCase())){
            newTab.push(tab[i]);
        }
    }
    return newTab;
}

// Converti la date et retourne un nouveau tableau
function convert(tab) {
    let date;
    let result = tab;

    for (i = 0; i < result.length; i++) {
        date = new Date (result[i].creation);
        result[i].creation = date;
    }
    return result;
}

// Fonction de tri par ordre croissant des dates
function sortDate(tab) {

    let result = tab;
    for (i = 0; i < result.length; i++) {

        // Compare les éléments du tableau result
        result.sort(function(dateA,dateB){
            if (dateA.creation < dateB.creation) {
                return -1;
            } else if (dateA.creation > dateB.creation) {
                return 1;
            } else if (dateA.creation === dateB.creation) {
                return 0
            }
        });
    }
    return result;
}

// 2ème façon de trier les dates
function sortByDate(tab) {
    tab.sort(function (date1, date2) {
        return date1.creation - date2.creation;
    })
    return tab;
}

// Fonction de tri par ordre alphabétique
function sortNom(tab) {

    let result = tab;
    for (i = 0; i < result.length; i++) {

        // Compare les éléments du tableau result
        result.sort(function(nomA,nomB){
            if (nomA.name < nomB.name) {
                return -1;
            } else if (nomA.name > nomB.name) {
                return 1;
            } else if (nomA.name === nomB.name) {
                return 0
            }
        });
    }
    return result;
}

// Ajoute un nouveau projet
function createNewProject() {

    // Test pour ajouter la date du jour
    // let today = new Date();
    // console.log(today);
    // $("#new-creation").val(today);

    let idValue=1;
    let nameValue = $('#new-name').val().toUpperCase();
    let creationValue = new Date($('#new-creation').val());
    let pictureValue = $('#new-picture').val();
    let boxValue = $('#defaultUnchecked').prop("checked");

    let newProject = {
        _id : idValue+1,
        isActive : boxValue,
        picture : pictureValue,
        name : nameValue,
        creation : creationValue }

    // console.log(newProject);
    return newProject;
}

//************************
//  Actions sur le DOM
//************************
$(document).ready(function(){

    fillTable(projectList); // Affiche le tableau initial
    $('#info').html(projectList.length + " lignes "); // Affiche le nombre de lignes initiales

    $('#search').keyup(function(){
        let nameToFind = $(this).val() // Récupération de la valeur saisie dans le champs recherche
        $("#data").empty();
        let newTab = research(tabWithNewDate, nameToFind);
        fillTable(newTab);
        $('#info').html(newTab.length + " lignes ");
    });

    // Actions de tri sur les dates
    $('#triDateUp').click(function(){
        $("#data").empty();
        let tabSortedUp = sortDate(tabWithNewDate);// Tri du plus vieux au plus ancien
        fillTable(tabSortedUp);
    });

    $('#triDateDown').click(function(){
        $("#data").empty();
        let tabSortedDown = sortDate(tabWithNewDate).reverse();// Tri du plus récent au plus ancien
        fillTable(tabSortedDown);
    });

    // Actions de tri sur les noms en un seul bouton
    let bool = true;
    $('#triNom').click(function(){
        // console.log(bool);
        if (bool) {
            $("#data").empty();
            let tabSortedUp = sortNom(tabWithNewDate);// Tri de A à Z
            fillTable(tabSortedUp);
        } else {
            $("#data").empty();
            let tabSortedDown = sortNom(tabWithNewDate).reverse();// Tri de Z à A
            fillTable(tabSortedDown);
        }
        bool = !bool;// remplace le booléen par son contraire
    });

    // Ajout d'un projet
    $('#ajoutProjet').click(function(){
        let newProject = createNewProject();
        tabWithNewDate.push(newProject);
        $("#data").empty();
        fillTable(tabWithNewDate);
        $("#modalForm")[0].reset();
    })
});