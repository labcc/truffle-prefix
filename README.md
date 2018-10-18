# truffle-prefix

Prefix `0x00707269` to the beginning of compiled bytecode.

## Options

### Prefix `0x00707269` at `truffle migrate` time through truffle.js

Example: https://github.com/labcc/truffle-prefix/blob/master/pet-shop/truffle.js#L46

* Pros: The `0x00707269` prefix never existed before deployment. Less error-prone.
* Cons: ???


### Prefix `0x00707269` at `truffle migrate` time through migration scripts.

Example: https://github.com/labcc/truffle-prefix/blob/master/pet-shop/migrations/2_deploy_contracts.js#L4

* Pros: The `0x00707269` prefix never existed before deployment. Less error-prone.
* Cons: ???

### Use the external compile feature in Truffle v5.0.0 (beta)

Example: https://github.com/labcc/truffle-prefix/blob/master/pet-shop/truffle.js#L11

Problem: this could be called before the solc compiler, so in order
for it to work reliably, we have to wrap solc and prevent the
invocation of the default compiler.

### Modify the solc compiler.

* Pros: The bytecodes never existed without 0x00707269, least
  error-prone for downstream pipelines.
* Cons: Need to figure out a way in truffle to specify a customized
  compiler (we might need to do this anyways).

References:

1.  Compiler Input and Output JSON Description (https://solidity.readthedocs.io/en/develop/using-the-compiler.html#compiler-input-and-output-json-description)

### Prefix `0x00707269` at `truffle compile` time.

See https://github.com/labcc/truffle-prefix-truffle/blob/next/packages/truffle-compile/index.js#L192

* Implementation: https://github.com/labcc/truffle-prefix-truffle/commit/bafa7d476e103717f6f254fe189f795ea6961970

* Pros: The bytecodes never existed without 0x00707269, least
  error-prone for downstream pipelines. Easy to do.
* Cons: The sourceMap field in the json file may not be accurate.

### Prefix `0x00707269` at `truffle build` time.

* Pros: The build process supports customized modifications by design:
  https://truffleframework.com/docs/truffle/advanced/build-processes
* Cons: The build process is deprecated: "Alert: This command is
  deprecated. Please use third-party build tools like webpack or
  grunt, or see our Truffle Boxes for an example."

## Open Questions

1. How to correct the jump destinations now that the bytecodes are
   shifted? Answer: no need, it will be stripped.
