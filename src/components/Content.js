import React from 'react';
import roupa1 from "../img/roupa1.jpg"
import roupa2 from "../img/roupa2.jpg"
import roupa3 from "../img/roupa3.png"
import { Link } from "react-router-dom"


const Content = () => {
  return (
      <>
  <div className="menu-card">
      <img src={roupa1} alt="roupa1" className="h-full rounded-lg
      mb-20 shadow" />
      <div className="center-content">
          <h2 className="text-2xl mb-2">Lightred Woman</h2>
          <p className="mb-2">Elegante, moderno e exclusivo</p>
          <span>25 DAO</span>
          <Link
        to="/"
        className="btn1 mt-12"
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      </Link>
      </div>
  </div>
  <div className="menu-card">
      <img src={roupa2} alt="roupa1" className="h-full rounded-lg
      mb-20 shadow" />
      <div className="center-content">
          <h2 className="text-2xl mb-2">Blackred Law</h2>
          <p className="mb-2">Ultraje e sofistado</p>
          <span>35 DAO</span>
          <Link
        to="/"
        className="btn2 mt-12"
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      </Link>
      </div>
  </div>
  <div className="menu-card">
      <img src={roupa3} alt="roupa1" className="h-full rounded-lg
      mb-20 shadow" />
      <div className="center-content">
          <h2 className="text-2xl mb-2">Night Fall</h2>
          <p className="mb-2">Hipnótico e intenso</p>
          <span>55 DAO</span>
          <Link
        to="/"
        className="btn3"
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      </Link>
      </div>
  </div>
  
  </>
  )
};

export default Content;
