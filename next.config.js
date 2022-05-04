const withTM = require('next-transpile-modules')([
	'@fullcalendar/common',
	'@fullcalendar/react',
	'@fullcalendar/daygrid',
	'@fullcalendar/list',
]);

module.exports = withTM({
	reactStrictMode: true,
	i18n: {
		locales: ['es'],
		defaultLocale: 'es',
	},
	images: {
		domains: ['localhost'],
	},
});
