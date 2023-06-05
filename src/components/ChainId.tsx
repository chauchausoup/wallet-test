import React from 'react';
import useChainId from '../lib/hooks/useChainId';

const ChainId: React.FC = () => {
  const chainId = useChainId();
  return (
    <p>
      <span className="text-slate-500">ChainID: </span> {chainId}
    </p>
  );
};

export default ChainId;
