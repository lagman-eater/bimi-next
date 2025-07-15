"use client";

import { useState } from "react";

export default function Contacts({ messages }: { messages: any }) {
  const [showModal, setShowModal] = useState(false);
  const data = messages.Contacts;

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <section className="add-card w-full px-4 sm:px-10 py-10 font-pt-sans">
      {/* Main Title */}
      <h1 className="text-[36px] font-bold font-[Ubuntu] leading-[62px] text-left text-[#1c41b0] border-b border-[#1c41b0] w-[90%] mb-10">
        {data.Title}
      </h1>

      {/* Subtitle */}
      <h3 className="text-[#1C41B0] my-[60px] text-[36px] font-bold font-[PT_Sans]">
        {data.SubTitle}
      </h3>

      {/* Address */}
      <span className="text-[#333] font-bold font-[PT_Sans] mb-[30px] block text-[16px]">
        📍 {data.Address}
      </span>

      {/* Main Map */}
      <iframe
        src={data.MainMapURL}
        className="w-full h-[50vh] mb-16 rounded border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Partners Section */}
      <div
        className="partner-section bg-[#f3f6ff] border border-[#d0d0ff] rounded-xl shadow-lg p-6 mt-10 cursor-pointer"
        onClick={handleModalToggle}
      >
        <h3 className="text-[#1C41B0] text-[36px] font-bold font-[PT_Sans] mb-4">
          {data.PartnersTitle}
        </h3>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          {["TS", "AP", "KARNATAKA"].map((state) => (
            <div
              key={state}
              className="text-[#1C41B0] font-[PT_Sans] font-bold text-[24px] underline cursor-pointer transition-colors hover:text-[#122b80]"
            >
              {state}
            </div>
          ))}
        </div>

        {/* Partner Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="address-card bg-white rounded-lg p-4 w-full sm:w-[300px] shadow-md">
            <p className="mb-3 font-bold text-[#333] font-[PT_Sans]">
              📍1726, Muddinapalya Circle, Bangalore, 560091
              <br />
              Contact: <a href="tel:9036654349">9036654349</a>
            </p>
            <iframe
              src={data.Partner1Map}
              className="w-full h-[250px] rounded border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="address-card bg-white rounded-lg p-4 w-full sm:w-[300px] shadow-md">
            <p className="mb-3 font-bold text-[#333] font-[PT_Sans]">
              📍Vanasthalipuram, Hyderabad 500070
              <br />
              Contact: <a href="tel:9036654348">9036654348</a>
            </p>
            <iframe
              src={data.Partner2Map}
              className="w-full h-[250px] rounded border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4"
          onClick={handleModalToggle}
        >
          <div
            className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-[90%] max-w-[600px] font-[PT_Sans] relative overflow-y-auto max-h-[80vh] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <span
              className="absolute top-[12px] right-[16px] text-[28px] text-[#aaa] cursor-pointer hover:text-black"
              onClick={handleModalToggle}
            >
              &times;
            </span>

            {/* Title */}
            <h2 className="text-[24px] font-bold text-[#1C41B0] mb-1">
              {data.Modal.Title1}
            </h2>
            <h2 className="text-[24px] font-bold text-[#1C41B0] mb-4">
              {data.Modal.Title2}
            </h2>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[1, 3, 4, 5, 6, 2].map((n) => (
                <img
                  key={n}
                  src={`/images/partners${n}.jpg`}
                  alt={`Partner ${n}`}
                  className="w-full h-auto rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>

            {/* Text content */}
            <p className="text-[#444] leading-relaxed mb-4 text-base">
              {data.Modal.Text1}
            </p>
            <p className="text-[#444] leading-relaxed text-base">{data.Modal.Text2}</p>
          </div>
        </div>
      )}
    </section>
  );
}
