async function showData(){
    var data = fetch('./integrations_json.json');
    data = await data;
    data = await data.json();
    var html = "";
    for(key in data.teams){

        console.log(data.teams[key]);
        html += `<div class="datadiv" id="${key}"><img src="${data.teams[key][0]}"/><h1>${data.teams[key][1]}</h1><p>${data.teams[key][2]}</p></div>`
    }
    document.getElementById('grid_container').innerHTML = html;
}

showData()