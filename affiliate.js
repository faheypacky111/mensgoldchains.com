/* MensGoldChains.com — Amazon affiliate tag injector
 * When your Amazon Associates tracking ID for this site is ready
 * (e.g. "mensgold-20"), paste it below, save, and re-upload THIS FILE.
 * Until then links work untagged (no commission is tracked).
 */
window.AMAZON_TAG = "mensgoldcha05-20";   /* <-- e.g. "mensgold-20" */
document.addEventListener("DOMContentLoaded", function () {
  var tag = (window.AMAZON_TAG || "").trim();
  if (!tag) return;
  var links = document.querySelectorAll('a[href*="amazon.com"]');
  for (var i = 0; i < links.length; i++) {
    try {
      var u = new URL(links[i].href);
      if (!u.searchParams.get("tag")) { u.searchParams.set("tag", tag); links[i].href = u.toString(); }
    } catch (e) {}
  }
});
