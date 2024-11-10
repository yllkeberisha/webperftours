document.addEventListener("DOMContentLoaded", function () {
    if (location.href.includes("showNewsletterSignup")) {
        const div = document.createElement("div");
        div.id = "newsletter"
        div.style = "position: absolute; left: 10px; top: 10px; bottom: 10px; right: 10px; background: #fafafa; border: 1px solid #eee; padding: 10px; border-radius: 4px; box-shadow: 0px 0px 5px #333";
        let fontSize = document.body.clientWidth > 500 ? 75 : 50
        div.innerHTML = '<h1 style="text-align: center; font-size: ' + fontSize + 'px; line-height: ' + (fontSize * 1.75) + 'px;">Sign up for our newsletter</h1>' +
            '<div style="margin-top: 40px"><label>Email</label><br/><input style="margin-top: 4px; margin-bottom: 10px; padding: 6px; border-radius: 4px;" type="email"/><br/><button onClick="delay(30);document.querySelector(\'#newsletter\').remove()" style="background: #044262; color: white; border: none; border-radius: 4px; padding: 8px">Subscribe</button></div>'
        document.body.appendChild(div);
    }
});
window.delay = function (ms) {
    const e = Date.now() + ms;
    while (Date.now() < e) { }
}
