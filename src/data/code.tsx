interface Code {
  code: string;
  language: "solidity" | "javascript";
}

interface CodeData {
  heroCode: Code;
  easyIntegration: Code;
  validation: Code;
}

export const codeBlocks: CodeData = {
  heroCode: {
    language: "solidity",
    code: `
    pragma solidity ^0.8.0;

    interface IMessagePort {
        function send(
            uint256 toChainId,
            address toDapp,
            bytes calldata message,
            bytes calldata params,
        ) external payable returns (bytes32 msgId);
    }

        `,
  },
  easyIntegration: {
    language: "solidity",
    code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;

    import "msgport/interfaces/IMessagePort.sol";

    contract CounterSender {
        address public immutable PORT;

        constructor(address port) {
            PORT = port;
        }

        /**
         * @notice Increases the number on a remote contract.
         * @param params The parameters required to process the request.
         */
        function increaseNumberRemote(bytes calldata params)
            external
            payable
            returns (bytes32 msgId)
        {
            uint256 toChainId = 1;
            address toDapp = 0x1234567890123456789012345678901234567890;
            bytes memory message = abi.encodeWithSignature("increaseNumber()");

            msgId = IMessagePort(PORT).send{value: msg.value}(
                toChainId, toDapp, message, params
            );

            return msgId;
        }
    }
        `,
  },
  validation: {
    language: "solidity",
    code: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.17;

    import "msgport/user/Application.sol";

    contract Counter is Application {
        uint256 public number;

        function increaseNumber() external {
            uint256 fromChainId = _fromChainId();
            address fromDapp = _xmsgSender();
            require(fromChainId == 1);
            require(fromDapp == 0x1234567890123456789012345678901234567890);

            number += 1;
        }
    }

        `,
  },
};
