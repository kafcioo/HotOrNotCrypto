import web3 from './web3';
import contract from './build/HotOrNotCrypto.json';

const instance = new web3.eth.Contract(
  JSON.parse(contract.interface),
  '0xce56a1eb5aa25d0ac77989c57773c8de3da2bd6d'
);
export default instance;
// address of good contract 0xbdd312aa8ab364bb44811b049fbc1aec8b306fa9
