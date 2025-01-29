import React, { useEffect } from 'react';

const Seal7 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal7/index.css'); // Ensure the path is correct for your project
  }, []);

  return (
    <div className="seal7container">
      <div className="seal7head">ORIGINAL SEEN AND VERIFIED</div>
      <div className="seal7bank-title">
        <span style={{ fontWeight: 900 }}>For THE FEDERAL BANK LTD.</span>
      </div>
      <div className="seal7branch-details">
        <p>Assistant Manager</p>
        <p className="seal7branch">{branchName} Branch</p>
      </div>
    </div>
  );
};

export default Seal7;