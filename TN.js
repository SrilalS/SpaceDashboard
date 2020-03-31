var d = new Date();
var year;
var month;
var date;
if (d.getMonth()<10){
    month = '0' + (d.getMonth()+1).toString();
} else {
    month = (d.getMonth()+1).toString();
}

if (d.getDate()<10){
    date = '0' + (d.getDate()).toString();
} else {
    date = (d.getDate()).toString();
}


var dt = d.getFullYear().toString() + '-' + month + '-' + date;
console.log(dt);
var settings = {
    "url": 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+ dt +'&end_date=' + dt+ '&api_key=kjPLe9RNsz0X0qWhuMutlMH3V3S15oOZFsKskTSH',
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    var count = response['element_count'];
    console.log(count);
    var name = [];
    var size = [];
    var missing = [];
    var wiku = [];
    var info =[];

    var datarow = [];
    for (var i = 0; i < count; ++i) {
        datarow[i] = [];
    }


    for (let index = 0; index < count; index++) {
        datarow[index].push(response['near_earth_objects'][dt][index]['name']);
        datarow[index].push(response['near_earth_objects'][dt][index]['estimated_diameter']['meters']['estimated_diameter_max']);
        datarow[index].push(response['near_earth_objects'][dt][index]['close_approach_data'][0]['miss_distance']['kilometers']);
        datarow[index].push(response['near_earth_objects'][dt][index]['is_potentially_hazardous_asteroid']);
        datarow[index].push(response['near_earth_objects'][dt][index]['nasa_jpl_url']);
    }


    var data = [
        ['Name','Size (m)','Missing by (Km)','Will it Kill Us?','More Info'],
    ];

    for (var j = 0; j < count; ++j) {
        data.push(datarow[j]);
    }

      console.log(data);

      var container = document.getElementById('table');
      var hot = new Handsontable(container, {
        data: data,
        rowHeaders: false,
        licenseKey :'non-commercial-and-evaluation',
        colHeaders: false,
        filters: false,
        dropdownMenu: false
      });
});

