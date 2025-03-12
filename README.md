# Weglot Integration for Frappe Framework

![Weglot](https://weglot.com/wp-content/themes/weglot/dist/images/weglot-logo.svg)

This Frappe application provides seamless integration with [Weglot](https://weglot.com), a powerful translation solution that enables you to make your Frappe website multilingual in minutes without any coding.

## Features

- One-click integration of Weglot translation service
- Secure API key storage with encryption
- Simple settings interface in the Frappe desk
- No code changes required for your website

## What is Weglot?

Weglot is a translation solution that helps you make your website multilingual. It automatically detects and translates your website content, while giving you full control over the translations. Weglot's main features include:

- 100+ available languages
- Automatic detection of all your website content
- Machine translation with the option for manual editing
- Visual editor for translations in context
- Language switcher that adapts to your website design
- SEO-optimized translations that follow Google's best practices

## Installation

### Prerequisites

- Frappe Framework v14 or later
- A Weglot account and API key (get yours at [Weglot](https://dashboard.weglot.com/register))

### Setup

1. Install the app using the Frappe bench:

```bash
bench get-app weglot_integration https://github.com/neoffice/weglot_integration
bench --site your_site install-app weglot_integration
```

2. After installation, restart your bench:

```bash
bench restart
```

## Configuration

1. Navigate to "Weglot Settings" in your Frappe desk (you can search for it in the awesomebar)
2. Enable the integration by checking "Enable Weglot"
3. Enter your Weglot API key (available in your Weglot dashboard)
4. Save the settings

That's it! Weglot is now integrated with your website. A language switcher should appear on your website automatically.

## How It Works

This integration works by:

1. Securely storing your Weglot API key in the Frappe database with encryption
2. Injecting the Weglot JavaScript code into the `<head>` section of your website pages
3. Initializing Weglot with your API key
4. Weglot then detects and translates your content on the fly

The implementation uses Frappe's hooks system to include the Weglot JavaScript library and an initialization script that fetches your settings from a secure API endpoint.

## Technical Details

The application consists of:

- A custom DocType "Weglot Settings" for storing configuration
- A server-side API to securely expose settings to the client
- JavaScript initialization code
- Hooks for including scripts on website pages

The code flow:

1. When a page loads, the Weglot JavaScript library is included
2. Our initialization script makes an API call to fetch settings
3. If Weglot is enabled, it's initialized with your API key
4. Weglot then handles the rest, detecting and translating your content

## Advanced Configuration

For advanced configuration of Weglot (like specifying languages, excluding pages, etc.), please refer to the [Weglot Documentation](https://developers.weglot.com/javascript/javascript-main).

You can customize the Weglot initialization by editing the `weglot_init.js` file located in `weglot_integration/public/js/`.

## Support

If you encounter any issues with the integration, please:

1. Check that your Weglot API key is correct
2. Ensure the integration is enabled in Weglot Settings
3. Check the browser console for any JavaScript errors
4. File an issue on the GitHub repository

For issues related to Weglot service itself, please contact [Weglot Support](https://support.weglot.com).

## License

This project is licensed under the MIT License.

## Credits

Developed by [Neoffice Team](https://neoffice.io).

Weglot is a registered trademark of Weglot SAS.
