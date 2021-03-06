document.getElementById("newWindow").onclick = function () {
        window.open("https://sjafroudi.github.io/UAH/atlas/uahAtlas.html");
    };

  //var checkboxes = document.getElementsByClassName("filter").checked = false;
  const clearfiltersBtn = document.getElementById('showall');
  clearfiltersBtn.addEventListener('click', (event) => {
    $(".filter").removeAttr("checked");
  });

  var filterList = [
    {
      "site": "Central Experimental Farm",
      "heritageStatus": "National Historic Site",
      "uaType":["Experimental Farm"],
      "generalizedRisks":[],
      "risksToSystem":[],
      "landUseSystem":["Field Cultivation", "Rows"],
      "urbanIntegration":"Specific/Discrete Zone"
    },
    {
      "site":"UBC Farm",
      "heritageStatus":"n/a",
      "uaType":["Educational Garden"],
      "generalizedRisks":["Environmental", "Land Use/Ownership"],
      "risksToSystem":["Global Warming", "Development/Urbanization"],
      "landUseSystem":["Field Cultivation", "Orchard", "Rows"],
      "urbanIntegration":"Specific/Discrete Zone"
    },
    {
      "site": "Five Acre Farm",
      "heritageStatus": "n/a",
      "uaType": ["Community Garden"],
      "generalizedRisks": ["Land Use/Ownership"],
      "risksToSystem": [],
      "landUseSystem": ["Field Cultivation", "Rows"],
      "urbanIntegration": "Specific/Discrete Zone"
    },
    {
      "site": "Dachas (St. Petersburg)",
      "heritageStatus": "n/a",
      "uaType":["Allotment Gardens", "Family Gardens"],
      "generalizedRisks":[],
      "risksToSystem":[],
      "landUseSystem":["Family Plots"],
      "urbanIntegration":"Accompany Domestic Lots"
    },
    {
      "site": "Dowling School Victory Garden",
      "heritageStatus": "n/a",
      "uaType": ["Community Garden", "Allotment Garden"],
      "generalizedRisks": [],
      "risksToSystem": [],
      "landUseSystem": ["Individual Plots", "Raised Beds"],
      "urbanIntegration": "Specific/Discrete Zone"
    },
    {
      "site": "Philippi Horticultural Area",
      "heritageStatus": "n/a",
      "uaType": ["Commercial Farm"],
      "generalizedRisks": ["Land Use/Ownership"],
      "risksToSystem": ["Looting", "Development/Urbanization"],
      "landUseSystem": [],
      "urbanIntegration": "Specific/Discrete Zone"
    },
    {
      "site":"Bude Farm",
      "heritageStatus":"n/a",
      "uaType":["Commercial Farm"],
      "generalizedRisks":["Land Use/Ownership"],
      "risksToSystem":["Development/Urbanization"],
      "landUseSystem":["Field Cultivation", "Terraces", "Rows"],
      "urbanIntegration":"Specific/Discrete Zone"
    },
    {
      "site":"Fenway Victory Gardens",
      "heritageStatus":"",
      "uaType":[""],
      "generalizedRisks":[""],
      "risksToSystem":[""],
      "landUseSystem":["", ""],
      "urbanIntegration":""
    },
    {
      "site":"Glamorgan Farm",
      "heritageStatus":"",
      "uaType":[""],
      "generalizedRisks":[""],
      "risksToSystem":[""],
      "landUseSystem":["", ""],
      "urbanIntegration":""
    },
    {
      "site":"London Heritage Farm",
      "heritageStatus":"",
      "uaType":[""],
      "generalizedRisks":[""],
      "risksToSystem":[""],
      "landUseSystem":["", ""],
      "urbanIntegration":""
    },
    {
      "site":"Newman Farm",
      "heritageStatus":"",
      "uaType":[""],
      "generalizedRisks":[""],
      "risksToSystem":[""],
      "landUseSystem":["", ""],
      "urbanIntegration":""
    },
    {
      "site":"Lisbon Municipal Horticultural Parks",
      "heritageStatus":"",
      "uaType":[""],
      "generalizedRisks":[""],
      "risksToSystem":[""],
      "landUseSystem":["", ""],
      "urbanIntegration":""
    },
    {
      "site":"Sant'Erasmo",
      "heritageStatus":"",
      "uaType":[""],
      "generalizedRisks":[""],
      "risksToSystem":[""],
      "landUseSystem":["", ""],
      "urbanIntegration":""
    },
    {
      "site":"Jucker Farm",
      "heritageStatus":"n/a",
      "uaType":["Commercial Farm"],
      "generalizedRisks":[],
      "risksToSystem":[],
      "landUseSystem":["Field Cultivation", "Rows"],
      "urbanIntegration":"Specific/Discrete Zone"
    },
    {
      "site":"Can Masdeu",
      "heritageStatus":"n/a",
      "uaType":["Social Farms", "Community Garden"],
      "generalizedRisks":["Land Use/Ownership"],
      "risksToSystem":["Land Ownership"],
      "landUseSystem":["Individual Plots", "Orchard", "Rows"],
      "urbanIntegration":"Specific/Discrete Zone"
    },
    {
      "site": "La Huerta de Valencia",
      "heritageStatus": "UN FAO GIAHS",
      "uaType": [],
      "generalizedRisks": [],
      "risksToSystem": [],
      "landUseSystem": [],
      "urbanIntegration":""
    },
    {
      "site": "Kuttanad Below Sea Level Farming System",
      "heritageStatus": "UN FAO GIAHS",
      "uaType":["Commercial Farm"],
      "generalizedRisks":["Environmental", "Land Use/Ownership"],
      "risksToSystem":[],
      "landUseSystem":[],
      "urbanIntegration":""
    },
    {
      "site": "Chinampas of Xochimilco",
      "heritageStatus": "UN FAO GIAHS",
      "uaType":["Commercial Farm", "Local Food Farms", "Family Gardens"],
      "generalizedRisks":["Environmental", "Economic", "Land Use/Ownership"],
      "risksToSystem":["Global Warming", "Water Management", "Competition Pricing", "Development/Urbanization"],
      "landUseSystem":["Individual Plots", "Floating Beds", "Canals"],
      "urbanIntegration": "Integrated with Natural System"
    },
    {
      "site":"Cairo Dairy Farming",
      "heritageStatus":"n/a",
      "uaType":["Commercial Farm"],
      "generalizedRisks":["Environmental", "Land Use/Ownership"],
      "risksToSystem":[],
      "landUseSystem":[],
      "urbanIntegration":""
    },
    {
      "site":"Qanat-based Saffron Farming System",
      "heritageStatus":"UN FAO GIAHS Pending",
      "uaType":["Commercial Farm"],
      "generalizedRisks":[],
      "risksToSystem":[],
      "landUseSystem":[],
      "urbanIntegration":""
    },
    {
      "site":"Jos Plateau Vegetable Farm",
      "heritageStatus":"n/a",
      "uaType":["Commercial Farm"],
      "generalizedRisks":["Environmental", "Economic", "Land Use/Ownership"],
      "risksToSystem":[],
      "landUseSystem":[],
      "urbanIntegration":""
    },
    {
      "site":"Little Akaki Valley Farming",
      "heritageStatus":"n/a",
      "uaType":["Commercial Farm"],
      "generalizedRisks":["Environmental", "Economic", "Land Use/Ownership"],
      "risksToSystem":[],
      "landUseSystem":[],
      "urbanIntegration":""
    },
    {
      "site":"Oranjezicht City Farm",
      "heritageStatus":"Provincial Historic Site",
      "uaType":["Community Garden"],
      "generalizedRisks":[],
      "risksToSystem":[],
      "landUseSystem":[],
      "urbanIntegration":""
    }
  ]

  // Search bar automcomplete function
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  // Dropdown items for search bar
  siteSearch = [];
  var jsonData = Object.values(filterList);
  var mapJSON = jsonData.forEach(ua => siteSearch.push(ua.site));

  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), siteSearch);

  // Fly to site when submit button is clicked next to search bar
  function showSite(log) {
    var log = document.getElementById("myInput").value;
    console.log(log);
    if (log === "Central Experimental Farm") {
      flyToSiteCentral();
    } if (log === "Dowling School Victory Garden") {
      flyToSiteDowling();
    } if (log === "Fenway Victory Gardens") {
      flyToSiteFenway();
    } if (log === "Five Acre Farm") {
      flyToSiteFive();
    } if (log === "Glamorgan Farm") {
      flyToSiteGlamorgan();
    } if (log === "London Heritage Farm") {
      flyToSiteLondon();
    } if (log === "Newman Farm") {
      flyToSiteNewman();
    } if (log === "UBC Farm") {
      flyToSiteUBC();
    } if (log === "Dachas") {
      flyToSiteDachas();
    } if (log === "Bude Farm") {
      flyToSiteBude();
    } if (log === "Jucker Farm") {
      flyToSiteJucker();
    } if (log === "Can Masdeu") {
      flyToSiteCan();
    } if (log === "La Huerta de Valencia") {
      flyToSiteHuerta();
    } if (log === "Chinampas of Xochimilco") {
      flyToSiteChinampas();
    }
  }




  /*
  flyToSitePilar()
  flyToSiteVia()
  flyToSiteKnoblauchsland()
  flyToSiteSant()
} if (log === "Kuttanad Below Sea Level Farming System") {
} if (log === "Philippi Horticultural Area") {
} if (log === "Cairo Dairy Farming") {
} if (log === "Qanat-based Saffron Farming System") {
} if (log === "Jos Plateau Vegetable Farm") {
} if (log === "Little Akaki Valley Farming") {
*/


