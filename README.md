# ⚗️ Crema Playground - TypeScript

The purpose of this project is to provide a convenient environment for someone to learn TypeScript with the clarity of rapid feedback from unit tests, automatic code formatting, and rapid setup for new projects using a code generator. Sometimes getting started is the hardest part and we hope this helps!

Your code will be arranged under `projects`. An example for `add` is already in place for your reference. Running `npm run new:project` in your terminal will create a new project that follows the same structure. Give it a try!

## Setup

> You'll need npm (node package manager) installed which is included with node.

1. [Install node/npm](https://nodejs.org/en/) (skip if already installed)
2. `nvm use` (use the correct version of node, make sure to install the version it uses if you don't have it)
3. `npm i` (install project dependencies)
4. [Install the appropriate TSlint plugin for your editor](https://palantir.github.io/tslint/usage/third-party-tools/)
5. Enable "Fix on Save" to get the full experience (e.g. `"tslint.autoFixOnSave": true` in vscode)

> While not required, we suggest using [Visual Studio Code](https://code.visualstudio.com) because it has first class TypeScript support.

## Run

- `npm test` (start test suite in watch mode)
- `npm run new:project` (create a new project)

## Project Structure

```
projects
└── yourCode
    ├── docs.md ← document your code here
    ├── index.ts ← write your code here
    └── test.ts ← test your code here
```

## Best Practices

- Use the code generator (`npm run new:project`)
  - When prompted for a name, prefer `camelCase`
- Fill out the `docs.md` to describe what your code does
- Run your unit tests `npm test` while working to see immediate feedback
  - Tests are written using the [Arrange-Act-Assert](https://codeutopia.net/blog/2017/05/15/quick-javascript-testing-tip-how-to-structure-your-tests/) methodology
- If you get stuck at any point, just log an issue and we'll figure it out together 👭.
