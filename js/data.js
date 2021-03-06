// [0-19] Sodium Channels: [m1, h1, m2, h2]
// [20-27] Potassium Channels: [n1, n2]
var transitionData =
	[
		[0, 0, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 2, 0],
		[2, 0, 1, 0],
		[2, 0, 3, 0],
		[3, 0, 2, 0],
		[0, 0, 0, 1],
		[0, 1, 0, 0],
		[1, 0, 1, 1],
		[1, 1, 1, 0],
		[2, 0, 2, 1],
		[2, 1, 2, 0],
		[3, 0, 3, 1],
		[3, 1, 3, 0],
		[0, 1, 1, 1],
		[1, 1, 0, 1],
		[1, 1, 2, 1],
		[2, 1, 1, 1],
		[2, 1, 3, 1],
		[3, 1, 2, 1],
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[1, 0],
		[2, 1],
		[3, 2],
		[4, 3]
	];

// [0-20] Sodium Channels: [a, alpham, betam, alphah, betah, m, h]
// [21-28] Potassium Channels: [a, alphan, betan, n]
var etaData =
	[
		[0, 0, 0, 0, 0, 0, 0],
		[3, 1, 0, 0, 0, 0, 0],
		[1, 0, 1, 0, 0, 1, 0],
		[2, 1, 0, 0, 0, 1, 0],
		[2, 0, 1, 0, 0, 2, 0],
		[1, 1, 0, 0, 0, 2, 0],
		[3, 0, 1, 0, 0, 3, 0],
		[1, 0, 0, 1, 0, 0, 0],
		[1, 0, 0, 0, 1, 0, 1],
		[1, 0, 0, 1, 0, 1, 0],
		[1, 0, 0, 0, 1, 1, 1],
		[1, 0, 0, 1, 0, 2, 0],
		[1, 0, 0, 0, 1, 2, 1],
		[1, 0, 0, 1, 0, 3, 0],
		[1, 0, 0, 0, 1, 3, 1],
		[3, 1, 0, 0, 0, 0, 1],
		[1, 0, 1, 0, 0, 1, 1],
		[2, 1, 0, 0, 0, 1, 1],
		[2, 0, 1, 0, 0, 2, 1],
		[1, 1, 0, 0, 0, 2, 1],
		[3, 0, 1, 0, 0, 3, 1],
		[4, 1, 0, 0],
		[3, 1, 0, 1],
		[2, 1, 0, 2],
		[1, 1, 0, 3],
		[1, 0, 1, 1],
		[2, 0, 1, 2],
		[3, 0, 1, 3],
		[4, 0, 1, 4]
	];

// [0-7] Sodium Channels: [alpham, betam, alphah, betah]
// [8-12] Potassium Channels: [alphan, betan]
var escapeData =
	[
		[3, 0, 1, 0],
		[2, 1, 1, 0],
		[1, 2, 1, 0],
		[0, 3, 1, 0],
		[3, 0, 0, 1],
		[2, 1, 0, 1],
		[1, 2, 0, 1],
		[0, 3, 0, 1],
		[4, 0],
		[3, 1],
		[2, 2],
		[1, 3],
		[0, 4]
	];

// [0-7] Sodium Channels: [m, h]
// [8-12] Potassium Channels: n
var stateData =
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[3, 1],
		0,
		1,
		2,
		3,
		4
	];