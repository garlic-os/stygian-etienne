const etienne = document.querySelector("#etienne");

const blush = document.querySelector(".live.blush");
const mouthVariants = [
	document.querySelector(".live.mouth"),
	document.querySelector(".kill.mouth"),
];
const leftEyeVariants = [
	document.querySelector(".live.eye.left"),
	document.querySelector(".kill.eye.left"),
];
const rightEyeVariants = [
	document.querySelector(".live.eye.right"),
	document.querySelector(".kill.eye.right"),
];

const faceElements = [
	blush,
	mouthVariants,
	leftEyeVariants,
	rightEyeVariants
];

console.debug({faceElements});

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function randomChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

(async () => {
	while (true) {
		const faceElement = randomChoice(faceElements);
		if (Array.isArray(faceElement)) {
			for (const variant of faceElement) {
				variant.classList.toggle("hidden");
			}
		} else {
			faceElement.classList.toggle("hidden");
		}
		await delay(1000);
	}
})();
