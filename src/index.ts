import './index.scss';

import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import BmiCalculator from './app/BmiCalculator';

const main = BmiCalculator;

run(main, {
    DOM: makeDOMDriver('#app')
});
