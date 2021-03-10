async function showData(){
    var data = fetch('./integrations_json.json');
    data = await data;
    data = await data.json();
    for(key in data.teams){

        console.log(data.teams[key]);
        
    }
}

showData()