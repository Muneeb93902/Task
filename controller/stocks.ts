/**
 * helper controller 
 */

 import Stocks from "../models/stocks";

 const stocksController = {
     /**
      * 
      * @param arrayList 
      * @param sku 
      * @returns 
      */
     getFilteredStockDataBySKU: (arrayList: Array<Stocks>, sku: string) => {
         return arrayList.filter((arrayData) => arrayData.sku === sku);
     }
 }
 
 export default stocksController;