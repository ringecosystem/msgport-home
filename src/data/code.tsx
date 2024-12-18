interface Code {
  code: string;
  language: "solidity" | "javascript";
}

interface CodeData {
  heroCode: Code;
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
};
