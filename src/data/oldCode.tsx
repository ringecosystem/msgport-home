export const menu: {
   title: string;
   description: string;
   code: string;
   language: "solidity" | "javascript";
}[] = [
   {
      title: "Msgport Interface",
      description:
         "This interface provides developers with a generic message passing interface to send arbitrary data between contracts on different blockchain networks.",
      code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    
    interface IMessagePort {
        event MessageSent(
            bytes32 indexed msgId, address fromDapp, uint256 toChainId, address toDapp, bytes message, bytes params
        );
        event MessageRecv(bytes32 indexed msgId, bool result, bytes returnData);
    
        /// @dev Send a cross-chain message over the MessagePort.
        /// @notice Send a cross-chain message over the MessagePort.
        /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
        /// @param toDapp The user application contract address which receive the message.
        /// @param message The calldata which encoded by ABI Encoding.
        /// @param params Extend parameters to adapt to different message protocols.
        /// @return msgId Return the ID of message.
        function send(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params)
            external
            payable
            returns (bytes32 msgId);
    
        /// @notice Get a quote in source native gas, for the amount that send() requires to pay for message delivery.
        ///         It should be noted that not all ports will implement this interface.
        /// @dev If the messaging protocol does not support on-chain fetch fee, then revert with "Unimplemented!".
        /// @param toChainId The message destination chain id. <https://eips.ethereum.org/EIPS/eip-155>
        /// @param fromDapp The user application contract address which send the message.
        /// @param toDapp The user application contract address which receive the message.
        /// @param message The calldata which encoded by ABI Encoding.
        /// @param params Extend parameters to adapt to different message protocols.
        function fee(uint256 toChainId, address fromDapp, address toDapp, bytes calldata message, bytes calldata params)
            external
            view
            returns (uint256);
    }`,
      language: "solidity",
   },
   {
      title: "Deploy ExampleReceiverDapp",
      description:
         "Deploy a receiver contract on the target chain to receive messages. (for example purposes only)",
      code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;
    
    import "https://github.com/ringecosystem/msgport/blob/main/src/user/Application.sol";
    
    contract ExampleReceiverDapp is Application {
        event DappMessageRecv(uint256 fromChainId, address fromDapp, address localPort, bytes message);
    
        // local port address
        address public immutable PORT;
        // remote dapp address
        address public immutable DAPP;
    
        constructor(address port, address dapp) {
            PORT = port;
            DAPP = dapp;
        }
    
        /// @notice You could check the fromDapp address or messagePort address.
        function testReceive(bytes calldata message) external {
            uint256 fromChainId = _fromChainId();
            address fromDapp = _xmsgSender();
            address localPort = _msgPort();
            require(localPort == PORT);
            require(fromDapp == DAPP);
            emit DappMessageRecv(fromChainId, fromDapp, localPort, message);
        }
    }`,
      language: "solidity",
   },
   {
      title: "Encode Calldata",
      description: "Build the remote call data as the message payload.",
      code: `
    import { ethers } from 'ethers';

    const privateKey = process.env.PRIVATE_KEY;
    const providerUrl = <Your RPC provider URL>;
    const receiverDappAddr = <Your ExampleReceiverDapp Address>;
    
    function encodeReceiveCall() {
        const receiverABI = [{
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "message",
                    "type": "bytes"
                }
            ],
            "name": "testReceive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }];
        const testMessage = "0x1234";
        const provider = new ethers.JsonRpcProvider(providerUrl);
        const signer = new ethers.Wallet(privateKey, provider);
        const receiverDapp = new ethers.Contract(receiverDappAddr, receiverABI, signer);
        const callData = receiverDapp.interface.encodeFunctionData('testReceive', [testMessage]);
        console.log(callData);
    }
    
    encodeReceiveCall();`,
      language: "javascript",
   },
   {
      title: "Get Fee And Params From Msgport API",
      description: "Estimate fee and get adaptation params from Msgport API.",
      code: `
    import axios from 'axios';

    async function getFeeParams() {
        const requestBody = {
            "fromChainId": <SourceChainID>,
            "fromAddress": <SenderAddress>,
            "toChainId": <TargetChainID>,
            "toAddress": <ReceiverAddress>,
            "message": <EncodedCallData>,
            "ormp": {
            "refundAddress": <RefundAddress>
            }
        };
        const result = await axios.post("https://api.msgport.xyz/v2/fee_with_options", requestBody);
        const { fee, params } = result.data.data;
        console.log(fee, params);
    }

    await getFeeParams();`,
      language: "javascript",
   },
   {
      title: "Sending Message",
      description:
         "Sending massage via Msgport to dapp on target chain using encoded message data and params provided in previous steps.",
      code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;

    import "https://github.com/ringecosystem/msgport/blob/main/src/interfaces/IMessagePort.sol";
    
    contract ExampleSenderDapp {
        event DappMessageSent(address localPort, bytes message);
    
        // local port address
        address public immutable PORT;
    
        constructor(address port) {
            PORT = port;
        }
    
        function testSend(uint256 toChainId, address toDapp, bytes calldata message, bytes calldata params) external payable{
            IMessagePort(PORT).send{value: msg.value}(toChainId, toDapp, message, params);
            emit DappMessageSent(PORT, message);
        }
    }`,
      language: "solidity",
   },
   {
      title: "XAccount",
      description: "",
      code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    contract ExampleXAccount {
        // XAccountFactory address
        address public factory;
        // PortRegistry address
        address public registry;
    
        constructor(address factory_, address registry_) {
            factory = factory_;
            registry = registry_;
        }
    
        /// @dev The function is utilized to create a xAccount on the target chain.
        function createXAccountOnTargetChain(bytes4 code, uint256 toChainId, bytes calldata params, address recovery)
            public
            payable
        {
            IXAccountFactory(factory).xCreate{value: msg.value}(code, toChainId, params, recovery);
        }
    
        /// @dev The function facilitates the execution of an xCall across a xAccount.
        function crossChainCall(
            bytes4 code,
            uint256 toChainId,
            bytes calldata params,
            address target,
            uint256 value,
            bytes calldata data,
            uint8 operation
        ) public payable {
            bytes memory message =
                abi.encodeWithSelector(ISafeMsgportModule.xExecute.selector, target, value, data, operation);
            address port = IPortRegistry(registry).get(toChainId, code);
            (, address module) = IXAccountFactory(factory).xAccountOf(block.chainid, toChainId, address(this));
            IMessagePort(port).send{value: msg.value}(toChainId, module, message, params);
        }
    }`,
      language: "solidity",
   },
   {
      title: "Order Clearing",
      description: "",
      code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;
    
    contract MsglineMessager is Application, AccessController {
        IMessageLine public immutable msgline;
        struct RemoteMessager {
            uint256 msglineRemoteChainId;
            address messager;
        }
        mapping(address=>bool) public whiteList;
        // app remoteChainId => msgline remote messager
        mapping(uint256=>RemoteMessager) public remoteMessagers;
        // token bridge pair
        // hash(msglineRemoteChainId, localAppAddress) => remoteAppAddress
        mapping(bytes32=>address) public remoteAppReceivers;
        mapping(bytes32=>address) public remoteAppSenders;
        event CallerUnMatched(uint256 srcAppChainId, address srcAppAddress);
        event CallResult(uint256 srcAppChainId, bool result);
        modifier onlyWhiteList() {
            require(whiteList[msg.sender], "msg.sender not in whitelist");
            _;
        }
        modifier onlyMsgline() {
            require(msg.sender == address(msgline), "invalid caller");
            _;
        }
        constructor(address _dao, address _msgline) {
            _initialize(_dao);
            msgline = IMessageLine(_msgline);
        }
        function setRemoteMessager(uint256 _appRemoteChainId, uint256 _msglineRemoteChainId, address _remoteMessager) onlyDao external {
            remoteMessagers[_appRemoteChainId] = RemoteMessager(_msglineRemoteChainId, _remoteMessager);
        }
        function setWhiteList(address _caller, bool _enable) external onlyDao {
            whiteList[_caller] = _enable;
        }
        function registerRemoteReceiver(uint256 _remoteChainId, address _remoteBridge) onlyWhiteList external {
            RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
            require(remoteMessager.messager != address(0), "remote not configured");
            bytes32 key = keccak256(abi.encodePacked(remoteMessager.msglineRemoteChainId, msg.sender));
            remoteAppReceivers[key] = _remoteBridge;
        }
        function registerRemoteSender(uint256 _remoteChainId, address _remoteBridge) onlyWhiteList external {
            RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
            require(remoteMessager.messager != address(0), "remote not configured");
            bytes32 key = keccak256(abi.encodePacked(remoteMessager.msglineRemoteChainId, msg.sender));
            remoteAppSenders[key] = _remoteBridge;
        }
        function sendMessage(uint256 _remoteChainId, bytes memory _message, bytes memory _params) onlyWhiteList external payable {
            RemoteMessager memory remoteMessager = remoteMessagers[_remoteChainId];
            require(remoteMessager.messager != address(0), "remote not configured");
            bytes32 key = keccak256(abi.encodePacked(remoteMessager.msglineRemoteChainId, msg.sender));
            address remoteAppAddress = remoteAppReceivers[key];
            require(remoteAppAddress != address(0), "app pair not registered");
            bytes memory msglinePayload = messagePayload(msg.sender, remoteAppAddress, _message);
            msgline.send{ value: msg.value }(
                remoteMessager.msglineRemoteChainId,
                remoteMessager.messager,
                msglinePayload,
                _params
            );
        }
    }`,
      language: "solidity",
   },
];
