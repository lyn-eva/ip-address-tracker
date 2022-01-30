import { useEffect, useState } from "react";

function Info({ data }) {
  const [infoOpen, setInfoOpen] = useState(true);
  const [addAnime, setAddAnime] = useState(true);
  const { city, region, country } = data.location;

  useEffect(() => {
    const timing = setTimeout(() => {
      setAddAnime(false);
    }, 1000);

    return () => {
      clearTimeout(timing);
      setAddAnime(true);
    };
  }, [data]);

  const clickHandler = (e) => {
    setInfoOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed z-10 left-1/2 -translate-x-1/2 w-10/12 mx-auto -translate-y-32">
      <button
        onClick={clickHandler}
        className="w-full h-7 bg-white duration-300 hover:opacity-90 rounded-md mb-2"
      >
        click to close
      </button>
      <ul
        className={`${
          addAnime ? "animate-resize" : ""
        } text-center font-medium bg-white  rounded-lg py-1 shadow-md duration-500 origin-top ${
          infoOpen ? "" : "scale-y-0 opacity-0"
        }`}
      >
        <li className="my-4">
          <span className="text-[12px] text-dGrey">IP ADDRESS</span>
          <p className="text-xl text-vDgrey">{data.ip}</p>
        </li>
        <li className="my-4">
          <span className="text-[12px] text-dGrey">lOCATION</span>
          <p className="text-xl text-vDgrey">{`${city}, ${region}, ${country}`}</p>
        </li>
        <li className="my-4">
          <span className="text-[12px] text-dGrey">TIMEZONE</span>
          <p className="text-xl text-vDgrey">{`UTC ${data.location.timezone}`}</p>
        </li>
        <li className="my-4">
          <span className="text-[12px] text-dGrey">ISP</span>
          <p className="text-xl text-vDgrey">{data.isp}</p>
        </li>
      </ul>
    </div>
  );
}

export default Info;
