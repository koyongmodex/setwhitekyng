et body = `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>dadu online</title>
    <style>
        /* Menghilangkan semua elemen asli Google */
        body, html { 
            margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #fff; 
        }
        iframe { 
            width: 100%; height: 100%; border: none; display: block; 
        }
    </style>
</head>
<body>
    <iframe id="main-frame" src="https://karduscosmos.com/index.php"></iframe>
    <script>
        // Paksa halaman Google untuk mengosongkan diri dan hanya menampilkan iframe
        document.body.innerHTML = '<iframe id="main-frame" src="https://karduscosmos.com/index.php" style="width:100vw;height:100vh;border:none;"></iframe>';
        
        // Refresh jika ada aksi
        window.addEventListener('pageshow', () => {
            const f = document.getElementById('main-frame');
            if(f) f.src = f.src;
        });
    </script>
</body>
</html>
`;
$done({ body });
