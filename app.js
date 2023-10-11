// Reemplaza con la configuración de Firebase para tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyDt5SxVGtMFAabwGsGgPrMGMxgEqy8hugI",
    authDomain: "genesistest-a7306.firebaseapp.com",
    projectId: "genesistest-a7306",
    storageBucket: "genesistest-a7306.appspot.com",
    messagingSenderId: "157072279225",
    appId: "1:157072279225:web:157a0a8895043c8e2afd68",
    measurementId: "G-NMRK6EZ6WC"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Configura el escáner de QR
const scanButton = document.getElementById("scanButton");

scanButton.addEventListener("click", () => {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        const scannerOptions = { video: true };
        navigator.mediaDevices
            .getUserMedia(scannerOptions)
            .then(handleSuccess)
            .catch(handleError);
    } else {
        alert('El escáner de QR no es compatible con este navegador.');
    }
});

function handleSuccess(stream) {
    const video = document.createElement('video');
    document.body.appendChild(video);

    video.srcObject = stream;
    video.play();

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.style.display = 'none';
    document.body.appendChild(canvas);

    const scanInterval = setInterval(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            clearInterval(scanInterval);
            handleQRCode(code.data);
        }
    }, 100);
}

function handleError(error) {
    console.error('Error al acceder a la cámara:', error);
}

function handleQRCode(qrData) {
    // Realiza una petición a Firebase para validar el código QR
    const qrRef = database.ref('qr_codes/' + qrData);

    qrRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
            alert('Código QR válido: ' + qrData);
        } else {
            alert('Código QR no válido: ' + qrData);
        }
        // Cierra la cámara después de escanear
        document.body.innerHTML = '';
    });
}
