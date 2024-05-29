const { resolve } = require('node:path');
const project = resolve(process.cwd(), 'tsconfig.json');

const extendsData = ['next/core-web-vitals'];
const requireData = [
  '@vercel/style-guide/eslint/node',
  '@vercel/style-guide/eslint/typescript',
  '@vercel/style-guide/eslint/browser',
  '@vercel/style-guide/eslint/react',
  '@vercel/style-guide/eslint/next',
].map(require.resolve)

extendsData.push(...requireData);

module.exports = {
  extends: extendsData,
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  // add rules configurations here
  rules: {
    camelcase: ['error', { allow: ['[A-Za-z0-9]+_[A-Za-z0-9]+'] }],
    
    // Import / Export
    'import/no-default-export': 'off',
    'import/no-named-as-default': 'off',
    
    // Typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    
    // React
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
  },
};
