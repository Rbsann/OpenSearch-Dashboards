<img src="https://raw.githubusercontent.com/opensearch-project/project-website/refs/heads/main/assets/brand/SVG/Logo/opensearch_dashboards_logo_darkmode.svg" height="64px"/>

## Arancia design system evaluation (theme + components)

This fork implements an **Arancia-inspired design system** (tokens + wrapper React components) and applies it to OpenSearch Dashboards with a **dark-first** theme.

### Design rationale

- **Brand alignment**: The theme and component styling were derived from the company’s visual identity, extracting key styling cues (especially **colors**) from the Arancia website ([arancia.ca](https://arancia.ca/)).
- **Token-first theming**: The design system is expressed as runtime CSS variables (`--ar-*`) so it’s easy to evolve, and wrapper components consume these tokens for consistency.
- **Why there are “duplicate” tokens**:
  - **Immediate action**: we override EUI Sass variables (`$eui*`) so the existing OpenSearch Dashboards UI adopts the new look broadly without rewriting the entire app.
  - **Design system PoC**: we also keep `--ar-*` tokens as the source-of-truth for the new Arancia design system and its wrapper components. This is the longer-term model we’d expand in a real rollout.
  - **Where they live**:
    - **EUI Sass overrides (immediate theming)**: `src/core/public/core_app/styles/arancia/_arancia_theme_dark.scss`, `src/core/public/core_app/styles/arancia/_arancia_theme_light.scss`
    - **Design system tokens + wrappers (PoC)**: `src/plugins/arancia_design_system/public/` (tokens consumed in `index.scss`, wrappers in `components/`)

### Build/setup instructions (local dev)

These commands are adapted from the official OpenSearch Dashboards Developer Guide “Getting started guide”:
[DEVELOPER_GUIDE.md#getting-started-guide](https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/DEVELOPER_GUIDE.md#getting-started-guide).

> Note: This fork included a Docker Compose dev setup attempt (`docker-compose.arancia.yml`), but it is **not relied upon** for the evaluation delivery because Docker environments vary (sysctls/volumes/tooling differences) and it proved unreliable across machines.

#### Bootstrap

```bash
yarn osd bootstrap --network-timeout 1000000
```

Alternatively, set it in `.yarnrc`:

```text
network-timeout 1000000
```

If you need to start fresh:

```bash
yarn osd clean
```

#### Run OpenSearch

Start OpenSearch first (example from the guide):

```bash
yarn opensearch snapshot
```

Warning (from the guide): Starting OpenSearch Dashboards before OpenSearch is fully initialized can cause Dashboards to misbehave. Verify OpenSearch is up first:

```bash
curl localhost:9200
```

#### Run OpenSearch Dashboards

```bash
yarn start
```

#### Run Storybook (Arancia design system)

```bash
yarn storybook
```

- **Dashboards**: `http://localhost:5601`
- **Storybook**: `http://localhost:6006`

### Troubleshooting: `vm.max_map_count`

If you see:

`Error: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]`

On Linux, run:

```bash
sudo sysctl -w vm.max_map_count=262144
```

If you tried adding this to Docker Compose and saw:

`sysctl "vm.max_map_count" is not in a separate kernel namespace`

That’s expected on some Docker engines (e.g., rootless), because `vm.max_map_count` must be set **on the host** (not inside the container).



- [Welcome!](#welcome)
- [Project Resources](#project-resources)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Copyright](#copyright)

## Welcome

OpenSearch Dashboards is an open-source data visualization tool designed to work with OpenSearch. OpenSearch Dashboards gives you data visualization tools to improve and automate business intelligence and support data-driven decision-making and strategic planning.

We aim to be an exceptional community-driven platform and to foster open participation and collective contribution with all contributors. Stay up to date on what's happening with the OpenSearch Project by tracking GitHub [issues](https://github.com/opensearch-project/OpenSearch-Dashboards/issues) and [pull requests](https://github.com/opensearch-project/OpenSearch-Dashboards/pulls). 

You can [contribute to this project](https://github.com/opensearch-project/OpenSearch-Dashboards/issues/CONTRIBUTING.md) by [opening issues](https://github.com/opensearch-project/OpenSearch-Dashboards/issues/new/choose) to give feedback, share ideas, identify bugs, and contribute code.

Set up your [OpenSearch Dashboards development environment](https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/DEVELOPER_GUIDE.md#getting-started-guide) today! The project team looks forward to your contributions.

## Code Summary

[![Build and Test][build-and-test-badge]][build-and-test-link]
[![Unit Test Code Coverage][codecov-badge]][codecov-link]
[![Link Checker][link-checker-badge]][link-checker-link]

## Project Resources

* [Project Website](https://opensearch.org/)
* [Downloads](https://opensearch.org/downloads.html)
* [Documentation](https://opensearch.org/docs/)
* Need help? See the [communication guide](COMMUNICATIONS.md) for various options
* [Project Principles](https://opensearch.org/#principles)
* [Developer Guide](DEVELOPER_GUIDE.md)
* [Contributing to OpenSearch](CONTRIBUTING.md)
* [Maintainer Responsibilities](MAINTAINERS.md)
* [Release Management](RELEASING.md)
* [Testing](TESTING.md)
* [Security](SECURITY.md)

## Code of Conduct

This project has adopted the [Amazon Open Source Code of Conduct](CODE_OF_CONDUCT.md). For more information see the [Code of Conduct FAQ](https://aws.github.io/code-of-conduct-faq), or contact [opensource-codeofconduct@amazon.com](mailto:opensource-codeofconduct@amazon.com) with any additional questions or comments.

## License

This project is licensed under the [Apache v2.0 License](LICENSE.txt).

## Copyright

Copyright OpenSearch Contributors. See [NOTICE](NOTICE.txt) for details.

[build-and-test-badge]: https://github.com/opensearch-project/OpenSearch-Dashboards/actions/workflows/build_and_test_workflow.yml/badge.svg
[build-and-test-link]: https://github.com/opensearch-project/OpenSearch-Dashboards/actions/workflows/build_and_test_workflow.yml
[codecov-badge]: https://codecov.io/gh/opensearch-project/OpenSearch-Dashboards/branch/main/graphs/badge.svg
[codecov-link]: https://app.codecov.io/gh/opensearch-project/OpenSearch-Dashboards
[link-checker-badge]: https://github.com/opensearch-project/OpenSearch-Dashboards/actions/workflows/links_checker.yml/badge.svg
[link-checker-link]: https://github.com/opensearch-project/OpenSearch-Dashboards/actions/workflows/links_checker.yml
