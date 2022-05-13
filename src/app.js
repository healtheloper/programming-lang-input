import SearchInput from './components/SearchInput.js';
import SelectedLanguage from './components/SelectedLanguage.js';
import Suggestion from './components/Suggetion.js';
import Component from './core/Component.js';

class App extends Component {
  setup() {
    this.state = {
      currentInput: '',
      suggestions: [],
    };
  }
  updateCurrentInput(newInput) {
    const suggestion = fetch(newInput);
    this.setState({ suggetions, currentInput: newInput });
  }
  updateSuggestion(newSuggetions) {
    this.setState({ newSuggetions });
  }
  mount() {
    const $SelectedLanguage = this.$target.querySelector('.SelectedLanguage');
    new SelectedLanguage($SelectedLanguage);

    const $Suggestion = this.$target.querySelector('.Suggestion');
    new Suggestion($Suggestion, {
      updateSuggestion: this.updateSuggestion,
    });

    const updateDisplayNone = () => {
      $SelectedLanguage.style.display = 'none';
      $Suggestion.style.display = 'none';
    };

    const updateDisplayFlex = () => {
      $SelectedLanguage.style.display = 'flex';
      $Suggestion.style.display = 'flex';
    };

    const $SearchInput = this.$target.querySelector('.SearchInput');
    new SearchInput($SearchInput, {
      currentInput: this.state.currentInput,
      updateDisplayNone,
      updateDisplayFlex,
      updateCurrentInput: this.updateCurrentInput.bind(this),
    });

    if ($SearchInput.value === '') {
      $SelectedLanguage.style.display = 'none';
      $Suggestion.style.display = 'none';
    }
  }
  template() {
    return `
            <div class="SelectedLanguage"></div>
            <form class="SearchInput"></form>
            <div class="Suggestion"></div>
        `;
  }
}

export default App;
