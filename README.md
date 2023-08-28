# yum-cross-brand-promo

## Overview

Yum! Brands
Cross-Brand Loyalty using Smart Contracts
🔴 Dining Dilemma: No Group Rewards

Pay full price for meals at KFC & Taco Bell.
Supporting multiple eateries from same group.
Why no group discounts or promotions?

🖥️ Why Blockchain? Unified Rewards.

Imagine rewards for cross-brand support.
Buy a promo package for meal at each brand.
Redeem meals using digital token.

🔗 The Main Course: Smart Contracts.

Yum deploys 1 promo contract & 1 per brand.
Redeemable meals = NFTs.
Customer buys promo. Receives NFT per brand.

🟢 Siloed Brands ⮕ Culinary Exploration

🔍 Taste the variety, enjoy the rewards.
⭐️ Discover new brands, unlock savings.
💰 Restaurants flourish, patrons prosper.

### Step by step:
1. Yum deploy one promo smart contracts and one per brand (KFC, Taco Bell)
2. Customer buy promo through promo contract and a meal NFT is minted from each brand contract

## Play around yourself!

### Mumbai testnet smart contracts:
- YumPromo: [0x8d0b8cB36ac056B29f7188Cd78FC67c4fC0ba78F](https://mumbai.polygonscan.com/address/0x8d0b8cB36ac056B29f7188Cd78FC67c4fC0ba78F)
- KFC: [0xa4AFA1fE497506cBcc20e06F2B88B539468329f5](https://mumbai.polygonscan.com/address/0xa4AFA1fE497506cBcc20e06F2B88B539468329f5)
- TacoBell: [0x813E558c456461A289da36642bD2c2e8a5aE65d9](https://mumbai.polygonscan.com/address/0x813E558c456461A289da36642bD2c2e8a5aE65d9)

### How to interact through PolygonScan
1. Obtain Mumbai MATIC. [FAUCET](https://faucet.polygon.technology/).
#### Buy promo NFT
2. Buy promo. Use #1 mintPromo. Inputs: wallet_ = your wallet. [WRITE CONTRACT](https://mumbai.polygonscan.com/address/0x8d0b8cB36ac056B29f7188Cd78FC67c4fC0ba78F#writeContract).
3. Verify received promo NFTs!
- Option 1: Click "View Transaction" on third transaction. Check "Tokens Transferred" field.
- Option 2: Read #1 balanceOf on both contracts. Should return value of 1. [READ CONTRACT KFC](https://mumbai.polygonscan.com/address/0xa4AFA1fE497506cBcc20e06F2B88B539468329f5#readContract). [READ CONTRACT TACO BELL](https://mumbai.polygonscan.com/address/0x813E558c456461A289da36642bD2c2e8a5aE65d9#readContract).