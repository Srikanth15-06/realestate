import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { context } from "../Context/Context";

const Listing = () => {
  const { whatWeOfferData} = useContext(context);

  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  // Total number of pages
  const totalPages = Math.ceil(whatWeOfferData.length / cardsPerPage);

  // Starting index
  const startIndex = (currentPage - 1) * cardsPerPage;

  // Display only 6 cards
  const currentcard = whatWeOfferData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div>
      <Header />

      {/* Listings */}
      <div className="flex flex-col justify-center items-center pb-20">
        <div className="text-[gold]">
          ------WHAT WE OFFER------
        </div>

        <div className="font-bold text-[1.8em]">
          Exclusive Offer For You
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 pt-5">
          {currentcard.map((plot) => (
            <div
              key={plot.plot_name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="h-50 w-80 object-cover"
                src={plot.plot_image}
                alt={plot.plot_name}
              />

              <div className="p-3">
                <div>
                  <span className="font-bold">
                    ₹ {plot.plot_price_per_sqft}
                  </span>{" "}
                  per sqft
                </div>

                <div>
                  <span className="font-bold">
                    🔻 {plot.plot_name}
                  </span>
                </div>

                <div>
                  <span className="font-bold">
                    📍 {plot.plot_address}
                  </span>
                </div>

                <div>
                  <span className="font-bold">
                    📐 {plot.plot_size}
                  </span>{" "}
                  sqft
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-8">

          {/* First Page */}
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            ←
          </button>

          {/* Previous Page */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {/* Previous Page Number */}
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="h-10 w-10 rounded bg-gray-200 hover:bg-gray-300"
            >
              {currentPage - 1}
            </button>
          )}

          {/* Current Page */}
          <span className="h-10 w-10 flex justify-center items-center rounded bg-yellow-500 text-white font-bold">
            {currentPage}
          </span>

          {/* Next Page Number */}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="h-10 w-10 rounded bg-gray-200 hover:bg-gray-300"
            >
              {currentPage + 1}
            </button>
          )}

          {/* Next Page */}
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>

          {/* Last Page */}
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Listing;
