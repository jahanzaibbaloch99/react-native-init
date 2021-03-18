// Using https://www.npmjs.com/package/build-url

import buildUrl from 'build-url';

export function getURIFor(url, queryParams = {}) {

	var uri = buildUrl(url, {
		queryParams
	});

	return uri;

}