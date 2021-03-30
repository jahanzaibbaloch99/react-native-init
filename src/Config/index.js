// Production url
const baseURI = "https://www.google.com/api/v1";

// Staging url
// const baseURI = "";

// Dev url
// const baseURI = "";

export default {
	mode: 'staging',
	remoteConfigExpirationDuration: 3600, // 1 hour
	baseURI: baseURI,

	awesome_new_feature: 'disabled',
	some_key: 'ZZZ',
	os: 'none',
};