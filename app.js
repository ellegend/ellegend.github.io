document.addEventListener('DOMContentLoaded', async () => {
    const scanButton = document.getElementById('scanButton');
    const resultContainer = document.getElementById('resultContainer');

    scanButton.addEventListener('click', async () => {
        const url = 'https://qr-code-lookup-api.p.rapidapi.com/%7BPATH%7D';
        const options = { method: 'GET' };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            resultContainer.innerText = result;
        } catch (error) {
            console.error(error);
            resultContainer.innerText = 'Error al escanear QR';
        }
    });
});
