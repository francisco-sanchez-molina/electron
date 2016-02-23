import alt from '../alt';

class ServiceActions {
  constructor() {
      this.generateActions(
          'add',
          'pop',
          'shift'
      )
  }
}

export default alt.createActions(ServiceActions);