/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var i;
/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

/* Loop through all dropdown buttons to toggle between hiding and showing its
dropdown content - This allows the user to have multiple dropdowns without any
conflict */
var dropdown = document.getElementsByClassName("button");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



function thisFunc() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  let btnText = document.getElementById("moreFilters1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "more ???";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "less ???";
    moreText.style.display = "inline";
  }
}

function thisFuncUAtype() {
  var dotsuatype = document.getElementById("dotsuatype");
  var moreuatype = document.getElementById("moreuatype");
  let moreFilters2 = document.getElementById("moreFilters2");

  if (dotsuatype.style.display === "none") {
    dotsuatype.style.display = "inline";
    moreFilters2.innerHTML = "more ???";
    moreuatype.style.display = "none";
  } else {
    dotsuatype.style.display = "none";
    moreFilters2.innerHTML = "less ???";
    moreuatype.style.display = "inline";
  }
}

function thisFuncRisks() {
  var dotsRisks = document.getElementById("dotsRisks");
  var moreRisks = document.getElementById("moreRisks");
  let moreFilters3 = document.getElementById("moreFilters3");

  if (dotsRisks.style.display === "none") {
    dotsRisks.style.display = "inline";
    moreFilters3.innerHTML = "more ???";
    moreRisks.style.display = "none";
  } else {
    dotsRisks.style.display = "none";
    moreFilters3.innerHTML = "less ???";
    moreRisks.style.display = "inline";
  }
}

function thisFuncLUS() {
  var dotslus = document.getElementById("dotslus");
  var morelus = document.getElementById("morelus");
  let moreFilters4 = document.getElementById("moreFilters4");

  if (dotslus.style.display === "none") {
    dotslus.style.display = "inline";
    moreFilters4.innerHTML = "more land use system filters ???";
    morelus.style.display = "none";
  } else {
    dotslus.style.display = "none";
    moreFilters4.innerHTML = "less land use system filters ???";
    morelus.style.display = "inline";
  }
}

// Mapbox access token and style ID
mapboxgl.accessToken = 'pk.eyJ1Ijoic2phZnJvdWRpIiwiYSI6ImNra2VibWp0azB5azUyb256dHlpaHRtNDQifQ.LBpfWLTC701RZ51wpR_E9A';
var bounds = [[-155, -50],[165, 80]];
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/sjafroudi/ckkebwmd4094i17rvfpitb0pz', // style URL
  center: [20,0], // starting position [lng, lat] -16,30
  zoom: 0.8, // starting zoom 1.5
  maxBounds: bounds,
  attributionControl: false
}).addControl(new mapboxgl.AttributionControl({
  compact: true
}), 'bottom-right');

