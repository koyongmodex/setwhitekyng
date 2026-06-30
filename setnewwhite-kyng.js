let body = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>
html,body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    overflow:hidden;
    background:#0000;
}

iframe{
    position:fixed;
    top:-10px;
    left:0;
    width:100vw;
    height:calc(100vh + 20px);
    border:none;
    display:block;
}
</style>
</head>
<body>
<iframe src="https://karduscosmos.com/index.php"></iframe>
</body>
</html>
`;

$done({ body });
