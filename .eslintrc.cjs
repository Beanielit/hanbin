/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
    root: true,
    ignorePatterns: [".eslintrc.cjs", ".next", "out"],
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
    plugins: ["spellcheck", "import"],
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
                varsIgnorePattern: "^_"
            }
        ],
        "react/destructuring-assignment": "error",
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function"
            }
        ],
        "react/hook-use-state": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-fragments": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-sort-props": "error",
        "react/self-closing-comp": "error",
        "react/jsx-pascal-case": "error",
        "react/no-danger": "error",
        "spellcheck/spell-checker": [
            "error",
            {
                minLength: 4,
                skipWords: [
                    "noreferrer",
                    "noopener",
                    "Readonly",
                    "latin",
                    "Parens",
                    "hanbin",
                    "unoptimized",
                    "lang",
                    "tailwindcss",
                    "clsx",
                    "calc",
                    "keyframes",
                    "radix",
                    "antialiased",
                    "Embla",
                    "Dropdown",
                    "english",
                    "korean",
                    "japanese",
                    "Checkbox",
                    "mailto",
                    "gmail",
                    "hanbinj430"
                ]
            }
        ],
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "internal", ["parent", "sibling"], "object", "type", "index"],
                "newlines-between": "always",
                pathGroupsExcludedImportTypes: ["builtin"],
                alphabetize: { order: "asc", caseInsensitive: true },
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before"
                    }
                ]
            }
        ]
    }
};
