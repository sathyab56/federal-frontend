import React, { useEffect } from 'react';

const Seal1 = ({ branchName = "Patlur Branch" }) => {
  useEffect(() => {
    import('../Seal1/index.css'); // Adjust the path as per your project structure
  }, []);

  return (
    <div className="seal1-stamp">
      <div className="seal1-title">THE FEDERAL BANK LTD.</div>
      <div className="seal1-branch">{branchName} Branch</div>
      <div className="seal1-rectangle"></div>
      <div className="seal1-cash-received">CASH RECEIVED</div>
    </div>
  );
};

export default Seal1;
