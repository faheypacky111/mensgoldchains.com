/* The Karat Report — cookie consent (Google Consent Mode v2)
 * Analytics stay OFF until the visitor clicks Accept. Decline keeps them off.
 */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var KEY = "tkr_consent";
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied"
  });

  if (choice === "granted") {
    gtag("consent", "update", { analytics_storage: "granted" });
  }

  function record(val) {
    try { localStorage.setItem(KEY, val); } catch (e) {}
    if (val === "granted") gtag("consent", "update", { analytics_storage: "granted" });
    var bar = document.getElementById("tkr-consent");
    if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (choice === "granted" || choice === "denied") return;

    var css = document.createElement("style");
    css.textContent =
      '#tkr-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0a0b0e;' +
      'color:#e7eaf0;border-top:1px solid #2a2f39;padding:16px 20px;' +
      'font-family:"Inter",system-ui,sans-serif;font-size:14px;line-height:1.5;' +
      'box-shadow:0 -6px 24px rgba(0,0,0,.5)}' +
      '#tkr-consent .in{max-width:1120px;margin:0 auto;display:flex;align-items:center;' +
      'gap:18px;flex-wrap:wrap;justify-content:space-between}' +
      '#tkr-consent p{margin:0;flex:1 1 320px;color:#c7cdd6}' +
      '#tkr-consent a{color:#e6c879}' +
      '#tkr-consent .btns{display:flex;gap:10px;flex:0 0 auto}' +
      '#tkr-consent button{font-family:"Inter",sans-serif;font-weight:700;font-size:14px;' +
      'border:none;border-radius:7px;padding:10px 18px;cursor:pointer}' +
      '#tkr-accept{background:linear-gradient(180deg,#e6c879,#c9a24b);color:#1a1407}' +
      '#tkr-accept:hover{filter:brightness(1.07)}' +
      '#tkr-decline{background:transparent;color:#c7cdd6;border:1px solid #363c47}' +
      '#tkr-decline:hover{color:#fff;border-color:#6f7682}' +
      '#tkr-consent button:focus-visible{outline:3px solid #c9a24b;outline-offset:2px}' +
      '@media(max-width:600px){#tkr-consent .btns{flex:1 1 100%}#tkr-consent button{flex:1}}';
    document.head.appendChild(css);

    var bar = document.createElement("div");
    bar.id = "tkr-consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookie consent");
    bar.innerHTML =
      '<div class="in"><p>We use cookies for analytics to understand how visitors use this site. ' +
      'Declining keeps analytics off. See our <a href="privacy.html">Privacy Policy</a>.</p>' +
      '<div class="btns"><button id="tkr-decline" type="button">Decline</button>' +
      '<button id="tkr-accept" type="button">Accept</button></div></div>';
    document.body.appendChild(bar);

    document.getElementById("tkr-accept").addEventListener("click", function () { record("granted"); });
    document.getElementById("tkr-decline").addEventListener("click", function () { record("denied"); });
  });
})();
