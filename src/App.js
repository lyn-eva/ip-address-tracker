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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchData(ip).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [ip]);

  return (
    <>
      <Header setIp={setIp} />
      {isLoading || (
        <>
          <Info data={data ? data : ""} />
          <Map
            latitude={data.location.lat}
            longitude={data.location.lng}
          />
        </>
      )}
      {isLoading && (
        <div className="z-10 fixed w-full grid place-items-center top-[65vh]">
          <div className="animate-spin w-10 h-10 border-4 border-r-gray-300 rounded-full border-gray-800"></div>
          please wait...
        </div>
      )}
    </>
  );
}

export default App;
