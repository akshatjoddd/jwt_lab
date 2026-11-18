const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function createToken(user) {
  const payload = { id: user.id, email: user.email };

  return jwt.sign(payload, process.env.JWTSECRET, {
    expiresIn: "1h",
    jwtid: crypto.randomUUID(),
  });
}

module.exports = { createToken };
