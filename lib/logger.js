/**
 * Disables various logging functions across different environments and logging libraries.
 * This function:
 * - Disables console methods (error, warn, info, debug, trace)
 * - Disables common logging libraries (winston, bunyan, log4js, pino) by overriding their createLogger method
 * - Disables browser console methods when running in browser environment
 *
 * @function envlogger
 * @returns {void}
 *
 * @example
 * // Disable all logging
 * envlogger();
 */
function envlogger() {
	['error', 'warn', 'info', 'debug', 'trace'].forEach(method => {
		console[method] = () => {};
	});

	const loggingLibraries = ['winston', 'bunyan', 'log4js', 'pino'];

	loggingLibraries.forEach(lib => {
		try {
			const logger = require(lib);
			if (logger && logger.createLogger) {
				logger.createLogger = () => ({
					info: () => {},
					warn: () => {},
					error: () => {},
					debug: () => {},
				});
			}
		} catch (e) {}
	});

	if (typeof window !== 'undefined' && window.console) {
		Object.keys(window.console).forEach(method => {
			if (
				typeof window.console[method] === 'function' &&
				method !== 'log'
			) {
				window.console[method] = () => {};
			}
		});
	}
}

module.exports = { envlogger };
