// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PerformanceTestContract {
  uint256 public computationResult;

    function performComputations(uint256 iterations) public {
        uint256 result = 0;
        for (uint256 i = 0; i < iterations; i++) {
            // Perform some repetitive computations
            result = result + i;
        }
        computationResult = result;
    }

    function getComputationResult() public view returns(uint256) {
        return computationResult;
    }
}
