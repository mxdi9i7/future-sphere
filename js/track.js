import tracksData from '../data/tracks.js';

const track = window.location.search.split('=')[1];

if (!track) {
	window.location.href = '/index.html';
} else {
	const currentTrack = tracksData.find(item => {
		return item.id === track;
	});

	$('#title').html(currentTrack.title);
	$('#desc').html(currentTrack.description);
	$('#thumb1').attr('src', currentTrack.thumbnail);
	console.log(currentTrack);
}
