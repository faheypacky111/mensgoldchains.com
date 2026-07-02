/* MensGoldChains.com — cookie consent (Google Consent Mode v2) */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var KEY = "mgc_consent", choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}
  gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"});
  if (choice === "granted") gtag("consent","update",{analytics_storage:"granted"});
  function record(v){ try{localStorage.setItem(KEY,v);}catch(e){} if(v==="granted")gtag("consent","update",{analytics_storage:"granted"});
    var bar=document.getElementById("mgc-consent"); if(bar&&bar.parentNode)bar.parentNode.removeChild(bar); }
  document.addEventListener("DOMContentLoaded", function () {
    if (choice === "granted" || choice === "denied") return;
    var css = document.createElement("style");
    css.textContent =
      '#mgc-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#161513;color:#c9c4b8;' +
      'border-top:1px solid #33302a;padding:15px 20px;font-family:"Inter",system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.5}' +
      '#mgc-consent .in{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:space-between}' +
      '#mgc-consent p{margin:0;flex:1 1 320px;color:#c9c4b8}' +
      '#mgc-consent a{color:#f2eee4;text-underline-offset:2px}' +
      '#mgc-consent .btns{display:flex;gap:10px;flex:0 0 auto}' +
      '#mgc-consent button{font-family:"Inter",system-ui,-apple-system,sans-serif;letter-spacing:.02em;font-weight:500;' +
      'font-size:13.5px;border:none;border-radius:2px;padding:11px 22px;cursor:pointer}' +
      '#mgc-accept{background:#f2eee4;color:#161513}' +
      '#mgc-accept:hover{background:#ffffff}' +
      '#mgc-decline{background:transparent;color:#c9c4b8;border:1px solid #4c463f}' +
      '#mgc-decline:hover{color:#ffffff;border-color:#736a58}' +
      '#mgc-consent button:focus-visible{outline:2px solid #f2eee4;outline-offset:2px}' +
      '@media(max-width:600px){#mgc-consent .btns{flex:1 1 100%}#mgc-consent button{flex:1}}';
    document.head.appendChild(css);
    var bar = document.createElement("div");
    bar.id = "mgc-consent"; bar.setAttribute("role","dialog"); bar.setAttribute("aria-label","Cookie consent");
    bar.innerHTML =
      '<div class="in"><p>We use cookies for analytics to understand how visitors use this site. Declining keeps analytics off. See our <a href="privacy.html">Privacy Policy</a>.</p>' +
      '<div class="btns"><button id="mgc-decline" type="button">Decline</button>' +
      '<button id="mgc-accept" type="button">Accept</button></div></div>';
    document.body.appendChild(bar);
    document.getElementById("mgc-accept").addEventListener("click", function () { record("granted"); });
    document.getElementById("mgc-decline").addEventListener("click", function () { record("denied"); });
  });
})();
