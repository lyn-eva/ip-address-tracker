import React from 'react';

function Header() {
  return <header className='text-center pt-8 pb-28 header'>
    <h1 className='text-2xl font-medium text-white'>IP Address Tracker</h1>
    <form className='relative mt-5 w-10/12 mx-auto'>
      <input className='h-11 w-[calc(100%-3rem)] mr-12 rounded-l-lg pl-4 inline-block outline-none' placeholder='Search by any IP address or domain' />
      <button className='w-12 bg-black h-11 absolute right-0 top-0 rounded-r-lg grid place-items-center'><img src='./images/icon-arrow.svg' alt='submit'/></button>
    </form>
  </header>;
}

export default Header;
