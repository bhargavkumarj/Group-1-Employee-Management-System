// components/CompanyDetails.js
import React from 'react';
// import '../styles/CompanyDetails.css';

const CompanyDetails = () => {
  const scrollToCompanyDetails = () => {
    const element = document.getElementById('company-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1>Other Content or Components</h1>

      {/* Link to scroll to the company details */}
      <div className="section">
        <button onClick={scrollToCompanyDetails}>Go to Company Details</button>
      </div>

      <div id="company-details" className="company-details-container">
        <h1>Company Details</h1>

        <div className="section">
          <h2>General Information</h2>
          {/* ... */}
        </div>

        <div className="section">
          <h2>Contact Information</h2>
          {/* ... */}
        </div>

        {/* Other Sections... */}
      </div>
    </div>
  );
};

export default CompanyDetails;
