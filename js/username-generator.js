const Helpers = {
  getRandom: function(min, max) {
    return min + Math.round((max - min) * Math.random());
  },
  shuffleArray: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
};

const DOMIds = {
  form: 'generator-form',
  input1: 'input1',
  input2: 'input2',
  input3: 'input3',
  formSubmitButton: 'generator-submit',
  result: 'generator-result',
  resultHint: 'generator-hint',
  resultGreetings: 'generator-greetings',
  settingsShuffle: 'shuffle-checkbox',
};

let BUTTON_PRESSED = false;

class UsernameGenerator {
  constructor(options = {
    minSliceResult: 2,
  }) {
    this.options = options;

    this.loadValues();
    this.watchSubmitButton();
    this.watchFormReset();
  }

  get formData() {
    const { elements } = this.form;
    const collectedData = [];

    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      if (element.dataset.role === 'input') {
        collectedData.push(element.value);
      }
    }
    return collectedData.filter(Boolean);
  }

  get form() {
    return document.getElementById(DOMIds.form);
  }

  get formInputs() {
    return {
      [DOMIds.input1]: document.getElementById(DOMIds.input1),
      [DOMIds.input2]: document.getElementById(DOMIds.input2),
      [DOMIds.input3]: document.getElementById(DOMIds.input3),
    }
  }

  get formInputsValues() {
    const { formInputs } = this;

    return Object.keys(formInputs).reduce((acc, inputId) => {
      acc[inputId] = formInputs[inputId].value;

      return acc;
    }, {});
  }

  get formSettings() {
    return {
      shuffle: document.getElementById(DOMIds.settingsShuffle).checked,
    }
  }

  get formSubmitButton() {
    return document.getElementById(DOMIds.formSubmitButton);
  }

  get resultWrapper() {
    return document.getElementById(DOMIds.result);
  }

  watchSubmitButton() {
    this.formSubmitButton.addEventListener('click', () => {
      if (!this.formData.length) {
        return;
      }

      this.saveValues();
      this.generate();

      if (!BUTTON_PRESSED) {
        BUTTON_PRESSED = true;
        document.getElementById(DOMIds.resultHint).style.display = 'none';
        document.getElementById(DOMIds.resultGreetings).style.display = 'block';
      }
    });
  }

  watchFormReset() {
    this.form.addEventListener('reset', () => {
      window.location.search = '';
      this.focusFirstInput();
    });
  }

  focusFirstInput() {
    this.formInputs[DOMIds.input1].focus();
  }

  focusGenerateButton() {
    this.formSubmitButton.focus();
  }

  loadValues() {
    const { search: originSearch } = window.location;
    if (!originSearch.length) {
      this.focusFirstInput();
      return;
    }

    const searchData = originSearch.slice(1, originSearch.length).split('&');
    const { formInputs } = this;

    searchData.forEach(_ => {
      const [ key, value ] = _.split('=');
      formInputs[key].value = decodeURI(value);
    });
    this.focusGenerateButton();
  }

  saveValues() {
    const { formInputsValues } = this;
    const searchData = Object.keys(this.formInputsValues).reduce((acc, inputId) => {
      const inputValue = formInputsValues[inputId];

      if (inputValue) {
        acc.push([inputId, inputValue]);
      }
      return acc;
    }, []);
    const stringSearchData = searchData.map(_ => _.join('=')).join('&');

    window.history.replaceState(null, window.location.title, `${window.location.pathname}?${stringSearchData}`);
  }

  getPartOfValue(value) {
    const start = Helpers.getRandom(0, value.length - this.options.minSliceResult);
    const sliceLength = Helpers.getRandom(1, value.length);

    return value.slice(start, start + sliceLength);
  }

  generate() {
    let values = this.formData.map(value =>
      this.getPartOfValue(value).toLowerCase(),
    );

    if (this.formSettings.shuffle) {
      values = Helpers.shuffleArray(values);
    }

    this.resultWrapper.innerHTML = values.join('');
  }
}

window.UsernameGenerator = UsernameGenerator;
