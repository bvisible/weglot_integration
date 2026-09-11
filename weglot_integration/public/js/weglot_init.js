// Weglot loads only where it is enabled, and without holding up the page.
//
// weglot.min.js used to be a web_include_js entry: a synchronous <script> at the end of every
// web page of every site with this app, Weglot enabled or not. Parsing, DOMContentLoaded and every
// frappe.ready() handler waited on cdn.weglot.com, and on a slow CDN a product page stayed
// "loading" for over 45 s (neoffice-maintenance#355). This file is now the only include, served by
// the site itself: it asks for the settings, and only when Weglot is enabled does it add the CDN
// script, async, and initialise Weglot once that script has run. The language switcher of
// templates/includes/language_dropdown.html already polls for Weglot.initialized, so it needs no
// change.
(function () {
	const WEGLOT_SRC = "https://cdn.weglot.com/weglot.min.js";

	function initialise(api_key) {
		window.Weglot.initialize({ api_key: api_key });
	}

	function load_weglot(settings) {
		if (!settings || !settings.enabled || !settings.api_key) return;
		if (window.Weglot) {
			initialise(settings.api_key);
			return;
		}
		const script = document.createElement("script");
		script.src = WEGLOT_SRC;
		script.async = true;
		script.onload = function () {
			initialise(settings.api_key);
		};
		document.head.appendChild(script);
	}

	frappe.ready(function () {
		frappe.call({
			method: "weglot_integration.api.get_weglot_settings",
			callback: function (r) {
				load_weglot(r.message);
			},
		});
	});
})();
