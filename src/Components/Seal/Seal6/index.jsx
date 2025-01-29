import React, { useEffect } from 'react';

const Seal6 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal6/index.css'); // Ensure the path matches your project structure
  }, []);

  return (
    <div className="seal6container">
      <div className="seal6bank-title">
        <span style={{ fontWeight: 900 }}>For THE FEDERAL BANK LTD.</span>
      </div>
      <div className="seal6branch-details">
        <p>Branch Head</p>
        <p>{branchName} Branch</p>
      </div>
    </div>
  );
};

export default Seal6;