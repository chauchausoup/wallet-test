import useChainId from "../../hooks/useChainId";

const ChainId = () => {
	const chainId = useChainId();

	return <p>ChainID: {chainId}</p>;
};

export default ChainId;
