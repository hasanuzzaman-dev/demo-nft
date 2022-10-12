// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

     constructor() ERC721("CPL NFT", "CNFT"){

     }

     function mintNFT(address recipient, string memory _tokenURI) 
        public onlyOwner returns(uint256){
            _tokenId.increment();

            uint256 newItemId = _tokenId.current();

            _mint(recipient, newItemId);
            _setTokenURI(newItemId, _tokenURI);

            return newItemId;
     }

}

