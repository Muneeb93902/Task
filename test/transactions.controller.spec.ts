import transactionController from '../controller/transactions';
import { expect } from 'chai';

describe('transactionController functions', () => {
    const transactionData = [{"sku":"KED089097/68/09","type":"order","qty":8}];
    const sku = "KED089097/68/09";
  it('getFilteredTransactionDataBySKU', () => {
    const result = transactionController.getFilteredTransactionDataBySKU(transactionData, sku);
    expect(typeof result).to.equal('object');
    expect(result.length).to.equal(1);
  });

  it('getTypeTransactionCountBySKU', () => {
    const result = transactionController.getTypeTransactionCountBySKU(transactionData, 'order');
    expect(result).to.equal(8);
  });
});