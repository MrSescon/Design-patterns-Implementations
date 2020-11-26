// Produtos concretos fornecem várias implementações da
// interface do produto.

import Maintenance from "../abstractProduct/maintenance";

 class Aircraft implements Maintenance {
    
    execute(){
        return 'implementação para realização da manutenção de Aeronaves'
    }

 }

 export default Aircraft


 
 