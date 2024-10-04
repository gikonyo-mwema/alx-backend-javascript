import { expect } from 'chai';
import sinon from 'sinon';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});

