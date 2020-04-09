importScripts("sw.toolbox.js")
toolbox.precache(['index.html', "style.css", "modal.css", "img/icon.png"])
toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
})