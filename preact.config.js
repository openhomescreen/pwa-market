
export default {
	// you can add preact-cli plugins here
	// plugins: [
	// 	// either a function
	// 	// (you'd probably import this because you can use the `webpack` function instead of an inline plugin)
	// 	function() {},
	// 	// strings also work (they get imported by preact-cli), useful for the json config
	// 	'plugin-name',
	// 	// with options
	// 	[
	// 		'plugin-name',
	// 		{
	// 			option: true,
	// 		},
	// 	],
	// ],
	/**
	 * Function that mutates the original webpack config.
	 * Supports asynchronous changes when a promise is returned (or it's an async function).
	 *
	 * @param {object} config - original webpack config.
	 * @param {object} env - options passed to the CLI.
	 * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
	 * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
	 **/
	webpack(config, env, helpers, options) {
		/** you can change the config here **/
		
    // modify the hashing method for css selector obfuscation
		config.module.rules[4].use[1].options.modules.localIdentName = '[sha1:hash:hex:4]';
		
		// add proxy to go backend
		// config.devServer.proxy = [
		// 	{
		// 		// proxy requests matching a pattern:
		// 		path: '/api/**',
	
		// 		// where to proxy to:
		// 		target: 'http://localhost:9000',
	
		// 		// optionally change Origin: and Host: headers to match target:
		// 		changeOrigin: true,
		// 		changeHost: true,
	
		// 		// optionally mutate request before proxying:
		// 		pathRewrite: function(path, req) {
		// 			// you can modify the outbound proxy request here:
		// 			delete req.headers.referer;
	
		// 			// common: remove first path segment: (/api/**)
		// 			return '/' + path.replace(/^\/[^\/]+\//, '');
		// 		},
	
		// 		// optionally mutate proxy response:
		// 		onProxyRes: function(proxyRes, req, res) {
		// 			// you can modify the response here:
		// 			proxyRes.headers.connection = 'keep-alive';
		// 			proxyRes.headers['cache-control'] = 'no-cache';
		// 		}
		// 	}
		// ];

	},
};