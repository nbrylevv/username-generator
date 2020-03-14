import {
  DOM_IDS,
} from '../../utils/dom-ids';
import {
  getRandomGreetings,
} from "../../utils/greetings";
import {
  getRandom,
} from "../../utils/helpers";

interface Options {
  onFormSubmit: (event: Event) => void;
  onFormReset: (event: Event) => void;
}

interface FormSettings {
  [key: string]: boolean
}

export class DomWorker {
  constructor({
    onFormSubmit,
    onFormReset,
  }: Options) {
    this.form.addEventListener('submit', onFormSubmit);
    this.form.addEventListener('reset', onFormReset);
  }

  public get form(): HTMLFormElement {
    return document.getElementById(DOM_IDS.form) as HTMLFormElement;
  }

  public get formInputs(): HTMLInputElement[] {
    const { elements } = this.form;
    const inputs = [];

    for (let index = 0; index < elements.length; index++) {
      const element = elements[index] as HTMLInputElement;
      if (element.dataset.role === 'input') {
        inputs.push(element);
      }
    }

    return inputs;
  }

  public get formSettings(): FormSettings {
    const shuffleCheckbox = document.getElementById(DOM_IDS.settingsShuffle) as HTMLInputElement;

    return {
      shuffle: shuffleCheckbox ? shuffleCheckbox.checked : false,
    }
  }

  public get formSubmit(): HTMLButtonElement {
    return document.getElementById(DOM_IDS.formSubmitButton) as HTMLButtonElement;
  }

  public get resultWrapper(): HTMLElement {
    return document.getElementById(DOM_IDS.result) as HTMLElement;
  }

  public get greetingsWrapper(): HTMLElement {
    return document.getElementById(DOM_IDS.greetingsWrapper) as HTMLElement;
  }

  public toggleHintMessage(hintVisible: boolean) {
    const resultHint = document.getElementById(DOM_IDS.resultHint);
    const greetingsWrapper = document.getElementById(DOM_IDS.greetingsWrapper);

    if (resultHint) {
      resultHint.style.display = hintVisible ? 'block' : 'none';
    }
    if (greetingsWrapper) {
      greetingsWrapper.style.display = hintVisible ? 'none' : 'block';
    }
  }

  public focusFirstInput(): void {
    this.formInputs[0].focus();
  }

  public focusFormSubmit(): void {
    this.formSubmit.focus();
  }

  public updateResultWrapper(value: string) {
    this.resultWrapper.innerHTML = value;
  }
  
  public updateGreetings() {
    this.greetingsWrapper.innerHTML = `${getRandomGreetings()},`;
  }
}
