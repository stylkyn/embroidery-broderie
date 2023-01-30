module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "prettier", "eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks",'prettier'],
  rules: {
	'@typescript-eslint/ban-ts-comment': 'warn',
	'@typescript-eslint/ban-types': ['error', {
		types: {
			'{}': false,
		}
	}],
	'@typescript-eslint/camelcase': 'off',
	'@typescript-eslint/explicit-function-return-type': [
		'error',
		{
			'allowExpressions': true
		}
	],
	'@typescript-eslint/explicit-module-boundary-types': 'off',
	'@typescript-eslint/lines-between-class-members': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-floating-promises': 'warn',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/member-delimiter-style': 'error',
	'@typescript-eslint/no-use-before-define': 'off',
	'@typescript-eslint/no-shadow': ['error'],
	'@typescript-eslint/semi': [
		'error'
	],
	'arrow-parens': 'off',
	'babel/no-unused-expressions': [
		'error',
		{
			'allowShortCircuit': true,
			'allowTernary': true
		}
	],
	'camelcase': 'off',
	'curly': ['error', 'all'],
	'class-methods-use-this': 'off',
	'default-case': 'off',
	'eqeqeq': 'error',
	'import/extensions': 'off',
	'import/no-cycle': 'off',
	'import/prefer-default-export': 'off',
	'indent': 'off',
	'jsx-a11y/click-events-have-key-events': 'off',
	'jsx-a11y/label-has-associated-control': 'off',
	'jsx-a11y/label-has-for': 'off',
	'jsx-a11y/no-static-element-interactions': 'off',
	'lines-between-class-members': 'off',
	'max-classes-per-file': ['off'],
	'max-len': 'off',
	'require-await': 'error',
	'no-alert': 'off',
	'no-await-in-loop': 'warn',
	'no-case-declarations': 'warn',
	'no-continue': 'off',
	'no-console': 'error',
	'no-dupe-class-members': 'off',
	'no-shadow': 'off',
	'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.ts', '**/webpack.*.ts'] }],
	'no-mixed-operators': 'off',
	'no-param-reassign': 'error',
	'no-plusplus': 'off',
	'no-prototype-builtins': 'off',
	'no-restricted-globals': 'off',
	'no-tabs': 'off',
	'no-undef': 'off',
	'no-underscore-dangle': 'off',
	'no-unused-expressions': 'off',
	'no-unused-vars': 'off',
	'no-use-before-define': 'off',
	'no-useless-constructor': 'off',
	'object-curly-newline': 'off',
	'padded-blocks': 'off',
	'radix': 'off',
	'react/jsx-filename-extension': [
		'warn',
		{
			'extensions': [
				'.js',
				'.jsx',
				'.ts',
				'.tsx'
			]
		}
	],
	'react/jsx-indent': 'off',
	'react/jsx-indent-props': 'off',
	'react/jsx-key': ['error', { 'checkFragmentShorthand': true }],
	'react/jsx-props-no-spreading': 'off',
	'react/sort-comp': 'off',
	'semi': 'off',
	"react-hooks/exhaustive-deps": "error",
	"react-hooks/rules-of-hooks": "error",
	'no-param-reassign': ['error', { 'ignorePropertyModificationsFor': ['draft', 'draftState'] }], // ignorujeme 'draft' prop kvuli immeru
	'no-shadow': 'off',
	'@typescript-eslint/no-shadow': ['error'],
	'newline-per-chained-call': 'off',
	'@typescript-eslint/consistent-type-imports': 'error',
	'@typescript-eslint/consistent-type-exports': 'error',
	'curly': ['error', 'all'],
	'react/react-in-jsx-scope': 'off',
	'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
	'no-only-tests/no-only-tests': [
		'error', {
			'block': ['test', 'it', 'describe'],
			'focus': ['only', 'skip']
		}
	],

	// @NOTE - empty lines codestyle
	"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
	"padding-line-between-statements": [
		"error",
		// prázdný řádek před returnem
		{ blankLine: "always", prev: "*", next: "return" },

		// prázdný řádek po bloku const a let
		{ blankLine: "always", prev: ["const", "let", "var",], next: "*" },
		{ blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },

		// prázdný řádek po blokových definicích (if, function, ...)
		{ blankLine: "always", prev: ["multiline-block-like", "block-like", "block"], next: "*" },
		{ blankLine: "always", prev: "*", next: ["multiline-block-like", "block-like", "block"] },

		// prázdný řádek před každým casem - můžeme změnit na always, až budeme mít eslint v8 a budeme moci použít: no-fallthrough: ["error", { "allowEmptyCase": true }]
		{ blankLine: "any", prev: "case", next: "*" },

		// prázdný řádek před a po deklaraci class
		{ blankLine: "always", prev: "*", next: "class" },
		{ blankLine: "always", prev: "class", next: "*" },

		// prázdný řádek před a po deklaraci switch
		{ blankLine: "always", prev: "*", next: "switch" },
		{ blankLine: "always", prev: "switch", next: "*" },
	],

	// Zobrazuje všechny prettier errory jako ESLint error
	'prettier/prettier': 'error',
  },
};
