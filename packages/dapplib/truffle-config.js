require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind concert grace basket force spot'; 
let testAccounts = [
"0xf1c606b28499c5f94f8035afc37b07b1b8e9b574334c64f6be3ef4360f77cef2",
"0x6567e393d5475da12fb5be7637b07aae163466addf711bc5596a9ceca69bea67",
"0x52eb68272425afba38a3a2f3b2f99cd88ca89743d5bd74c8b3bf2c76ca499860",
"0x0463e6b8b783b0783b1bab2c59201a3b7af9cca0a90b826e1a47b3a8aef49d13",
"0x688d3f2d618b890692e6eaedd262b4ab37becc2a1330430030bf4929f82c7897",
"0xee6d1e20ae9fe49e88ff63a45f39f8542e70d0a88531221d7d75fe5f0defbb65",
"0x73ab96f076a325ad1d0aea8700dda08d16d990b14d60632adcfc47736452fe4e",
"0xf7203306ed34b939e4c8fd1357652c93216328b7c4644ba022cb6823fed86c1e",
"0x4779d8e44fd1571e6f869cfa662caabab526e38bd2005a0aec4378286801362c",
"0x4735170ff5e52a05e1f31f4ed074abd6e0d1bf0ce61d9642b81fd0f98edcdd02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

