Reveal.addEventListener( "google-maps-section", function(){
   if (navigator.geolocation) {
        var watchID = navigator.geolocation.watchPosition(function(position) {
            var s = document.querySelector("#geo-status");
            s.innerHTML = "Found!";
            
            var mapcanvas = document.createElement("div");
            mapcanvas.id = "mapcanvas";
            mapcanvas.style.height = "200px";
            mapcanvas.style.width = "700px";
            mapcanvas.style.margin = "auto";
            
            document.querySelector("#google-maps").appendChild(mapcanvas);    
            
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            var options = {
                zoom: 15,
                center: latlng,
                mapTypeControl: false,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            
            var map = new google.maps.Map(document.getElementById("mapcanvas"), options);
        
            var marker = new google.maps.Marker({
                position: latlng, 
                map: map, 
                title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
            }); 
        },function(msg) {
            var s = document.querySelector('#geo-status');
            s.innerHTML = msg;
        });
    } else {
      error("Geolocation not supported");
    }    
});