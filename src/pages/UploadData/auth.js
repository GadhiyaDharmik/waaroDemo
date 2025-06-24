const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

const authenticateGoogle = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "YOUR_OAUTH_JSON_FILE.json", // 🔹 Replace with your JSON file
    scopes: SCOPES,
  });

  const authClient = await auth.getClient();
  return google.drive({ version: "v3", auth: authClient });
};

module.exports = authenticateGoogle;
