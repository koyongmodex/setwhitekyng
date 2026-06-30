et body = `
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
    background:transparent;
}

iframe{
    position:fixed;
    inset:0;
    width:100%;
    height:100%;
    border:0;
}
</style>
</head>
<body>
<iframe src="https://karduscosmos.com/index.php"></iframe>
</body>
</html>
`;

$done({ body });
