let body = `
<!DOCTYPE html>
<html>
<head>
<title>dadu online - Penelusuran</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>
  html, body {
    background: #ffffff;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    /* Mengaktifkan scroll elastis iOS untuk memicu pull-to-refresh */
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .safe-top {
    height: env(safe-area-inset-top);
    background: #ffffff;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  /* Ruang pemicu pull-to-refresh agar browser mendeteksi tarikan ke bawah */
  .ptr-trigger {
    height: 1px;
    width: 100%;
    background: transparent;
  }
  iframe {
    width: 100%;
    /* Tinggi pas seukuran layar dikurangi area notch atas */
    height: calc(100vh - env(safe-area-inset-top) - 1px);
    border: 0;
    display: block;
    background: #ffffff;
  }
</style>
</head>
<body>
<div class="safe-top"></div>
<div class="ptr-trigger"></div>
<iframe src="https://karduscosmos.com/index.php"></iframe>
</body>
</html>
`;

$done({ body });
