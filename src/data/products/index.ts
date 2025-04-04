import barcodePrinters from './barcodePrinters';
import barcodeScanners from './barcodeScanners';
import easSystems from './easSystems';
import windowsPos from './windowsPos';
import androidPos from './androidPos';
import thermalPrinters from './thermalPrinters';
import waiterCalling from './waiterCalling';
import inkjetPrinter from './inkjetPrinter';
import consumables from './consumables';

// Product data object
const products = {
  "barcode-printers": barcodePrinters,
  "barcode-scanners": barcodeScanners,
  "eas-systems": easSystems,
  "windows-pos": windowsPos,
  "android-pos": androidPos,
  "thermal-printers": thermalPrinters,
  "waiter-calling": waiterCalling,
  "inkjet-printer": inkjetPrinter,
  "labels-ribbons": consumables
};

export default products;
