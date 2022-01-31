import { useRef, useState, useCallback } from "react";

function Header(props) {
  const inputRef = useRef();
  const [validity, setValidity] = useState(true);

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    let ip = inputRef.current.value.trim().split(".");
    if (
      ip.length !== 4 ||
      !ip.every(
        (n) =>
          n === "0" || (n !== "" && n >= 0 && n <= 255 && !n.startsWith("0"))
      )
    ) {
      return setValidity(false);
    }
    props.setIp(inputRef.current.value);
    setValidity(true);
  }, []);

  return (
    <header className="text-center pt-8 pb-36 bg-cover header">
      <h1 className="text-2xl font-medium text-white">IP Address Tracker</h1>
      {!validity && (
        <small className="text-orange-400 font-light text-sm">
          ip address must contain four numbers between 0 and 255
        </small>
      )}
      <form
        onSubmit={submitHandler}
        className="relative mt-5 w-10/12 mx-auto max-w-2xl"
      >
        <input
          ref={inputRef}
          className="h-11 w-[calc(100%-3rem)] mr-12 rounded-l-lg pl-4 inline-block outline-none"
          placeholder="Search by any IP address or domain"
        />
        <button className="w-12 bg-black h-11 absolute right-0 top-0 rounded-r-lg grid place-items-center">
          <img src="./images/icon-arrow.svg" alt="submit" />
        </button>
      </form>
    </header>
  );
}

export default Header;
