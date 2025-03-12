import frappe
from frappe import _

@frappe.whitelist(allow_guest=True)
def get_weglot_settings():
    settings = frappe.get_single("Weglot Settings")
    if settings.enabled:
        return {
            "enabled": settings.enabled,
            "api_key": settings.get_password("api_key")
        }
    return {"enabled": False}