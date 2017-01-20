jQuery(function ($) {
        function init_map1() {
            var myLocation = new google.maps.LatLng(28.738581, 77.055796);
            var mapOptions = {
                center: myLocation,
                zoom: 16,
			    mapTypeId: google.maps.MapTypeId.TERRAIN
            };
            var marker = new google.maps.Marker({
                position: myLocation,
                title: "Home Location"
            });
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            marker.setMap(map);
        }
        init_map1();
   
});