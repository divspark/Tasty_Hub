import React from 'react';
import "./Header.scss";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <h1 className="heading font-sevillana text-6xl font-semibold text-orange-700 mt-7 ml-5">Tasty Hub</h1>
        <SearchForm />
        <h1 className='text-white header-title ls-2'> What tasty recipe are you excited to explore today?</h1>
        <p className='text-uppercase text-white my-3 ls-1'>Feast Your Eyes and Appetite</p>
      </div>
    </header>
  )
}

export default Header