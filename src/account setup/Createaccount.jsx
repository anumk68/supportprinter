import React from 'react';

import { useNavigate } from 'react-router-dom';

const Createaccount = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4">
      <div className="bg-white rounded-md w-full max-w-[480px] h-[580px] p-8">
        <img src='/hp-logos.png' alt="Logo" className="h-10 w-10 mb-4" />

        <div className="flex justify-between items-center mb-6">
          <h1 className=" font-normal text-2xl md:text-4xl">Create account</h1>
          <div
            onClick={() => navigate('/signin')}
            className="text-[rgb(41,115,168)] md:text-sm text-xs hover:underline cursor-pointer"
          >
            Sign in
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="First name *"
            className="flex-1 border  rounded-xl p-3 text-sm focus:outline-none focus:border-[rgb(41,115,168)] hover:bg-[rgb(232,232,232)] transition w-full"
          />
          <input
            type="text"
            placeholder="Last name *"
            className="flex-1 border  rounded-xl p-3 text-sm focus:outline-none focus:border-[rgb(41,115,168)] hover:bg-[rgb(232,232,232)] transition w-full"
          />
        </div>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address *"
          className="border w-full p-3 rounded-xl mb-4 text-sm focus:outline-none focus:border-[rgb(41,115,168)]"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password *"
          className="borde w-full p-3 rounded-xl mb-4 text-sm focus:outline-none focus:border-[rgb(41,115,168)]"
        />

        <label htmlFor="create_account" className="flex gap-3 items-center mb-4 text-sm">
          <input
            type="checkbox"
            name="create_account"
            id="create_account"
            className="scale-125 font-thin"
          />
          HP may email me with personalized offers, support updates, and event news.
        </label>

        <div className="text-[rgb(163,163,163)] text-sm mb-6">
          Your HP account identity information is used in accordance with the{' '}
          <span
            onClick={() => navigate('/hpprivacystatement')}
            className="text-[rgb(41,115,168)] hover:underline cursor-pointer"
          >
            HP Privacy Statement.
          </span>
        </div>

        <button className="bg-[rgb(0,115,168)] hover:bg-[rgb(0,90,130)] text-white w-full p-3 rounded-xl mb-4 transition">
          Create
        </button>
      </div>
    </div>
  );
};

export default Createaccount;
