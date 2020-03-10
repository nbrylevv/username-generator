class App {
  constructor() {
    this.options = {
      minSliceResult: 2,
    };

    this.watchButton();
  }

  static getRandom(min, max) {
    return min + Math.round((max - min) * Math.random());
  }

  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
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
    return document.getElementById('generator-form');
  }

  get formSettings() {
    return {
      shuffle: document.getElementById('shuffle-checkbox').checked,
    }
  }

  get formButton() {
    return document.getElementById('generator-button');
  }

  get resultWrapper() {
    return document.getElementById('generator-result');
  }

  watchButton() {
    this.formButton.addEventListener('click', () => {
      this.saveValues();
      this.generate();
    });
  }

  saveValues() {
    // WIP
  }

  getPartOfValue(value) {
    const start = App.getRandom(0, value.length - this.options.minSliceResult);
    const sliceLength = App.getRandom(1, value.length);

    return value.slice(start, start + sliceLength);
  }

  generate() {
    let values = this.formData.map(value =>
      this.getPartOfValue(value).toLowerCase(),
    );

    console.log(this.formSettings);
    if (this.formSettings.shuffle) {
      values = App.shuffleArray(values);
    }

    this.resultWrapper.innerHTML = values.join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
