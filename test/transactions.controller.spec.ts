import transactionController from '../controller/transactions';
import { expect } from 'chai';

describe('transactionController functions', () => {
    const transactionData = [{"sku":"KED089097/68/09","type":"order","qty":8}];
  it('getFilteredTransactionDataBySKU stock found', () => {
    const sku = "KED089097/68/09";
    const result = transactionController.getFilteredTransactionDataBySKU(transactionData, sku);
    expect(typeof result).to.equal('object');
    expect(result.length).to.equal(1);
  });

  it('getFilteredTransactionDataBySKU stock not found', () => {
    const sku = "KED089097/68/09//99/33";
    const result = transactionController.getFilteredTransactionDataBySKU(transactionData, sku);
    expect(typeof result).to.equal('object');
    expect(result.length).to.equal(0);
  });

  it('getTypeTransactionCountBySKU', () => {
    const result = transactionController.getTypeTransactionCountBySKU(transactionData, 'order');
    expect(result).to.equal(8);
  });
});