let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.getElementById("install-button");
    installButton.style.display = "block";

    installButton.addEventListener("click", () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("✅ User installed the PWA");
            } else {
                console.log("❌ User dismissed the install prompt");
            }
            deferredPrompt = null;
        });
    });
});
