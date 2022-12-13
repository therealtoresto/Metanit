import { Phone, call as makeCall } from './devices.js';
const iphone: Phone = new Phone('iPhone X');
makeCall(iphone);

import SmartWatch from './devices.js';
const watch: SmartWatch = new SmartWatch('Apple Watch');
watch.printModel();

import Watch from './devices.js';
const smartWatch: Watch = new Watch('Apple Watch 2');
smartWatch.printModel();
