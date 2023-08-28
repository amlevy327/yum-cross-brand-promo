// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IRestaurant.sol";

contract YumPromo {
  mapping(address => bool) _promoMinted;

  address[] public restaurantAddresses; // deployed restaurant contract address

  constructor(
    address[] memory restaurantAddresses_
  ) {
    restaurantAddresses = restaurantAddresses_;
  }

    /**
  ////////////////////////////////////////////////////
  // External Functions 
  ///////////////////////////////////////////////////
  */

  // Mint promo NFT
  // Called by customer
  function mintPromo(address wallet_) external {
    require(_promoMinted[wallet_] == false, 'PROMO_ALREADY_MINTED');
    for (uint256 i = 0; i < restaurantAddresses.length; i++) {
      IRestaurant(restaurantAddresses[i]).mintPromo(wallet_);
    }
  }

  /**
  ////////////////////////////////////////////////////
  // Internal Functions 
  ///////////////////////////////////////////////////
  */

  /**
  ////////////////////////////////////////////////////
  // View only functions
  ///////////////////////////////////////////////////
  */

  function promoMinted(address wallet) public view returns (bool) {
    return _promoMinted[wallet];
  }
}