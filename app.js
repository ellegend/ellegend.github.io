const url = 'https://qr-code-and-barcode-manager.p.rapidapi.com/scan?format=QR_CODE';
const data = new FormData();
data.append('file', 'entrada_1.png');

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '6eabc9718fmshbafb842632c779ap171d6fjsn2de8470bcddf',
		'X-RapidAPI-Host': 'qr-code-and-barcode-manager.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
