import Component from '../core/Component.js';

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

class SearchInput extends Component {
  setEvent() {
    this.addEvent('keyup', '.SearchInput__input', ({ target }) => {
      this.$props.updateCurrentInput(target.value);
    });
  }
  mount() {
    const $input = this.$target.querySelector('.SearchInput__input');
    if ($input.value === '') {
      this.$props.updateDisplayNone();
    } else {
      this.$props.updateDisplayFlex();
    }
    const len = $input.value.length;
    delay(0).then(() => {
      $input.focus();
      $input.setSelectionRange(len, len);
    });
  }
  template() {
    return `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.$props.currentInput}">`;
  }
}

export default SearchInput;
