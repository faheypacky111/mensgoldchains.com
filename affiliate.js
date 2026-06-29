/* The Karat Report — Amazon affiliate tag injector
 * -------------------------------------------------------------
 * ONE-TIME SETUP: create a NEW Amazon tracking ID for THIS site
 * (Amazon Associates > account menu > Manage Tracking IDs, e.g.
 * "karatreport-20"), paste it below, save, and re-upload THIS FILE.
 * Every Amazon link sitewide then carries your tag automatically.
 *
 * NOTE: Frost NYC (ShareASale), Jared/GoldenMine (CJ) links are NOT
 * Amazon links — those full affiliate URLs get pasted directly into
 * the product slots and are not touched by this script.
 */
window.AMAZON_TAG = "";   /* <-- e.g. "karatreport-20" */

document.addEventListener("DOMContentLoaded", function () {
  var tag = (window.AMAZON_TAG || "").trim();
  if (!tag) return;
  var links = document.querySelectorAll('a[href*="amazon.com"]');
  for (var i = 0; i < links.length; i++) {
    try {
      var u = new URL(links[i].href);
      if (!u.searchParams.get("tag")) {
        u.searchParams.set("tag", tag);
        links[i].href = u.toString();
      }
    } catch (e) { /* ignore malformed URLs */ }
  }
});
