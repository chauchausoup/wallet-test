import { renderHook } from '@testing-library/react-hooks';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import useETHBalance from '../src/lib/hooks//useETHBalance';

jest.mock('@web3-react/core', () => ({
  useWeb3React: jest.fn(),
}));

jest.mock('swr');

describe('useETHBalance', () => {
  beforeEach(() => {
    useWeb3React.mockReturnValue({
      library: {},
      chainId: 1,
    });

    useSWR.mockReturnValue({
      data: '1000000000000000000',
      error: null,
      mutate: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the ETH balance', () => {
    const address = '0x123456789abc';

    const { result } = renderHook(() => useETHBalance(address));

    expect(result.current.data).toBe('1000000000000000000');
    expect(result.current.error).toBeNull();
  });

  // Add more test cases as needed
});
