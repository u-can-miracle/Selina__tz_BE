import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	transform: {
		"^.+\\.tsx?$": "ts-jest",
  },
	bail: false,
  verbose: true,
  clearMocks: true,
	maxWorkers: 1,
	rootDir: 'src',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
		},
	},
};
export default config
