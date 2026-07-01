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
      '#mgc-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#17140d;color:#cfc6b2;' +
      'border-top:1px solid #3a3324;padding:15px 20px;font-family:"Newsreader",Georgia,serif;font-size:14.5px;line-height:1.5}' +
      '#mgc-consent .in{max-width:1120px;margin:0 auto;display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:space-between}' +
      '#mgc-consent p{margin:0;flex:1 1 320px;color:#cfc6b2}' +
      '#mgc-consent a{color:#d2a64c}' +
      '#mgc-consent .btns{display:flex;gap:10px;flex:0 0 auto}' +
      '#mgc-consent button{font-family:"Oswald",sans-serif;text-transform:uppercase;letter-spacing:.06em;font-weight:500;' +
      'font-size:13px;border:none;padding:11px 20px;cursor:pointer}' +
      '#mgc-accept{background:#9a6f1f;color:#fff}' +
      '#mgc-accept:hover{background:#b4892f}' +
      '#mgc-decline{background:transparent;color:#cfc6b2;border:1px solid #4c463a}' +
      '#mgc-decline:hover{color:#fff;border-color:#736a58}' +
      '#mgc-consent button:focus-visible{outline:3px solid #d2a64c;outline-offset:2px}' +
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
