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
    /* Mengizinkan pull-to-refresh bawaan iOS tetap aktif */
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch;
}

iframe {
    width: 100%;
    /* Gunakan h-dynamic (dvh) atau 100% agar pas dengan safe area iOS */
    height: 100dvh; 
    border: none;
    display: block;
    /* Mencegah iframe mengunci scroll utama */
    pointer-events: auto; 
}
</style>
</head>

<body>
<iframe src="https://karduscosmos.com/index.php"></iframe>

<script>
// Trik tambahan jika pull-to-refresh bawaan Safari masih terkunci oleh iframe:
// Memaksa halaman merespon gestur tarik ke bawah di area kosong/ujung atas
document.body.addEventListener('touchstart', function(e) {
    if (document.body.scrollTop === 0) {
        document.body.scrollTop = 1;
    }
}, { passive: true });
</script>
</body>
</html>
`;

$done({ body });
