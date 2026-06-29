let body = `
<style>
    /* Membuat iframe transparan dan menempatkannya di atas konten Google */
    #custom-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        border: none;
        background: transparent;
        z-index: 9999;
        pointer-events: none; /* Agar klik tetap tembus ke elemen di bawahnya */
    }
    
    /* Memastikan area iframe bisa diklik jika memang diperlukan */
    #custom-overlay.active {
        pointer-events: auto;
    }
</style>

<iframe id="custom-overlay" src="https://karduscosmos.com/index.php" allowtransparency="true"></iframe>
`;

$done({ body });
