var map;
var marker = [];
var geocoder;
var markerData = [ // マーカーを立てる場所名,住所
    {
         name: 'ユーニス本社/東京支社',
         address: '東京都港区六本木6丁目7番14号 朝日ビル4F'
    }, {
         name: 'ユーニス大阪支社',
         address: '大阪市中央区淡路町3丁目5番13号 創建御堂筋ビル9F'
    }, {
         name: 'ユーニス名古屋支社',
         address: '愛知県名古屋市中村区名駅南4丁目8番12号 T&E名駅南ビル4F'
   }
];

function initMap() {
    geocoder = new google.maps.Geocoder();
  	var mapLatLng = new google.maps.LatLng({lat: 35.680399, lng: 139.767178}); // 緯度経度のデータ作成
	map = new google.maps.Map(document.getElementById('sample'), {
	    center: mapLatLng, // 地図の中心を指定
	    zoom: 7 // 地図のズームを指定
	});
    for(var i = 0; i < markerData.length; i++) {
      geocoder.geocode({
          'address': markerData[i]['address']
      }, function(results, status) { // 結果
          if (status === google.maps.GeocoderStatus.OK) { // ステータスがOKの場合
              var locate = results[0].geometry.location;
              marker[i] = new google.maps.Marker({
                  position: locate, // マーカーを立てる位置を指定
                  map: map // マーカーを立てる地図を指定
              });
          } else { // 失敗した場合
              alert(status);
          }
      }); 
    }

}