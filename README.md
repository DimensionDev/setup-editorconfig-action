# Setup EditorConfig Action

Unofficial [EditorConfig Checker](https://github.com/editorconfig-checker/editorconfig-checker) GitHub Action

## Usage

### Pre-requisites

Create a workflow `.yml` file in your repositories `.github/workflows` directory.
An [example workflow](#example-workflow) is available below.
For more information, reference the GitHub Help Documentation for [Creating a workflow file][creating-a-workflow-file].

[creating-a-workflow-file]: https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file

### Inputs

| Field     | Description                 |
| --------- | --------------------------- |
| `version` | Version (default: `latest`) |

### Example workflow

```yaml
name: EditorConfig Checker

on:
  pull_request:
    branches:
      - main

jobs:
  editorconfig:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
      - uses: DimensionDev/setup-editorconfig-action@latest
      - run: editorconfig-checker
```

## License

[MIT LICENSE](LICENSE)
