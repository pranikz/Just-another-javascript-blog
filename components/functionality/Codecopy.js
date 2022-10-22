const _ = require("lodash");

try {
  // Node js will throw an error
  this === window;

  const Clipboard = require("clipboard");
  new Clipboard(".markdown-it-code-copy");
} catch (_err) {}

const defaultOptions = {
  iconStyle: "font-size: 21px; opacity: 0.4;",
  iconClass: "",
  buttonStyle:
    "position: relative; top: 7.5px; right: 6px; cursor: pointer; outline: none;",
  buttonClass: "",
};

function renderCode(origRule, options) {
  options = _.merge(defaultOptions, options);
  return (...args) => {
    const [tokens, idx] = args;
    const content = tokens[idx].content
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&lt;");
    const origRendered = origRule(...args);

    if (content.length === 0) return origRendered;

    return `
<div style="position: relative">
	${origRendered}
	<button  class="markdown-it-code-copy ${options.buttonClass}" data-clipboard-text="${content}" style="${options.buttonStyle}" title="Copy">
		<span style="${options.iconStyle}" class="${options.iconClass}"><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg></span>
	</button>
</div>
`;
  };
}

module.exports = (md, options) => {
  md.renderer.rules.code_block = renderCode(
    md.renderer.rules.code_block,
    options
  );
  md.renderer.rules.fence = renderCode(md.renderer.rules.fence, options);
};
