const data = `https://i.ibb.co/HdmpS3v/leeknow.png
https://i.ibb.co/xhgKfH5/bangchan.png
https://i.ibb.co/XpxNTqZ/bangchan-felix.png`;

function formatLinks() {
	let splittedData = data.split('\n');

	let result = [];
	for (const el of splittedData) {
		console.log(el);

		let photo = el.split('/');
		let dede = photo[4].split('.');

		let names = dede[0].split('-');

		result.push({ url: el, kids: names });
	}

	return result;
}

export const links = formatLinks();
