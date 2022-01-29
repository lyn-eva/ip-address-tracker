import { useEffect, useState } from "react";

function Info({ data }) {
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

  return (
    <div>
      <ul
        className={`${addAnime ? 'animate-resize' : ''} text-center font-medium bg-white w-10/12 mx-auto rounded-lg py-1 shadow-md -translate-y-28`}
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
