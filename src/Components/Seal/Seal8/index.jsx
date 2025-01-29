import React, { useEffect } from 'react';

const Seal8 = () => {
  useEffect(() => {
    import('../Seal8/index.css'); // Ensure the path is correct for your project
  }, []);

  return (
    <div className="seal8-stamp">
      <div className="seal8-text">REGISTERED WITH AD</div>
    </div>
  );
};

export default Seal8;