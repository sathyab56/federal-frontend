import React, { useEffect } from 'react';

const Seal4 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal4/index.css'); // Ensure this path matches your file structure
  }, []);

  return (
    <div className="seal4-stamp">
      <div className="seal4-title">THE FEDERAL BANK LTD.</div>
      <div className="seal4-branch">{branchName} Branch</div>
      <div className="seal4-rectangle"></div>
      <div className="seal4-cts-clearing">CTS CLEARING</div>
    </div>
  );
};

export default Seal4;