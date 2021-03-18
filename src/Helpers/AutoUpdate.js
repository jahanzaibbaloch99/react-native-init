import DeviceInfo from "react-native-device-info";
import SpInAppUpdates from 'sp-react-native-in-app-updates';

const inAppUpdates = new SpInAppUpdates();
const HIGH_PRIORITY_UPDATE = 5; // Arbitrary, depends on how you handle priority in the Play Console

export default function checkForAppUpdates() {

	var version = DeviceInfo.getVersion();

	console.log('version', version);

	inAppUpdates.checkNeedsUpdate({
		curVersion: version,
		toSemverConverter: (ver => {
			// i.e if 400401 is the Android version, and we want to convert it to 4.4.1
			const androidVersionNo = parseInt(ver, 10);
			// console.log('androidVersionNo', androidVersionNo);
			const majorVer = Math.trunc(androidVersionNo / 1000);
			const minorVerStarter = androidVersionNo - majorVer * 1000;
			const minorVer = Math.trunc(minorVerStarter / 100);
			const patchVersion = Math.trunc(minorVerStarter - minorVer * 100);
			var string = `${majorVer}.${minorVer}.${patchVersion}`;
			// console.log('string', string, ver);
			return string;
		})
	}).then(result => {

		// console.log('update result', result);

		if (result.shouldUpdate) {
			const updateType = result.other.updatePriority >= HIGH_PRIORITY_UPDATE
				? SpInAppUpdates.UPDATE_TYPE.IMMEDIATE
				: SpInAppUpdates.UPDATE_TYPE.FLEXIBLE;

			inAppUpdates.startUpdate({
				updateType, // android only, on iOS the user will be promped to go to your app store page
			}).then((t) => {
				// console.log('inAppUpdates', t);
			}).catch((result) => {
				// console.log("catch startUpdate", result);
			});
		}
	}).catch((result) => {
		// console.log("catch checkNeedsUpdate", result);
	});

}