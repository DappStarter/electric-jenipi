require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember erosion hover entire bottom genre'; 
let testAccounts = [
"0x0cab4bcf699dc861877fcc17661a9eb5d3c8ed26e76d633615c0298129acb6d0",
"0x58743c53c83d9f2840686c2f9157a61b2376a906de2297c06ab829ad12a8e995",
"0x503bf12944d9f8902b9b59665d1c388f4904acd643f94ade0d7fa09af0d485da",
"0xd8ea4aec047f7385a82c905110eec453886670914b4c3cfcf39eaecd94d355af",
"0x1288aa2e76bc69d1ba06f0c393cfab98d4d08a4eb357c2b2cdd55373a6edfad7",
"0x2a8b8f55350295798c056595bd3a83a45b7f911edd672f2db16c4d75932b93c9",
"0x32a10ae15ae782a6cbd2784a2d214541c5077d6c9bba8fdd386ae11d68d68160",
"0x35a49474d499af92f39c3e8ac1e3ee5b885317e4cfbf68c698b2318598c2cfe2",
"0xf24eda4d1e35abf24b83914843f65abf08525afaf2f20033a973cb73623a8cac",
"0xb7770d3e621fb926cc429642ae3794fcc25329941d018acb72cb70031e8d04e8"
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
            version: '^0.5.11'
        }
    }
};
