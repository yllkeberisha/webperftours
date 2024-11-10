console.log("Hello from home");

window.addEventListener("load", () => {
    const isDemo = !location.href.includes("-prod");
    if (isDemo){
        const banner = document.querySelector(".demo-banner");
        banner.style.display = "block";
    }
});