import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

import resumeUpdatePDF from './resume-update.pdf';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    fetch(resumeUpdatePDF)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf'; // Change the file name as desired
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Firdaus Safwan &nbsp;
            <span className="sm:block hidden">| &nbsp; Portfolio </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-gray-400'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1sd9FaFbgO6kgUrc14QtESgvF5he9hMMF"
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-900 rounded"
            >
              Download Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 alpha-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-[#ef4444]'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/uc?export=download&id=1sd9FaFbgO6kgUrc14QtESgvF5he9hMMF"
                  className="text-[#ef4444]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
