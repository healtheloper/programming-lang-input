class Component {
  constructor($target, $props) {
    this.state = {};
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.setEvent();
  }
  setup() {}
  mount() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }
  template() {
    return ``;
  }
  setEvent() {}
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

export default Component;
