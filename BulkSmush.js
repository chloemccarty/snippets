// This script will automatically click the bulk smush "RESUME" button every 60 seconds so that you don't have to!
// Instructions
// 1) Hit the "BULK SMUSH NOW" button https://webpagefx.mangoapps.com/sf/MjA2MDQxXzY1ODU4NjY
// 2) Paste the following code into your dev console and hit enter. https://webpagefx.mangoapps.com/sf/MjA2MDQ0XzY1ODU4Njk
// 3) Keep your tab open and allow the smushing to automatically take place!

function continueBulkSmush() {
	if (! jQuery(".wp-smush-all.sui-button.wp-smush-started")[0].disabled) {
		console.log("continue smush");
		jQuery(".wp-smush-all.sui-button.wp-smush-started")[0].click();
	} else {
		console.log("previous smush still running");
	}
}
continueBulkSmush();
setInterval(continueBulkSmush,60000);