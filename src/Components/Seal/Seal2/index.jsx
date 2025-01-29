import React, { useEffect } from 'react';

const Seal2 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal2/index.css'); // Adjust the path to your CSS file
  }, []);

  return (
    <div className="seal2-stamp">
      <div className="seal2-title">THE FEDERAL BANK LTD.</div>
      <div className="seal2-branch">{branchName} Branch</div>
      <div className="seal2-rectangle"></div>
      <div className="seal2-cash-paid">CASH PAID</div>
    </div>
  );
};

export default Seal2;