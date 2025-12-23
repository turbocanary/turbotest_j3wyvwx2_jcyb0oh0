const crypto = require('crypto');

function anotherInsecurePassword() {
  // Use cryptographically secure random bytes to generate the suffix
  const buf = crypto.randomBytes(4); // 4 bytes = 32 bits
  const suffixInt =
    (buf[0] << 24) >>> 0 ^
    (buf[1] << 16) ^
    (buf[2] << 8) ^
    buf[3];
  const suffix = suffixInt / Math.pow(2, 32);
  var password = "sssAAAA" + suffix;
  return password;
}