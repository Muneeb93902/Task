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
        const filteredTransactions = arrayList.filter((arrayData) => arrayData.type === type)
        .map(o => o.qty)
        
        if(filteredTransactions.length > 0)
            return filteredTransactions.reduce((a, c) => { return a + c });
        else
            return 0;
    }
 }
 
 export default transactionsController;
