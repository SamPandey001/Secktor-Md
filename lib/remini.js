const FormData = require("form-data");
const Jimp = require("jimp");

async function remini(imageBuffer, operation) {
  return new Promise(async (resolve, reject) => {
    // List of allowed operations
    const allowedOperations = ["enhance", "recolor", "dehaze"];
    
    // Validate the operation type
    if (!allowedOperations.includes(operation)) {
      operation = allowedOperations[0]; // Default to "enhance" if invalid
    }

    const apiUrl = "https://inferenceengine.vyro.ai/" + operation;

    // Create a new FormData instance
    const formData = new FormData();
    formData.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=utf-8",
    });
    formData.append("image", Buffer.from(imageBuffer), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });

    // Submit the request
    formData.submit(
      {
        url: apiUrl,
        host: "inferenceengine.vyro.ai",
        path: "/" + operation,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      (error, response) => {
        if (error) {
          reject(error);
          return;
        }

        const responseChunks = [];
        response
          .on("data", (chunk) => {
            responseChunks.push(chunk);
          })
          .on("end", () => {
            resolve(Buffer.concat(responseChunks));
          })
          .on("error", (responseError) => {
            reject(responseError);
          });
      }
    );
  });
}

module.exports.remini = remini;
