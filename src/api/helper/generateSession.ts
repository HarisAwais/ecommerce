const crypto = require("crypto");

export const generateSession = () => {
  // Generating Random Session String
  const session = crypto.randomBytes(24).toString("base64");
  return session;
};

