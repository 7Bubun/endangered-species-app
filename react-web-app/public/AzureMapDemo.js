var map, datasource, client, popup, searchInput, resultsPanel, searchInputLength, centerMapOnResults;

//The minimum number of characters needed in the search input before a search is performed.
var minSearchInputLength = 3;

//The number of ms between key strokes to wait before performing a search.
var keyStrokeDelay = 150;

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function GetMap() {
    //Initialize a map instance.
    map = new atlas.Map('myMap', {
        center: [-118.270293, 34.039737],
        zoom: 2,
        view: 'Auto',

        //Add authentication details for connecting to Azure Maps.
        authOptions: {
            //Use Azure Active Directory authentication.
            //                    authType: 'anonymous',
            //                    clientId: '04ec075f-3827-4aed-9975-d56301a2d663', //Your Azure Active Directory client id for accessing your Azure Maps account.
            //                    getToken: function (resolve, reject, map) {
            //URL to your authentication service that retrieves an Azure Active Directory Token.
            //                        var tokenServiceUrl = "https://azuremapscodesamples.azurewebsites.net/Common/TokenService.ashx";

            //                        fetch(tokenServiceUrl).then(r => r.text()).then(token => resolve(token));
            //                    }

            //Alternatively, use an Azure Maps key. Get an Azure Maps key at https://azure.com/maps. NOTE: The primary key should be used as the key.
            authType: 'subscriptionKey',
            subscriptionKey: 'ppaDuPVNCUAQBxa6euPFV2nBhNvqGbYfCFG-1SrTKag'
        }
    });

    function createMarker(pos0, pos1, givenid, givenstate) {
        radio = pos0.toString().concat(" ").concat(pos1.toString());
        var content = document.createElement('div');
        content.style.setProperty('padding', '15px');
        content.style.setProperty('color', 'black');
        var label1 = document.createElement('label');
        label1.setAttribute('for', 'littered')
        label1.innerText = givenstate;
        content.appendChild(label1);
        var marker = new atlas.HtmlMarker({
            color: 'green',
            position: [pos0, pos1],
            popup: new atlas.Popup({
                content: content,
                pixelOffset: [0, -30]
            }),
        });
        marker.properties = {
            id: givenid,
            state: givenstate
        }
        map.events.add('contextmenu', marker, () => {
            marker.togglePopup();
            countrycode = marker.properties.id;

            table = document.getElementById("endered-species-list")

            const get = new XMLHttpRequest();
            const url = `https://apiv3.iucnredlist.org/api/v3/country/getspecies/${countrycode}?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`
            get.open("GET", url);
            get.setRequestHeader("Content-Type", "application/json");
            get.onreadystatechange = function () {
                if (get.readyState === XMLHttpRequest.DONE) {
                    var status = get.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        allSpecies = JSON.parse(get.responseText).result;

                        var i = 1
                        allSpecies.forEach(element => {
                            var category = element.category
                            if ( category == "EW" || category == "CR" ||  category == "EN" ) {
                                var row = table.insertRow(i);
                                var cell1 = row.insertCell(0);
                                var cell2 = row.insertCell(1);
                                cell1.innerHTML = element.scientific_name;
                                cell2.innerHTML = category;
                                i++
                            }
                        });
                    } else {
                        // Oh no! There has been an error with the request!
                    }
                }
            };
            get.send();
        });
        map.markers.add(marker);
    }

    map.events.add('ready', function () {
        fetch('countries_codes_and_coordinates.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');
          
            return reader.read().then(function (result) {
                const csvString = decoder.decode(result.value);
                countries = csvString.split("\n")

                array = []

                countries.forEach(element => {
                    var properties = element.split(", ")
                    array.push(properties)

                    positions = [properties[5].split('"')[1], properties[4].split('"')[1]]
                    country = properties[0].split('"')[1];
                    id = properties[1].split('"')[1];
                    createMarker(positions[0], positions[1], id, country);
                });
            });
          })
    });
}