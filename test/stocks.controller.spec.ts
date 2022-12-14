import stockController from '../controller/stocks';
import { expect } from 'chai';

describe('stockController functions', () => {
    const stockData = [{"sku":"LTV719449/39/39","stock":8525},{"sku":"CLQ274846/07/46","stock":8414}];
  it('getFilteredStockDataBySKU stock found', () => {
    const sku = "LTV719449/39/39";
    const result = stockController.getFilteredStockDataBySKU(stockData, sku);
    expect(typeof result).to.equal('object');
    expect(result.length).to.equal(1);
  });

  it('getFilteredStockDataBySKU stock not found', () => {
    const sku = "LTV719449/39/39/33/33/333";
    const result = stockController.getFilteredStockDataBySKU(stockData, sku);
    expect(typeof result).to.equal('object');
    expect(result.length).to.equal(0);
  });
});