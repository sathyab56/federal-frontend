import React, { useEffect } from 'react';

const Seal3 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal3/index.css'); // Adjust the path to the correct CSS file
  }, []);

  return (
    <div className="seal3-stamp">
      <div className="seal3-title">THE FEDERAL BANK LTD.</div>
      <div className="seal3-branch">{branchName} Branch</div>
      <div className="seal3-rectangle"></div>
      <div className="seal3-transfer">TRANSFER</div>
    </div>
  );
};

export default Seal3;