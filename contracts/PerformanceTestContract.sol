// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PerformanceTestContract {
    function performComputations(uint256 iterations) public pure returns (uint256) {
        uint256 result = 0;
        for (uint256 i = 0; i < iterations; i++) {
            // Perform some repetitive computations
            result = result + i;
        }
        return result;
    }
}
