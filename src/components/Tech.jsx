import React, { useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const ITEMS_PER_PAGE = 10; // Number of items to show per page

const Tech = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes of the items to display on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleTechnologies = technologies.slice(startIndex, endIndex);

  const totalPages = Math.ceil(technologies.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechnologies.map((technology) => (
          <div className="w-28 h-28 key={technology.name}">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: currentPage === page ? '#b91c1c' : '#E5E7EB',
              color: currentPage === page ? 'white' : 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0.25rem',
            }}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
