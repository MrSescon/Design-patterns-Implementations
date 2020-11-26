// Produtos concretos fornecem várias implementações da
// interface do produto.

import Transport from "../abstractProduct/transport";

 class Ship implements Transport {
    
    deliver(){
        return 'implementação para entrega pelo mar'
    }

 }

 export default Ship

 
 