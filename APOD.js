var settings = {
    "url": "https://api.nasa.gov/planetary/apod?api_key=kjPLe9RNsz0X0qWhuMutlMH3V3S15oOZFsKskTSH",
    "method": "GET",
    "timeout": 0,
  };

  
var imgurl;
var desc;
var imghdurl;

$.ajax(settings).done(function (response) {
    console.log(response);
    imghdurl = response['hdurl'];
    imgurl = response['url'];
    desc = response['explanation'];
    console.log(imghdurl);
    console.log(imgurl);
    console.log(desc);

    document.getElementById('img').src = imgurl;
    document.getElementById('desc').innerText = desc;
    //document.getElementById('newcases').innerHTML = nc;
    //document.getElementById('deaths').innerHTML = td;
});