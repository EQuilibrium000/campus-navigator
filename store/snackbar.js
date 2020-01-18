export const state = () => ({
	text: 'Processing...',
	icon: 'loading', // success || error || warning || loading
	auto: true,
	show: false
});

export const mutations = {
	show: (state, body) => {
		if (!body) state.show = false;
		else {
			let { text, icon, auto } = body;
			state.text = text || 'Operation successfully.';
			state.icon = icon || 'success';
			state.auto = auto ? auto : false;
			state.show = true;
		}
	}
}