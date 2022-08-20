import * as fs from 'fs';
import stocksController from './controller/stocks';
import transactionsController from './controller/transactions';

/**
 * 
 * @param sku 
 * @returns 
 */
function getCurrentStock(sku: string): any {
    try {
        const stockData = JSON.parse(fs.readFileSync('stock.json', 'utf8'));
const transactionsData = JSON.parse(fs.readFileSync('transactions.json', 'utf8'));
        let stock = 0;
        const filteredStock = stocksController.getFilteredStockDataBySKU(stockData, sku);
        const filteredTransaction = transactionsController.getFilteredTransactionDataBySKU(transactionsData, sku);

        if(filteredStock.length === 0 && filteredTransaction.length ===0) {
            throw('Stock not found of given sku')
        }

        if(filteredStock.length > 0) {
            stock = filteredStock[0].stock;
        }

        const orderTransactionCount = transactionsController.getTypeTransactionCountBySKU(filteredTransaction, 'order');

        const refundTransactionCount = transactionsController.getTypeTransactionCountBySKU(filteredTransaction, 'refund');

        stock = stock + orderTransactionCount - refundTransactionCount;

        return {
            sku,
            qty: stock
        }
    } catch (error) {
        console.log(error);
    }
}
const currentStock = getCurrentStock('CLQ274846/07/46');
console.log(`SKU: ${currentStock.sku} , qty ${currentStock.qty}`)