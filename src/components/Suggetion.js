import Component from '../core/Component.js';

class Suggestion extends Component {
  template() {
    return `
            <ul>
                <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
                <li>Java<span class="Suggestion__item--matched">Script</span></li>
                <li>Type<span class="Suggestion__item--matched">Script</span></li>
                <li>Pure<span class="Suggestion__item--matched">Script</span></li>
            </ul>
        `;
  }
}

export default Suggestion;
