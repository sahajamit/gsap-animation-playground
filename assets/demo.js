/* gsap-animation-playground - shared demo harness
 *
 * Each template page calls Demo.init({ num, title, blurb, plugins, doc, run }).
 * `run` is the actual animation function. We:
 *   1. render the page header + nav + doc link
 *   2. print run.toString() into the code panel, so the code you READ is
 *      exactly the code that EXECUTES (no drift between docs and demo)
 *   3. wire a Replay button that reverts the previous gsap.context and re-runs
 *
 * This keeps every example self-contained and copy-paste honest.
 */
window.Demo = (function () {
  let ctx = null;

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function dedent(src) {
    // strip the leading `function run() {` wrapper and trailing `}` for display
    const body = src
      .replace(/^[^{]*\{/, "")
      .replace(/\}\s*$/, "")
      .replace(/^\n/, "")
      .replace(/\n\s*$/, "");
    const lines = body.split("\n");
    const indent = Math.min(
      ...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length)
    );
    return lines.map((l) => l.slice(indent)).join("\n");
  }

  function init(cfg) {
    const head = document.querySelector(".demo-head");
    const stage = document.querySelector(".stage");

    // top nav
    const nav = el("div", "demo-nav");
    nav.innerHTML =
      '<a class="back" href="../index.html">&larr; gallery</a>' +
      '<div class="spacer"></div>' +
      (cfg.doc
        ? '<a class="doclink" href="' + cfg.doc + '" target="_blank" rel="noopener">official docs &nearr;</a>'
        : "");
    document.body.insertBefore(nav, document.body.firstChild);

    // header content
    if (head) {
      head.innerHTML =
        '<div class="wrap">' +
        '<div class="num">' + (cfg.num || "") + "</div>" +
        "<h1>" + cfg.title + "</h1>" +
        '<p class="blurb">' + cfg.blurb + "</p>" +
        (cfg.plugins ? '<div class="plugins">' + cfg.plugins + "</div>" : "") +
        "</div>";
    }

    // controls (Replay)
    const controls = el("div", "controls");
    const replay = el("button", "btn", "&#8635; Replay");
    controls.appendChild(replay);
    stage.parentNode.insertBefore(controls, stage.nextSibling);

    // code panel (sibling of the stage, inside the same .wrap)
    const wrapAfter = controls.nextSibling;
    const label = el("div", "code-label", "the code that runs &darr;");
    const pre = el("pre", "code");
    const code = el("code");
    code.textContent = dedent(cfg.run.toString());
    pre.appendChild(code);
    stage.parentNode.insertBefore(label, wrapAfter);
    stage.parentNode.insertBefore(pre, wrapAfter);

    function play() {
      if (ctx) ctx.revert();
      ctx = gsap.context(cfg.run, stage);
    }
    replay.addEventListener("click", play);
    play();
  }

  return { init };
})();
