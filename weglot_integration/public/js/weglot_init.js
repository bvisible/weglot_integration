frappe.ready(function() {
    // Charger les paramètres depuis l'API Frappe
    frappe.call({
        method: "weglot_integration.api.get_weglot_settings",
        callback: function(r) {
            if (r.message && r.message.enabled && r.message.api_key) {
                // Initialiser Weglot avec la clé API
                Weglot.initialize({
                    api_key: r.message.api_key
                });
            }
        }
    });
});