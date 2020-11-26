/**
 * Concrete Products provide various implementations of the Product interface.
 */

import Maintenance from "../abstractProduct/maintenance";

 class Automobile implements Maintenance {

    execute(){
        return 'Implementação para manutenção de Automoveis'
    }
 }

 export default Automobile

 