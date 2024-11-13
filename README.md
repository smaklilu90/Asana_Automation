# Test Automation Framework Playwright

A test automation framework built using Playwright for end-to-end testing of web applications. This framework supports parallel test execution, multiple browser testing.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js (version >=16)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/smaklilu90/Asana_Automation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Asna_Automation
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

### Running Tests in Specific Browser

You can run tests on a specific browser using the `--project` flag:

```bash
npx playwright test --project=firefox
```

### Running Tests in Parallel

To run tests in parallel across multiple workers, use the `--workers` flag:

```bash
npx playwright test --workers=4
```


