import aesjs from "aes-js";

const aesCBC = new aesjs.ModeOfOperation.cbc(
  process.env.KEY,
  process.env.VECTOR
);
// // var text = 'TextMustBe16Byte';
// // var text = 'TextMustBe16Byte';

// var encryptedBytes = aesCBC.encrypt(textBytes);

function decryptObjectValues(obj) {
  return Object.toEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      aesCBC.encrypt(aesjs.utils.utf8.toBytes(value)),
    ])
  );
}

// console.log(decryptObjectValues(values))
export default decryptObjectValues;
