module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/linebreak-style": "off",
        "@typescript-eslint/arrow-parens": "off",
        "@typescript-eslint/object-curly-newline": "off", // Несовместимо с prettier
        "@typescript-eslint/no-mixed-operators": "off", // Несовместимо с prettier
        "@typescript-eslint/arrow-body-style": "off", // Это - не наш стиль?
        "@typescript-eslint/function-paren-newline": "off", // Несовместимо с prettier
        "@typescript-eslint/no-plusplus": "off",
        "@typescript-eslint/prefer-destructuring": "off",
        "@typescript-eslint/react/no-find-dom-node": "off", // Я этого не знаю
        "@typescript-eslint/react/no-did-mount-set-state": "off",
        "@typescript-eslint/react/no-unused-prop-types": "off", // Это всё ещё работает нестабильно
        "@typescript-eslint/react/jsx-one-expression-per-line": "off",
        "@typescript-eslint/space-before-function-paren": ["error", "never"], // Несовместимо с prettier
        "@typescript-eslint/no-param-reassign": "off", // Это - не наш стиль?
        "@typescript-eslint/radix": "off", // parseInt, parseFloat и radix выключены. Мне это не нравится.
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "prettier/prettier": ["error"]
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    }

};