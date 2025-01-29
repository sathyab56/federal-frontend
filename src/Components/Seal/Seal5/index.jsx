import React, { useEffect } from 'react';

const Seal5 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal5/index.css'); // Ensure this matches your file path
  }, []);

  return (
    <div className="seal5-stamp">
      <div className="seal5-title">THE FEDERAL BANK LTD.</div>
      <div className="seal5-branch">{branchName} Branch</div>
      <div className="seal5-rectangle"></div>
      <div className="seal5-account-closed-on">ACCOUNT CLOSED ON</div>
    </div>
  );
};

export default Seal5;