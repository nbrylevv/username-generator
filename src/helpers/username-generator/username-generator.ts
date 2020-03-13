import * as Helpers from '../../utils/helpers';
import * as LocationSearch from '../../utils/location-search-handler';
import { DomWorker } from '../dom-worker/dom-worker';

let ONCE_GENERATED: boolean = false;

interface Options {
  minSliceResult: number;
}

export class UsernameGenerator {

  private readonly options: Options;

  private readonly domWorker: DomWorker;

  constructor(options = {
    minSliceResult: 2,
  }) {
    this.options = options;
    this.domWorker = new DomWorker({
      onFormSubmit: this.onFormSubmit.bind(this),
      onFormReset: this.onFormReset.bind(this),
    });

    this.loadValues();
  }

  private onFormSubmit(): void {
    this.saveValues();
    this.generate();

    if (!ONCE_GENERATED) {
      ONCE_GENERATED = true;
      this.domWorker.toggleHintMessage(false)
    }
  }

  private onFormReset(): void {
    LocationSearch.resetData();
    this.domWorker.focusFirstInput();
  }

  private saveValues(): void {
    const { formInputs } = this.domWorker;
    const values = formInputs.reduce((acc: string[][], input: HTMLInputElement) => {
      if (input.value) {
        acc.push([input.id, input.value]);
      }

      return acc;
    }, []);

    LocationSearch.saveData(values);
  }

  private loadValues(): void {
    const values = LocationSearch.getData();

    if (!values || !values.length) {
      this.domWorker.focusFirstInput();
      return;
    }

    const { formInputs } = this.domWorker;

    values.forEach((_: string) => {
      const [ key, value ] = _.split('=');
      const currentInput = formInputs.find(input => input.id === key);

      if (currentInput) {
        currentInput.value = value;
      }
    });
    this.domWorker.focusFormSubmit();
  }

  private sliceValuePart(value: string): string {
    const start = Helpers.getRandom(0, value.length - this.options.minSliceResult);
    const sliceLength = Helpers.getRandom(1, value.length);

    return value.slice(start, start + sliceLength);
  }

  public generate(): void {
    let values = this.domWorker.formInputs.map(
      (input: HTMLInputElement) => this.sliceValuePart(input.value).toLowerCase(),
    );

    if (this.domWorker.formSettings.shuffle) {
      values = Helpers.shuffleArray(values);
    }
    this.domWorker.updateResultWrapper(values.join(''));
    this.domWorker.updateGreetings();
  }
}
