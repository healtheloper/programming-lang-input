import Component from '../core/Component.js';

class SelectedLanguage extends Component {
  template() {
    return `
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Elixir</li>
                <li>Java</li>
                <li>PHP</li>
            </ul>
        `;
  }
}

export default SelectedLanguage;
