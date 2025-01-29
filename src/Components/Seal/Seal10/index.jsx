import React, { useEffect } from 'react';

const Seal10 = () => {
  useEffect(() => {
    import('../Seal10/index.css'); // Ensure the path is correct for your project
  }, []);

  return (
    <div className="seal10-stamp">
      <div className="seal10-text">Valid for 3 months only</div>
    </div>
  );
};

export default Seal10;