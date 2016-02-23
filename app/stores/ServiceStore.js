import alt from "../alt.js";
import ServiceActions from "../actions/ServiceActions";

class ServiceStore {
	constructor() {
		this.bindActions(ServiceActions);

		this.services = [{
			name: 'Service 1',
      key: 2,
      addr: 'serv1'
		}, {
			name: 'Service 2',
      key: 3,
      addr: 'serv2'
		}];
	}

	onAdd(service) {
		this.services.push(service);
	}

	onPop() {
		return this.services.pop();
	}

	onShift() {
		return this.services.shift();
	}

}

export default alt.createStore(ServiceStore);
