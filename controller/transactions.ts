/**
 * helper controller 
 */

 import Transactions from "../models/transactions";

 const transactionsController = {
     /**
      * 
      * @param arrayList 
      * @param sku 
      * @returns 
      */
     getFilteredTransactionDataBySKU: (arrayList: Array<Transactions>, sku: string) => {
         return arrayList.filter((arrayData) => arrayData.sku === sku);
     },

     /**
      * 
      * @param arrayList 
      * @param type 
      * @returns 
      */
     getTypeTransactionCountBySKU: (arrayList: Array<Transactions>, type: string) => {
        return arrayList.filter((arrayData) => arrayData.type === type)
        .map(o => o.qty)
        .reduce((a, c) => { return a + c });
    }
 }
 
 export default transactionsController;