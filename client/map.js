// <div  id='map'  style='height:380px;'  />
// <script  src="https://maps.googleapis.com/maps/api/js"></script>
//
// <script>
//       var  map  =  new  google.maps.Map(document.getElementById('map'),  {
//                   center:  new  google.maps.LatLng(51.505,  -0.09),
//                   mapTypeId:  google.maps.MapTypeId.ROADMAP,
//                   zoom:  11
//               });
//
//                               var  t  =  new  Date().getTime();
//       var  waqiMapOverlay  =  new  google.maps.ImageMapType({
//                   getTileUrl:  function(coord,  zoom)  {
//                             return  'https://tiles.waqi.info/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=_TOKEN_ID_";
//                   },
//                   name:  "Air  Quality",
//         });
//
//       map.overlayMapTypes.insertAt(0,waqiMapOverlay);
// </script>


  <img src=`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=f0be4f42542748763ca5795f6e5768ba0303a091` />

<img src=`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{this.state.latitude}/{this.state.longitude}.png?token=f0be4f42542748763ca5795f6e5768ba0303a091` />
