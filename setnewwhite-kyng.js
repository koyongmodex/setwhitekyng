let body = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f7f7f7;
    font-family: -apple-system, sans-serif;
}

/* Indikator Loading saat ditarik */
#ptr-indicator {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    font-size: 14px;
    color: #666;
    transition: transform 0.1s ease;
    z-index: 999;
    box-shadow: inset 0 -1px 3px rgba(0,0,0,0.05);
}

#container {
    width: 100%;
    height: 100%;
    transition: transform 0.2s cubic-bezier(0.1, 0, 0.3, 1);
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}
</style>
</head>

<body>

<div id="ptr-indicator">Tarik untuk memuat ulang...</div>

<div id="container">
    <iframe id="my-iframe" src="https://karduscosmos.com/index.php"></iframe>
</div>

<script>
const container = document.getElementById('container');
const indicator = document.getElementById('ptr-indicator');
const iframe = document.getElementById('my-iframe');

let startY = 0;
let currentY = 0;
let isDragging = false;

// Tangkap gestur sentuhan di area paling atas
window.addEventListener('touchstart', (e) => {
    // Hanya aktif jika menyentuh bagian atas layar
    if (e.touches[0].clientY < 200) { 
        startY = e.touches[0].clientY;
        isDragging = true;
    }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    currentY = e.touches[0].clientY;
    let diff = currentY - startY;
    
    // Hanya respon jika ditarik ke bawah (kebawah = positif)
    if (diff > 0) {
        // Efek peredam (resistance) agar tarikan terasa berat alami
        let translate = Math.pow(diff, 0.85); 
        
        if (translate > 80) translate = 80; // Batas maksimal tarikan
        
        container.style.transform = \`translateY(\${translate}px)\`;
        indicator.style.transform = \`translateY(\${translate}px)\`;
        
        if (translate >= 60) {
            indicator.innerText = "Lepaskan untuk memuat ulang...";
        } else {
            indicator.innerText = "Tarik untuk memuat ulang...";
        }
    }
}, { passive: true });

window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    
    let diff = currentY - startY;
    
    // Jika tarikan melewati batas 60px, refresh iframe-nya
    if (diff > 60) {
        indicator.innerText = "Memuat ulang...";
        // Cara me-refresh iframe secara paksa:
        iframe.src = iframe.src; 
    }
    
    // Kembalikan posisi ke semula
    setTimeout(() => {
        container.style.transform = 'translateY(0)';
        indicator.style.transform = 'translateY(0)';
    }, 300);
    
    startY = 0;
    currentY = 0;
});
</script>

</body>
</html>
`;

$done({ body });
