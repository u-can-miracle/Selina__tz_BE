import * as bunyan from 'bunyan'

export const APP_LOGGER = 'APP_LOGGER'

const createLogger = ({
	name
}: {
	name: string
}) => bunyan.createLogger({
	name,
	serializers: {
		req: bunyan.stdSerializers.req,
		res: bunyan.stdSerializers.res,
		err: bunyan.stdSerializers.err,
	},
	streams: [
		{
			name: 'trace',
			level: 'trace',
			stream: process.stdout,
		},
		{
			name: 'debug',
			level: 'debug',
			stream: process.stdout,
		},
		{
			name: 'info',
			level: 'info',
			stream: process.stdout,
		},
		{
			name: 'warn',
			level: 'warn',
			stream: process.stderr,
		},
		{
			name: 'error',
			level: 'error',
			stream: process.stderr,
		},
		{
			name: 'fatal',
			level: 'fatal',
			stream: process.stderr,
		},
	],
})

export default createLogger
