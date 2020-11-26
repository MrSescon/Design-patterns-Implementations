/**
 * Concrete Products provide various implementations of the Product interface.
 */

import Transport from "../abstractProduct/transport";

 class Truck implements Transport {

    deliver(){
        return 'Implementação para delivery por Caminhao'
    }
 }

 export default Truck

 