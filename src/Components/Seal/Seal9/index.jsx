import React, { useEffect } from 'react';

const Seal9 = () => {
  useEffect(() => {
    import('../Seal9/index.css'); // Ensure the path is correct for your project
  }, []);

  return (
    <div className="seal9-stamp">
      <div className="seal9-line"></div>
      <div className="seal9-text">Account Payee Only</div>
      <div className="seal9-line"></div>
    </div>
  );
};

export default Seal9;