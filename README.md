# truffle-prefix

Prefix `0x5b5b5b5b` (`JUMPDEST`*4) to the beginning of compiled
bytecode.

## Options

1. Modify the solc compiler.

   * Pros: The bytecodes never existed without 0x5b5b5b5b, least
     error-prone for downstream pipelines.
   * Cons: Need to figure out a way in truffle to specify a customized compiler (we might need to do this anyways).

2. Prefix `0x5b5b5b5b` at `truffle compile` time. See https://github.com/labcc/truffle-prefix-truffle/blob/next/packages/truffle-compile/index.js#L192

   * Pros: The bytecodes never existed without 0x5b5b5b5b, least
     error-prone for downstream pipelines. Easy to do.
   * Cons: The sourceMap field in the json file may not be accurate.

3. Prefix `0x5b5b5b5b` at `truffle build` time.

   * Pros: The build process supports customized modifications by design: https://truffleframework.com/docs/truffle/advanced/build-processes
   * Cons: The build process is deprecated: "Alert: This command is
     deprecated. Please use third-party build tools like webpack or
     grunt, or see our Truffle Boxes for an example."

4. Prefix `0x5b5b5b5b` at `truffle migration` (i.e. contract deployment) time.

    * Pros: The `0x5b5b5b5b` prefix never existed before deployment. Less error-prone.
    * Cons: ???

## Decision

Will try 1, 2 and 4.


## Open Questions

1. How to correct the jump destinations now that the bytecodes are
   shifted?
