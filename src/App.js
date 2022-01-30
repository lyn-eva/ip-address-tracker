import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Info from "./components/Info";

const fetchData = async (IP) => {
  const req = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_9BYM5lzeQ7FHa9ITYMIiWYdlKuPsD&ipAddress=${IP}`
  );
  const response = await req.json();
  return response;
};

function App() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData(ip).then((response) => {
      setData(response);
      console.log(data);
    });
  }, [ip]);

  return (
    <>
      <Header setIp={setIp} />
      {data.location && (
        <>
          <Info data={data ? data : ""} />
          <Map
            latitude={data.location.lat}
            longitude={data.location.lng}
          />
        </>
      )}
    </>
  );
}

export default App;
