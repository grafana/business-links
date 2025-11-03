# Business Links for Grafana
[![CI](https://github.com/grafana/business-links/actions/workflows/push.yml/badge.svg)](https://github.com/grafana/business-links/actions/workflows/push.yml)
[![CD](https://github.com/grafana/business-links/actions/workflows/publish.yml/badge.svg)](https://github.com/grafana/business-links/actions/workflows/publish.yml)
[![License](https://img.shields.io/github/license/grafana/business-links)](https://github.com/grafana/business-links/blob/main/LICENSE)

>This project was originally contributed by [Volkov Labs](https://github.com/volkovlabs/business-links) - thanks for all your great work!
>
>We have republished under the same plugin ID, keeping the community signature. This means you can simply update your plugin version. A new ID would have required manual updates to your dashboards. For additional information on the changes, see the [Notices](https://github.com/grafana/business-links/blob/main/NOTICES.md).

This project is currently maintained by Grafana Labs. We welcome pull requests and will review them on a best-effort basis. If you're interested in taking on this project long-term, contact [integrations@grafana.com](mailto:integrations@grafana.com). We're eager to work with new maintainers and eventually hand over the project.

**Business Links** provides a streamlined interface to navigate effortlessly using external links, internal dashboards, time pickers, and dynamic drop-down menus.

Designed for seamless integration, it enables users to access critical resources, switch between dashboards, or interact with custom workflows efficiently, all within a single, intuitive panel.

## 🚀 Key Features

- **External Links**: Connect to external tools, documentation, or websites directly from the panel.
- **Dashboard Navigation**: Quickly jump to other Grafana dashboards for a cohesive monitoring experience.
- **Dynamic Dropdowns**: Utilize interactive dropdown menus to filter data or trigger actions, enhancing user control and flexibility.
- **Business AI**: Leverage artificial intelligence to analyze business data, uncover trends, predict outcomes, and provide actionable insights for informed decision-making.

Ideal for teams needing centralized access to diverse resources, the Business Links panel boosts productivity and simplifies navigation in Grafana environments.

## 📋 Requirements

| Plugin Version                | Compatible Grafana Versions |
| ----------------------------- | --------------------------- |
| **Business Links 2.x**        | Grafana 11.5 or 12          |
| **Business Links 1.x**        | Grafana 11 or 12            |

## 🛠️ Installation

Install the Business Links panel via the [Grafana Plugins Catalog](https://grafana.com/grafana/plugins/volkovlabs-links-panel/) or using the Grafana CLI:

```bash
grafana-cli plugins install volkovlabs-links-panel
```

After installation, restart Grafana and add the **Business Links** panel to your dashboard.

## 📜 License

This project is licensed under the [Apache License 2.0](https://github.com/grafana/business-links/blob/main/LICENSE).