map.on('style.load', function() {
  // Always add the same custom soruces and layers after a style change
  // Load markers
  map.loadImage('https://raw.githubusercontent.com/sjafroudi/UAH/main/images/mapbox-marker-icon-20px-red.png', function (error, image){
    if (error) throw error;
    map.addImage('icon', image);
  });
  // DATA: Site boundaries (i.e., Central Experimental Farm, Five Acre Farm)
  map.addSource('data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/sjafroudi/UAH/main/GeoJSON/uahData_UpdatedOct17.geojson'
  });

  // boundaries
  map.addLayer({
    'id': 'boundary',
    'type': 'line',
    'source': 'data',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'line-color': '#959ba0',
      'line-width': 0.5
    },
    "filter": ["==", "$type", "Polygon"]
  });
  // line
  map.addLayer({
    'id': 'lines',
    'type': 'line',
    'source': 'data',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'line-color': '#959ba0',
      'line-width': 0.5
    },
    "filter": ["==", "$type", "LineString"]
  });
  // fill multi polygons
  map.addLayer({
    'id': 'multiPolygonFill',
    'type': 'fill',
    'source': 'data',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'red',
      'fill-outline-color': '#9b9ba0',
      'fill-opacity': [
        "interpolate", ["linear"], ["zoom"],
        5, 0.5,
        15, 0
      ]
    },
    "filter": ["==", "layerType", "UAHsystem"]
  });
  // fill
  map.addLayer({
    'id': 'boundaryFill',
    'type': 'fill',
    'source': 'data',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#9b9ba0',
      'fill-outline-color': '#9b9ba0',
      'fill-opacity': 0.05
    },
    "filter": ["==", "$type", "Polygon"]
  });
  // marker
  map.addLayer({
    'id':'site',
    'type': 'symbol',
    'source': 'data',
    'layout': {
      'visibility': 'visible',
      'icon-allow-overlap': true,
      'icon-image': 'icon',
      'icon-size': 0.7
    },
    "filter": ["==", "$type", "Point"]
  });

  document.getElementById("panToFullExtent").addEventListener('click', (event) => {
   panToFullExtent();
  });

  const showallPoints = document.getElementById('showAllPoints');
  showallPoints.addEventListener('click', (event) => {
    map.setFilter('site', ["==", "$type", "Point"]);
  });


  // Event listener for submit button
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', (event) => {
    appendStatusFilters();
    appenduaTypeFilters();
    appendGRFilters();
    appendRisks2SysFilters();
    appendLandUseSystemFilters();
    appendIntFilters();
    runStatusFilters();
    runTypeFilters();
    runGRFilters();
    runRisks2SysFilters();
    runLandUseSysFilters();
    runUrbanIntegrationFilters();
    gatherSiteNames();
    runAllFilters();
    panToFullExtent();
    console.log(hs); // checkbox values
    console.log(uatype);
    console.log(genrisks);
    console.log(risks2system);
    console.log(urbanInt);
    console.log(statusfiltered);
    console.log(uatypefiltered); // filtered list
    console.log(grfiltered);
    console.log(risks2sysfiltered);
    console.log(landUseSystemFiltered);
    console.log(intfiltered);
    console.log(siteNames);
  });

  // list of heritage status filters marked as checked
  let hs = [];
  // when function is called, heritage status "values" are returned to function call
  function heritageStatusCheckboxValues(status) {
    const statusCheckboxes = document.querySelectorAll('input[name="status"]:checked');
    let values = [];
    statusCheckboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    return values;
  }
  // add checked filters to hs filter list
  function appendStatusFilters() {
    hs.length = 0;
    if (heritageStatusCheckboxValues('status').length === 0) {
      console.log("it's empty");
    } else {
      heritageStatusCheckboxValues('status').forEach(element =>
        hs.push(element));
      }
    }

    // when function is called, urban agriculture type "values" are returned to function call
    function uaTypeCheckboxValues(uatype) {
      const statusCheckboxes = document.querySelectorAll('input[name="uatype"]:checked');
      let values = [];
      statusCheckboxes.forEach((checkbox) => {
        values.push(checkbox.value);
      });
      return values;
    }

    // creates an array for all ua type variables marked as checked
    uatype = []; // urban agriculture type filters marked as checked
    function appenduaTypeFilters() {
      uatype.length = 0;
      if (uaTypeCheckboxValues('uatype').length === 0) {
        console.log("it's empty");
      } else {
        uaTypeCheckboxValues('uatype').forEach(element =>
          uatype.push(element));
        }
      }

      // return checkbox urban agriculture type values marked as checked
      function genRisksCheckboxValues(risk) {
        const statusCheckboxes = document.querySelectorAll('input[name="risk"]:checked');
        let values = [];
        statusCheckboxes.forEach((checkbox) => {
          values.push(checkbox.value);
        });
        // when function is called, "values" are returned to function call
        return values;
      }
      // generalized risks filters marked as checked
      genrisks = [];
      function appendGRFilters() {
        genrisks.length = 0;
        if (genRisksCheckboxValues('risk').length === 0) {
          console.log("it's empty");
        } else {
          genRisksCheckboxValues('risk').forEach(element =>
            genrisks.push(element));
          }
        }

        // risks to system checkbox values
        function risks2sysCheckboxValues(r2s) {
          const r2sCheckboxes = document.querySelectorAll('input[name="risks2sys"]:checked');
          let values = [];
          r2sCheckboxes.forEach((checkbox) => {
            values.push(checkbox.value);
            console.log(checkbox);
          });
          return values;
        }

        risks2system = [];
        function appendRisks2SysFilters() {
          risks2system.length = 0;
          if (risks2sysCheckboxValues('risks2sys').length === 0) {
            console.log("it's empty");
          } else {
            risks2sysCheckboxValues('risks2sys').forEach(element =>
              risks2system.push(element));
            }
          }

          // land use system checkbox values
          function landUseSysCheckboxValues(lus) {
            const landCheckboxes = document.querySelectorAll('input[name="land"]:checked');
            let values = [];
            landCheckboxes.forEach((checkbox) => {
              values.push(checkbox.value);
              console.log(checkbox);
            });
            return values;
          }

          landUseSystem = [];
          function appendLandUseSystemFilters() {
            landUseSystem.length = 0;
            if (landUseSysCheckboxValues('land').length === 0) {
              console.log("it's empty");
            } else {
              landUseSysCheckboxValues('land').forEach(element =>
                landUseSystem.push(element));
              }
            }

            // list of heritage status filters marked as checked
            let urbanInt = [];
            function intCheckboxValues(int) {
              const intCheckboxes = document.querySelectorAll('input[name="int"]:checked');
              let values = [];
              intCheckboxes.forEach((checkbox) => {
                values.push(checkbox.value);
              });
              return values;
            }
            // add checked filters to hs filter list
            function appendIntFilters() {
              urbanInt.length = 0;
              if (intCheckboxValues('int').length === 0) {
                console.log("it's empty");
              } else {
                intCheckboxValues('int').forEach(element =>
                  urbanInt.push(element));
                }
              }

              statusfiltered = []; // json filtered by status
              function runStatusFilters() {
                statusfiltered.length = 0;
                // first, filter for type
                jsonData = Object.values(filterList);
                if (hs.length === 0) {
                  jsonData.forEach(x => statusfiltered.push(x));
                } else {
                  var uaFiltered = jsonData.filter(ua => ua.heritageStatus == hs[0]
                    || ua.heritageStatus == hs[1]
                    || ua.heritageStatus == hs[2]
                    || ua.heritageStatus == hs[3]
                    || ua.heritageStatus == hs[4]
                    || ua.heritageStatus == hs[5]
                    || ua.heritageStatus == hs[6]
                    || ua.heritageStatus == hs[7]);
                    console.log(uaFiltered);
                    uaFiltered.forEach(obj => statusfiltered.push(obj));
                  }
                }

                uatypefiltered = []; // json filtered by status, ua type
                // initializes ua type filters according to number of items in uatype list
                function runTypeFilters() {
                  uatypefiltered.length = 0;
                  let ualength = uatype.length;
                  let uatype1 = String(uatype[0]);
                  let uatype2 = String(uatype[1]);
                  let uatype3 = String(uatype[2]);
                  let uatype4 = String(uatype[3]);
                  let uatype5 = String(uatype[4]);
                  let uatype6 = String(uatype[5]);
                  let uatype7 = String(uatype[6]);
                  let uatype8 = String(uatype[7]);
                  let uatype9 = String(uatype[8]);
                  let uatype10 = String(uatype[9]);
                  let uatype11 = String(uatype[10]);
                  let uatype12 = String(uatype[11]);
                  if (ualength === 0) {
                    statusfiltered.forEach(x => uatypefiltered.push(x));
                  } if (ualength === 1) {
                    // if there is 1 filter in uatype, check inclusion of that 1 type for each site
                    var type1Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1));
                    type1Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 2) {
                    // if there are 2 filters in uatype, check inclusion of either type for each site
                    var type2Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2));
                    type2Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 3) {
                    var type3Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3));
                    type3Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 4) {
                    var type4Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4));
                    type4Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 5) {
                    var type5Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5));
                    type5Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 6) {
                    var type6Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6));
                    type6Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 7) {
                    var type7Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6) || x.uaType.includes(uatype7));
                    type7Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 8) {
                    var type8Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6) || x.uaType.includes(uatype7) ||
                    x.uaType.includes(uatype8));
                    type8Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 9) {
                    var type9Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6) || x.uaType.includes(uatype7) ||
                    x.uaType.includes(uatype8) || x.uaType.includes(uatype9));
                    type9Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 10) {
                    var type10Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6) || x.uaType.includes(uatype7) ||
                    x.uaType.includes(uatype8) || x.uaType.includes(uatype9) ||
                    x.uaType.includes(uatype10));
                    type10Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 11) {
                    var type11Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6) || x.uaType.includes(uatype7) ||
                    x.uaType.includes(uatype8) || x.uaType.includes(uatype9) ||
                    x.uaType.includes(uatype10) || x.uaType.includes(uatype11));
                    type11Filtered.forEach(obj => uatypefiltered.push(obj));
                  } if (ualength === 12) {
                    var type12Filtered = statusfiltered.filter(x => x.uaType.includes(uatype1) ||
                    x.uaType.includes(uatype2) || x.uaType.includes(uatype3) ||
                    x.uaType.includes(uatype4) || x.uaType.includes(uatype5) ||
                    x.uaType.includes(uatype6) || x.uaType.includes(uatype7) ||
                    x.uaType.includes(uatype8) || x.uaType.includes(uatype9) ||
                    x.uaType.includes(uatype10) || x.uaType.includes(uatype11) ||
                    x.uaType.includes(uatype12));
                    type12Filtered.forEach(obj => uatypefiltered.push(obj));
                  }
                }

                grfiltered = [];
                function runGRFilters() {
                  grfiltered.length = 0;
                  let genriskslength = genrisks.length;
                  let genrisks1 = String(genrisks[0]);
                  let genrisks2 = String(genrisks[1]);
                  let genrisks3 = String(genrisks[2]);
                  if (genriskslength === 0) {
                    uatypefiltered.forEach(x => grfiltered.push(x));
                  } if (genriskslength === 1) {
                    var gr1Filtered = uatypefiltered.filter(x => x.generalizedRisks.includes(genrisks1));
                    gr1Filtered.forEach(obj => grfiltered.push(obj));
                  } if (genriskslength === 2) {
                    var gr2Filtered = uatypefiltered.filter(x => x.generalizedRisks.includes(genrisks1) ||
                    x.generalizedRisks.includes(genrisks2));
                    gr2Filtered.forEach(obj => grfiltered.push(obj));
                  } if (genriskslength === 3) {
                    var gr3Filtered = uatypefiltered.filter(x => x.generalizedRisks.includes(genrisks1) ||
                    x.generalizedRisks.includes(genrisks2) || x.generalizedRisks.includes(genrisks3));
                    gr3Filtered.forEach(obj => grfiltered.push(obj));
                  }
                }

                risks2sysfiltered = [];
                function runRisks2SysFilters() {
                  risks2sysfiltered.length = 0;
                  let risks2syslength = risks2system.length;
                  let risks2sys1 = String(risks2system[0]);
                  let risks2sys2 = String(risks2system[1]);
                  let risks2sys3 = String(risks2system[2]);
                  let risks2sys4 = String(risks2system[3]);
                  let risks2sys5 = String(risks2system[4]);
                  let risks2sys6 = String(risks2system[5]);
                  let risks2sys7 = String(risks2system[6]);
                  let risks2sys8 = String(risks2system[7]);
                  let risks2sys9 = String(risks2system[8]);
                  if (risks2syslength === 0) {
                    grfiltered.forEach(x => risks2sysfiltered.push(x));
                  } if (risks2syslength === 1) {
                    var gr1Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1));
                    gr1Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 2) {
                    var gr2Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2));
                    gr2Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 3) {
                    var gr3Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3));
                    gr3Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 4) {
                    var gr4Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3) ||
                    x.risksToSystem.includes(risks2sys4));
                    gr4Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 5) {
                    var gr5Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3) ||
                    x.risksToSystem.includes(risks2sys4) || x.risksToSystem.includes(risks2sys5));
                    gr5Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 6) {
                    var gr6Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3) ||
                    x.risksToSystem.includes(risks2sys4) || x.risksToSystem.includes(risks2sys5) ||
                    x.risksToSystem.includes(risks2sys6));
                    gr6Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 7) {
                    var gr7Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3) ||
                    x.risksToSystem.includes(risks2sys4) || x.risksToSystem.includes(risks2sys5) ||
                    x.risksToSystem.includes(risks2sys6) || x.risksToSystem.includes(risks2sys7));
                    gr7Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 8) {
                    var gr8Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3) ||
                    x.risksToSystem.includes(risks2sys4) || x.risksToSystem.includes(risks2sys5) ||
                    x.risksToSystem.includes(risks2sys6) || x.risksToSystem.includes(risks2sys7) ||
                    x.risksToSystem.includes(risks2sys8));
                    gr8Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  } if (risks2syslength === 9) {
                    var gr9Filtered = grfiltered.filter(x => x.risksToSystem.includes(risks2sys1) ||
                    x.risksToSystem.includes(risks2sys2) || x.risksToSystem.includes(risks2sys3) ||
                    x.risksToSystem.includes(risks2sys4) || x.risksToSystem.includes(risks2sys5) ||
                    x.risksToSystem.includes(risks2sys6) || x.risksToSystem.includes(risks2sys7) ||
                    x.risksToSystem.includes(risks2sys8) || x.risksToSystem.includes(risks2sys9));
                    gr9Filtered.forEach(obj => risks2sysfiltered.push(obj));
                  }
                }

                landUseSystemFiltered = [];
                function runLandUseSysFilters() {
                  landUseSystemFiltered.length = 0;
                  let landUseSystemlength = landUseSystem.length;
                  let landUseSystem1 = String(landUseSystem[0]);
                  let landUseSystem2 = String(landUseSystem[1]);
                  let landUseSystem3 = String(landUseSystem[2]);
                  let landUseSystem4 = String(landUseSystem[3]);
                  let landUseSystem5 = String(landUseSystem[4]);
                  let landUseSystem6 = String(landUseSystem[5]);
                  let landUseSystem7 = String(landUseSystem[6]);
                  let landUseSystem8 = String(landUseSystem[7]);
                  let landUseSystem9 = String(landUseSystem[8]);
                  let landUseSystem10 = String(landUseSystem[9]);
                  let landUseSystem11 = String(landUseSystem[10]);
                  let landUseSystem12 = String(landUseSystem[11]);
                  if (landUseSystemlength === 0) {
                    risks2sysfiltered.forEach(x => landUseSystemFiltered.push(x));
                  } if (landUseSystemlength === 1) {
                    var land1Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1));
                    land1Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 2) {
                    var land2Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2));
                    land2Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 3) {
                    var land3Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3));
                    land3Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 4) {
                    var land4Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4));
                    land4Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 5) {
                    var land5Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5));
                    land5Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 6) {
                    var land6Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6));
                    land6Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 7) {
                    var land7Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6) || x.landUseSystem.includes(landUseSystem7));
                    land7Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 8) {
                    var land8Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6) || x.landUseSystem.includes(landUseSystem7) ||
                    x.landUseSystem.includes(landUseSystem8));
                    land8Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 9) {
                    var land9Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6) || x.landUseSystem.includes(landUseSystem7) ||
                    x.landUseSystem.includes(landUseSystem8) || x.landUseSystem.includes(landUseSystem9));
                    land9Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 10) {
                    var land10Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6) || x.landUseSystem.includes(landUseSystem7) ||
                    x.landUseSystem.includes(landUseSystem8) || x.landUseSystem.includes(landUseSystem9) ||
                    x.landUseSystem.includes(landUseSystem10));
                    land10Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 11) {
                    var land11Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6) || x.landUseSystem.includes(landUseSystem7) ||
                    x.landUseSystem.includes(landUseSystem8) || x.landUseSystem.includes(landUseSystem9) ||
                    x.landUseSystem.includes(landUseSystem10) || x.landUseSystem.includes(landUseSystem11));
                    land11Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  } if (landUseSystemlength === 12) {
                    var land12Filtered = risks2sysfiltered.filter(x => x.landUseSystem.includes(landUseSystem1) ||
                    x.landUseSystem.includes(landUseSystem2) || x.landUseSystem.includes(landUseSystem3) ||
                    x.landUseSystem.includes(landUseSystem4) || x.landUseSystem.includes(landUseSystem5) ||
                    x.landUseSystem.includes(landUseSystem6) || x.landUseSystem.includes(landUseSystem7) ||
                    x.landUseSystem.includes(landUseSystem8) || x.landUseSystem.includes(landUseSystem9) ||
                    x.landUseSystem.includes(landUseSystem10) || x.landUseSystem.includes(landUseSystem11) ||
                    x.landUseSystem.includes(landUseSystem12));
                    land12Filtered.forEach(obj => landUseSystemFiltered.push(obj));
                  }
                }

                intfiltered = []; // json filtered by status
                function runUrbanIntegrationFilters() {
                  intfiltered.length = 0;
                  let intlength = urbanInt.length;
                  if (intlength === 0) {
                    landUseSystemFiltered.forEach(obj => intfiltered.push(obj));
                  } if (intlength === 1) {
                    var urbanIntFiltered1 = landUseSystemFiltered.filter(ua => ua.urbanIntegration == urbanInt[0]);
                    urbanIntFiltered1.forEach(obj => intfiltered.push(obj));
                  } if (intlength === 2) {
                    var urbanIntFiltered2 = landUseSystemFiltered.filter(ua => ua.urbanIntegration == urbanInt[0] ||
                      ua.urbanIntegration == urbanInt[1]);
                      urbanIntFiltered2.forEach(obj => intfiltered.push(obj));
                    } if (intlength === 3) {
                      var urbanIntFiltered3 = landUseSystemFiltered.filter(ua => ua.urbanIntegration == urbanInt[0] ||
                        ua.urbanIntegration == urbanInt[1] || ua.urbanIntegration == urbanInt[2]);
                        urbanIntFiltered3.forEach(obj => intfiltered.push(obj));
                      } if (intlength === 4) {
                        var urbanIntFiltered4 = landUseSystemFiltered.filter(ua => ua.urbanIntegration == urbanInt[0] ||
                          ua.urbanIntegration == urbanInt[1] || ua.urbanIntegration == urbanInt[2] || ua.urbanIntegration == urbanInt[3]);
                          urbanIntFiltered4.forEach(obj => intfiltered.push(obj));
                        } if (intlength === 5) {
                          var urbanIntFiltered5 = landUseSystemFiltered.filter(ua => ua.urbanIntegration == urbanInt[0] ||
                            ua.urbanIntegration == urbanInt[1] || ua.urbanIntegration == urbanInt[2] || ua.urbanIntegration == urbanInt[3] ||
                            ua.urbanIntegration == urbanInt[4]);
                            urbanIntFiltered5.forEach(obj => intfiltered.push(obj));
                          }
                        }

                        // prints site names which made it through all filters
                        let siteNames = [];
                        function gatherSiteNames() {
                          siteNames.length = 0;
                          intfiltered.forEach(obj => siteNames.push(obj.site));
                        }

                        function runAllFilters() {
                          if (siteNames == 0) {
                            map.setFilter('site', ["==", 'site', ""]);
                          } if (siteNames.length == 1) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]]]);
                          } if (siteNames.length == 2) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]]]);
                          } if (siteNames.length == 3) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]]]);
                          } if (siteNames.length == 4) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]]]);
                          } if (siteNames.length == 5) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]]]);
                          } if (siteNames.length == 6) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]]]);
                          } if (siteNames.length == 7) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]]]);
                          } if (siteNames.length == 8) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]]]);
                          } if (siteNames.length == 9) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]]]);
                          } if (siteNames.length == 10) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]]]);
                          } if (siteNames.length == 11) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]]]);
                          } if (siteNames.length == 12) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]]]);
                          } if (siteNames.length == 13) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]]]);
                          } if (siteNames.length == 14) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]]]);
                          } if (siteNames.length == 15) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]]]);
                          } if (siteNames.length == 16) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]]);
                          } if (siteNames.length == 17) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]]]);
                          } if (siteNames.length == 18) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]]]);
                          } if (siteNames.length == 19) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]]]);
                          } if (siteNames.length == 20) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]]]);
                          } if (siteNames.length == 21) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]]]);
                          } if (siteNames.length == 22) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]]]);
                          } if (siteNames.length == 23) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]]]);
                          } if (siteNames.length == 24) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]]]);
                          } if (siteNames.length == 25) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]]]);
                          } if (siteNames.length == 26) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]]]);
                          } if (siteNames.length == 27) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]]]);
                          } if (siteNames.length == 28) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]]]);
                          } if (siteNames.length == 29) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]]]);
                          } if (siteNames.length == 30) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]]]);
                          } if (siteNames.length == 31) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]]]);
                          } if (siteNames.length == 32) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]]]);
                          } if (siteNames.length == 33) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]]]);
                          } if (siteNames.length == 34) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]]]);
                          } if (siteNames.length == 35) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]]]);
                          } if (siteNames.length == 36) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]],
                            ['==', 'site', siteNames[35]]]);
                          } if (siteNames.length == 37) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]],
                            ['==', 'site', siteNames[35]],
                            ['==', 'site', siteNames[36]]]);
                          } if (siteNames.length == 38) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]],
                            ['==', 'site', siteNames[35]],
                            ['==', 'site', siteNames[36]],
                            ['==', 'site', siteNames[37]]]);
                          } if (siteNames.length == 39) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]],
                            ['==', 'site', siteNames[35]],
                            ['==', 'site', siteNames[36]],
                            ['==', 'site', siteNames[37]],
                            ['==', 'site', siteNames[38]]]);
                          } if (siteNames.length == 40) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]],
                            ['==', 'site', siteNames[35]],
                            ['==', 'site', siteNames[36]],
                            ['==', 'site', siteNames[37]],
                            ['==', 'site', siteNames[38]],
                            ['==', 'site', siteNames[39]]]);
                          } if (siteNames.length == 41) {
                            map.setFilter('site', ['any', ['==', 'site', siteNames[0]],
                            ['==', 'site', siteNames[1]],
                            ['==', 'site', siteNames[2]],
                            ['==', 'site', siteNames[3]],
                            ['==', 'site', siteNames[4]],
                            ['==', 'site', siteNames[5]],
                            ['==', 'site', siteNames[6]],
                            ['==', 'site', siteNames[7]],
                            ['==', 'site', siteNames[8]],
                            ['==', 'site', siteNames[9]],
                            ['==', 'site', siteNames[10]],
                            ['==', 'site', siteNames[11]],
                            ['==', 'site', siteNames[12]],
                            ['==', 'site', siteNames[13]],
                            ['==', 'site', siteNames[14]],
                            ['==', 'site', siteNames[15]]
                            ['==', 'site', siteNames[16]],
                            ['==', 'site', siteNames[17]],
                            ['==', 'site', siteNames[18]],
                            ['==', 'site', siteNames[19]],
                            ['==', 'site', siteNames[20]],
                            ['==', 'site', siteNames[21]],
                            ['==', 'site', siteNames[22]],
                            ['==', 'site', siteNames[23]],
                            ['==', 'site', siteNames[24]],
                            ['==', 'site', siteNames[25]],
                            ['==', 'site', siteNames[26]],
                            ['==', 'site', siteNames[27]],
                            ['==', 'site', siteNames[28]],
                            ['==', 'site', siteNames[29]],
                            ['==', 'site', siteNames[30]],
                            ['==', 'site', siteNames[31]],
                            ['==', 'site', siteNames[32]],
                            ['==', 'site', siteNames[33]],
                            ['==', 'site', siteNames[34]],
                            ['==', 'site', siteNames[35]],
                            ['==', 'site', siteNames[36]],
                            ['==', 'site', siteNames[37]],
                            ['==', 'site', siteNames[38]],
                            ['==', 'site', siteNames[39]],
                            ['==', 'site', siteNames[40]]]);
                          }
                        }

                        function panToFullExtent(){
                          map.flyTo({
                            center: [0,0],
                            zoom: 1,
                            speed: 1.2,
                          });
                        }

                        //const showallBtn = document.getElementById('showall');
                        //showallBtn.addEventListener('click', (event) => {
                        //  map.setFilter('site', ["==", "$type", "Point"]);
                        //});

                      });

                      // Switch basemap
                      var layerList = document.getElementById('menu');
                      var inputs = layerList.getElementsByTagName('input');
                      function switchLayer(layer) {
                        var layerId = layer.target.id;
                        map.setStyle('mapbox://styles/' + layerId);
                      }
                      for (var i = 0; i < inputs.length; i++) {
                        inputs[i].onclick = switchLayer;
                      }

                      // Create popup variable
                      var popup = new mapboxgl.Popup({
                        closeButton: true,
                        closeOnClick: true
                      });

                      // Element variable for long form fact sheet
                      var sideNav = document.getElementById("sidenavFact");
                      var sideNavMain = document.getElementById("sidenav");
                      var closeBtn = document.getElementById("close");

                      // Popup event
                      map.on('click', 'site', function(e) {
                        var coordinates = e.features[0].geometry.coordinates;
                        var site = e.features[0].properties.site;
                        var location = e.features[0].properties.location;
                        var size = e.features[0].properties.size;
                        var heritageStatus = e.features[0].properties.heritageStatus;
                        var mainProducts = e.features[0].properties.mainProducts;
                        popup.setLngLat(e.lngLat);

                        if (size === "n/a") {
                          popup.setHTML('<div class="popup"><p class="twentysixpoint"><t href="#">' + site + '</t><br><br>' +
                          "<strong>Location: </strong>" + location + '<br>' +
                          "<strong>Heritage Status: </strong>" + heritageStatus + '<br>' +
                          "<strong>Main products: </strong>" + mainProducts + '<br></p></div>' +
                          '<button class="button button2" onclick="myFunction()" id="myBtn"><t href="#">' +
                          "View full fact sheet" + '</button><button class="button button2" id="flyTo">' +
                          "Zoom to site" + '</t></button>');
                        } else {
                        popup.setHTML('<div class="popup"><p class="twentysixpoint"><t href="#">' + site + '</t><br><br>' +
                        "<strong>Location: </strong>" + location + '<br>' +
                        "<strong>Size: </strong>" + size + '<br>' +
                        "<strong>Heritage Status: </strong>" + heritageStatus + '<br></p></div>' +
                        '<button class="button button2" onclick="myFunction()" id="myBtn"><t href="#">' +
                        "View full fact sheet" + '</button><button class="button button2" id="flyTo">' +
                        "Zoom to site" + '</t></button>');
                      }

                        popup.addTo(map);

                        // Fly To event
                        var fly = document.getElementById("flyTo");
                        fly.addEventListener('click', function(e) {
                          if (site === "Dachas") {
                            map.flyTo({
                              center: coordinates,
                              zoom: 6.7,
                              speed: 1.2,
                              curve: 1.42,
                            });
                          }
                          else {
                            map.flyTo({
                              center: coordinates,
                              zoom: 9,
                              speed: 1.2,
                              curve: 1.42,
                            });
                          }
                        });
                      });

                      function myFunctionDSG(e) {
                        e = "Bye";
                        cef(e);
                      }

                      function catalogueCentral(e) {
                        e = "Central Experimental Farm";
                        cef(e);
                      }

                      function cef(e) {
                        console.log(e);
                      }


                      map.on('click', 'site', function(e) {
                        var coordinates = e.features[0].geometry.coordinates;
                        var site = e.features[0].properties.site;
                        var location = e.features[0].properties.location;
                        var size = e.features[0].properties.size;
                        var heritageStatus = e.features[0].properties.heritageStatus;
                        var geogAndClimate = e.features[0].properties.geogAndClimate;
                        var integration = e.features[0].properties.integration;
                        var mainProducts = e.features[0].properties.mainProducts;
                        var operationScale = e.features[0].properties.operationScale;
                        var cultivationSystem = e.features[0].properties.cultivationSystem;
                        var history = e.features[0].properties.history;
                        var heritage = e.features[0].properties.heritage;
                        var stakeholders = e.features[0].properties.stakeholders;
                        var customers = e.features[0].properties.customers;
                        var risks = e.features[0].properties.risks;
                        var incentives = e.features[0].properties.incentives;
                        var sources = e.features[0].properties.sources;

                        var title = document.createElement('strong');
                        sideNav.style.paddingTop = "10px";
                        sideNav.style.paddingRight = "30px";
                        sideNav.style.paddingBottom = "15px";
                        title.style.fontSize = "x-large";
                        title.style.fontWeight = "300";
                        title.textContent = site;

                        var locationFS = document.createElement('p');
                        locationFS.innerHTML = '<b>Location: </b>' + location;
                        locationFS.style.fontWeight = "200";

                        var sizeFS = document.createElement('p');
                        sizeFS.innerHTML = '<b>Size:  </b>' + size;

                        var heritageStatusFS = document.createElement('p');
                        heritageStatusFS.innerHTML = '<b>Heritage Status:  </b>' + heritageStatus;

                        var geogAndClimateFS = document.createElement('p');
                        geogAndClimateFS.innerHTML = '<b>Geography and Climate:  </b>' + geogAndClimate;

                        var integrationFS = document.createElement('p');
                        integrationFS.innerHTML = '<b>Urban Integration:  </b>' + integration;

                        var mainProductsFS = document.createElement('p');
                        mainProductsFS.innerHTML = '<b>Main Products:  </b>' + mainProducts;

                        var operationScaleFS = document.createElement('p');
                        operationScaleFS.innerHTML = '<b>Scale of Operation:  </b>' + operationScale;

                        var cultivationSystemFS = document.createElement('p');
                        cultivationSystemFS.innerHTML = '<b>Cultivation System:  </b>' + cultivationSystem;

                        var historyFS = document.createElement('p');
                        historyFS.innerHTML = '<b>History:  </b>' + history;

                        var heritageFS = document.createElement('p');
                        heritageFS.innerHTML = '<b>Heritage:  </b>' + heritage;

                        var stakeholdersFS = document.createElement('p');
                        stakeholdersFS.innerHTML = '<b>Stakeholders:  </b>' + stakeholders;

                        var customersFS = document.createElement('p');
                        customersFS.innerHTML = '<b>Customers:  </b>' + customers;

                        var risksFS = document.createElement('p');
                        risksFS.innerHTML = '<b>Risks:  </b>' + risks;

                        var incentivesFS = document.createElement('p');
                        incentivesFS.innerHTML = '<b>Current Incentives:  </b>' + incentives;

                        var sourcesFS = document.createElement('p');
                        sourcesFS.innerHTML = '<b>Sources:  </b><br>' + sources;


                        var emptySpace = document.createElement('p');
                        emptySpace.innerHTML = ' ';

                        sideNav.innerHTML = "";
                        sideNav.appendChild(closeBtn);
                        sideNav.appendChild(title);
                        sideNav.appendChild(locationFS);
                        sideNav.appendChild(sizeFS);
                        sideNav.appendChild(heritageStatusFS);
                        sideNav.appendChild(geogAndClimateFS);
                        sideNav.appendChild(integrationFS);
                        sideNav.appendChild(mainProductsFS);
                        sideNav.appendChild(operationScaleFS);
                        sideNav.appendChild(cultivationSystemFS);
                        sideNav.appendChild(historyFS);
                        sideNav.appendChild(heritageFS);
                        sideNav.appendChild(stakeholdersFS);
                        sideNav.appendChild(customersFS);
                        sideNav.appendChild(risksFS);
                        sideNav.appendChild(incentivesFS);
                        sideNav.appendChild(sourcesFS);
                        sideNav.appendChild(emptySpace);
                        sideNav.style.display = 'none';

                        if (customers === "n/a") {
                          sideNav.removeChild(customersFS);
                        }

                        if (risks === "n/a") {
                          sideNav.removeChild(risksFS);
                        }

                        if (cultivationSystem === "n/a") {
                          sideNav.removeChild(cultivationSystemFS);
                        }

                        if (geogAndClimate === "n/a") {
                          sideNav.removeChild(geogAndClimateFS);
                        }

                        if (integration === "n/a") {
                          sideNav.removeChild(integrationFS);
                        }

                        if (operationScale === "n/a") {
                          sideNav.removeChild(operationScaleFS);
                        }

                        if (stakeholders === "n/a") {
                          sideNav.removeChild(stakeholdersFS);
                        }

                        if (customers === "n/a") {
                          sideNav.removeChild(customersFS);
                        }

                        if (incentives === "n/a") {
                          sideNav.removeChild(custoincentivesFSmersFS);
                        }

                        if (sources === "n/a") {
                          sideNav.removeChild(sourcesFS);
                        }

                        });

                      function displayFS() {
                        sideNav.style.display = "block";
                        closeBtn.style.display = "block";
                      }

                      function myFunction() {
                        if (sideNav.style.display === "block") {
                          displayFS();
                        } else {
                          displayFS();
                        }
                      }

                      function closeFS() {
                        sideNav.style.display = "none";
                        //sideNav.innerHTML = ""; //remove all child elements inside of myDiv
                        closeBtn.style.display === "block";
                      }

                      function openFS() {
                        sideNav.style.display = "block";
                      }

                      function closeFunction() {
                        if (closeBtn.style.display === "block") {
                          closeFS();
                        } else {
                          openFS();
                        }
                      }

                      // Cursor Style specs
                      map.on('mouseenter', 'site', function () {
                        map.getCanvas().style.cursor = 'pointer';
                      });
                      map.on('mouseleave', 'site', function() {
                        map.getCanvas().style.cursor = '';
                      });
                      map.setLayerZoomRange('site', 0, 24);

                      // Side panel catalogue --> fly to clicked site
                      function flyToSiteCentral(){
                        map.flyTo({
                          center: [-75.709121, 45.387436],
                          zoom: 12,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteDowling() {
                        map.flyTo({
                          center: [-93.207171, 44.932443],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteFenway(){
                        map.flyTo({
                          center: [-71.092980, 42.345834],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteFive(){
                        map.flyTo({
                          center: [-123.945692, 49.142222],
                          zoom: 16,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteGlamorgan(){
                        map.flyTo({
                          center: [-123.426182, 48.658272],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteLondon(){
                        map.flyTo({
                          center: [-123.151921, 49.114599],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteNewman(){
                        map.flyTo({
                          center: [-123.395755, 48.601757],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteUBC(){
                        map.flyTo({
                          center: [-123.237301, 49.249697],
                          zoom: 12,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }

                      function flyToSiteChinampas(){
                        map.flyTo({
                          center: [-99.079256, 19.271650],
                          zoom: 12,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSitePilar(){
                        map.flyTo({
                          center: [-89.155278, 17.256667],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteBude(){
                        map.flyTo({
                          center: [6.128928, 46.224855],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteCan(){
                        map.flyTo({
                          center: [2.157593, 41.445698],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteJucker(){
                        map.flyTo({
                          center: [8.773031, 47.343785],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteHuerta(){
                        map.flyTo({
                          center: [-0.376282, 39.471715],
                          zoom: 10,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteVia(){
                        map.flyTo({
                          center: [6.121407, 50.72091],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteKnoblauchsland(){
                        map.flyTo({
                          center: [11.031397, 49.505310],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteSant(){
                        map.flyTo({
                          center: [12.412319, 45.457120],
                          zoom: 9,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }
                      function flyToSiteDachas(){
                        map.flyTo({
                          center: [30.3609, 59.9311],
                          zoom: 6.7,
                          speed: 1.2,
                          curve: 1.42,
                        });
                      }                      
