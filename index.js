const axios = require('axios');

const imageUrl = 'quay.io/spaship/ssr-demo-one:v3';

async function checkImageExists(imageUrl) {
  try {
    const hasProtocol = imageUrl.includes("https") || imageUrl.includes("http");
    if(!hasProtocol){
      console.log(`imageurl doesnot contain any protocol checking with https`);
      imageUrl = "http://"+imageUrl;
    }
    const response = await axios.head(imageUrl);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

checkImageExists(imageUrl).then(exists => {
  console.log(`Image ${imageUrl} exists: ${exists}`);
});




