<!DOCTYPE HTML>
<html>
  <head>
    <script src="https://cdn-webgl.wrld3d.com/wrldjs/dist/latest/wrld.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/js/all.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="">
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<style>
		body {
			margin: 0px;
			padding: 0px;
			background-color: #000;
		}
		#map {
			z-index: 1;
			height: 100%;
		}
		button {
			border: none;
			border-radius: 5px;
			padding: 15px 15px;
			color: white;
			background-color: #242740;
			margin: 5px 5px;
			cursor: pointer;
			font-size: 24px;
		}
	</style>
  </head>
  
  <body>
  <div style="position: relative">
	<button id="centerthemap" style="position: fixed; z-index: 10;width: 55px; height: 55px;"><i class="fas fa-bullseye"></i></button>
	<button style="position: fixed; z-index: 10; top: 60px; width: 55px; height: 55px;"><i class="fas fa-hashtag"></i></button>
    <div id="map" style="height: 900Px"></div>
	<script src="iss.js"></script>
  </div>
  </body>
</html>