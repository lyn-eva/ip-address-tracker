function Map(props) {

  window.mapboxgl.accessToken =
    "pk.eyJ1IjoiZXhvbG90byIsImEiOiJja3l5Z3lkYmQwOTNuMnVtajhrcjdxMmJoIn0.2SbTcqjbc3DDhGYe0f7NcA";

    new window.mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [props.longitude, props.latitude], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });
  return <div className="w-52"></div>;
}

export default Map;
