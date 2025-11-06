# Minibank 🏦

A learning project for a mini banking account application using BDD/TDD approach.

## 📋 Description

Minibank is a simple banking account management application developed using BDD (Behavior-Driven Development) and TDD (Test-Driven Development) methodologies.

### Features

- ✅ **Deposit** - add money to account
- ✅ **Withdraw** - withdraw money from account
- ✅ **Get Balance** - check account balance
- ✅ **Error Handling** - validation of operations and insufficient funds

## 🛠 Tech Stack

- **JavaScript (Node.js)** - main programming language
- **Cucumber.js** - BDD testing with Gherkin syntax
- **Jest** - unit testing
- **GitHub Actions** - CI/CD
- **Docker & Docker Compose** - containerization

## 📁 Project Structure

```
Minibank/
├── src/                    # Source code
│   └── Account.js         # Bank account class
├── tests/                 # Unit tests (Jest)
│   └── Account.test.js
├── features/              # BDD scenarios (Gherkin)
│   ├── deposit.feature
│   └── withdraw.feature
├── steps/                 # Step definitions (Cucumber)
│   └── account.steps.js
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI
├── Dockerfile
├── docker-compose.yml
├── package.json
├── jest.config.cjs       # Jest configuration (CommonJS)
├── babel.config.cjs      # Babel configuration (CommonJS)
└── cucumber.js
```

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
# Unit tests (Jest)
npm test

# BDD tests (Cucumber)
npm run test:bdd

# All tests
npm run test:all
```

### Run with Docker

```bash
# Build and run
docker-compose up

# Rebuild image
docker-compose up --build

# Stop and remove containers
docker-compose down
```

> **Note:** CI uses the modern `docker compose` command (with space),
> but locally you can use `docker-compose` (with hyphen) if you have the legacy version installed.

## 🧪 Testing

### BDD Scenarios

The project includes 6 BDD scenarios:

**Deposit (features/deposit.feature):**

- ✅ Successful deposit to new account
- ✅ Multiple deposits
- ✅ Error when depositing negative amount

**Withdraw (features/withdraw.feature):**

- ✅ Successful withdrawal
- ✅ Error when withdrawing more than balance
- ✅ Error when withdrawing negative amount

### Unit Tests

15 unit tests with **100% code coverage**:

- Constructor and initialization
- Deposit operations
- Withdraw operations
- Get balance
- Error handling

## 🔄 BDD/TDD Workflow

The project was developed following the **Red → Green → Refactor** cycle:

1. **RED** - Write a failing test
2. **GREEN** - Write minimal code to pass the test
3. **REFACTOR** - Improve code without changing functionality

## 🌿 Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# After completing work
git add .
git commit -m "Add feature description"
git push origin feature/feature-name

# Merge to main via Pull Request
```

## 🔧 CI/CD

GitHub Actions automatically runs:

- ✅ Unit tests on Node.js 18.x and 20.x
- ✅ BDD tests on Node.js 20.x (Cucumber requires Node.js 20+)
- ✅ Docker build and tests in container
- ✅ Coverage reports upload

### CI Configuration Features

- **Matrix strategy**: tests run on multiple Node.js versions
- **BDD tests**: run only on Node.js 20.x due to Cucumber requirements
- **Docker**: uses modern `docker compose` (Compose v2)
- **Coverage**: automatically uploaded as artifact

## 📊 Code Coverage

```text
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |     100 |      100 |     100 |     100 |
 Account.js |     100 |      100 |     100 |     100 |
------------|---------|----------|---------|---------|-------------------
```

## 📝 Usage Examples

```javascript
import Account from './src/Account.js';

// Create account
const account = new Account(100);

// Deposit money
account.deposit(50);
console.log(account.getBalance()); // 150

// Withdraw money
account.withdraw(30);
console.log(account.getBalance()); // 120

// Error handling
try {
  account.withdraw(200);
} catch (error) {
  console.log(error.message); // "Insufficient funds"
}
```

## 🎯 Project Requirements

- ✅ Minimum 2 `.feature` files
- ✅ Minimum 4 scenarios (including negative cases)
- ✅ BDD First approach
- ✅ TDD cycle (Red → Green → Refactor)
- ✅ All tests pass in CI
- ✅ Docker works without external dependencies
- ✅ 100% code coverage

## 🔍 Technical Details

### ES Modules and CommonJS

The project uses ES Modules (`"type": "module"` in `package.json`), but Jest and Babel
configuration files use CommonJS (`.cjs` extension) for compatibility.

### Node.js Versions

- **Minimum version**: Node.js 18.x
- **Recommended version**: Node.js 20.x (for full Cucumber support)
- **BDD tests**: require Node.js 20.x or higher

### Docker

- **Base image**: `node:20-alpine` (lightweight image)
- **Working directory**: `/app`
- **Volumes**: source code mounted for development
- **Environment**: `NODE_ENV=test`

## 📄 License

ISC

## 🐛 Troubleshooting

### Docker Desktop won't start

Make sure Docker Desktop is running:

```bash
docker version
```

### Error "docker-compose: command not found"

Use `docker compose` (with space) instead of `docker-compose` (with hyphen) for newer Docker versions.

### BDD tests won't run

Make sure you're using Node.js 20.x or higher:

```bash
node --version
```

## 👤 Author

Educational project for learning BDD/TDD methodologies
