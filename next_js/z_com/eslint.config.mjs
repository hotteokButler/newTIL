import { FlatCompat } from '@eslint/eslintrc';

import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^\\u0000'], // side effect imports
						['^next'], // next packages
						['^react'], // react
						['^@'], // packages starting with @
						['^[a-z]'], // packages like lodash, axios
						['^@/'], // alias to src (if using `@/`)
						['^\\.\\./', '^\\./'], // relative imports
					],
				},
			],
		},
	},
];

export default eslintConfig;
