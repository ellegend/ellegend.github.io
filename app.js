document.addEventListener('DOMContentLoaded', () => {
    const scanButton = document.getElementById('scanButton');
    const scanResult = document.getElementById('scanResult');

    scanButton.addEventListener('click', async () => {
        const url = 'https://mrz-scanner.p.rapidapi.com/ScanMRZ';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '6eabc9718fmshbafb842632c779ap171d6fjsn2de8470bcddf',
                'X-RapidAPI-Host': 'mrz-scanner.p.rapidapi.com'
            },
            body: new URLSearchParams({
                imageBase64: '<BASE64_IMAGE_DATA>' // Reemplaza con datos de imagen válidos
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            scanResult.innerText = result;
        } catch (error) {
            console.error(error);
            scanResult.innerText = 'Error al escanear MRZ';
        }
    });
});
