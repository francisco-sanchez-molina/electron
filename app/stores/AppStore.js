import alt from "../alt.js";
import AppActions from "../actions/AppActions";

class AppStore {
	constructor() {
		this.bindActions(AppActions);

		this.app = {
      sidebar : []
    };
	}

	onAddSidebarEntry(sidebarEntry) {
		this.app.sidebar.push(sidebarEntry);
	}
}

export default alt.createStore(AppStore);
