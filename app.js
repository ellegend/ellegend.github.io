const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('imageBase64', '<REQUIRED>');

const options = {
  method: 'POST',
  url: 'https://mrz-scanner.p.rapidapi.com/ScanMRZ',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '6eabc9718fmshbafb842632c779ap171d6fjsn2de8470bcddf',
    'X-RapidAPI-Host': 'mrz-scanner.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
