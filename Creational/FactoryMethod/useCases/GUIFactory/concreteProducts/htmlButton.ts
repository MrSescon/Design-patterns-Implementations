/**
 * Concrete Products provide various implementations of the Product interface.
 */

import Button from "../abstractProduct/button";

 class HTMLButton implements Button {
    render(){
        return 'Retorna uma representação HTML de um botão.'
    }
    onClick(){
        return 'Vincula um evento de clique no navegador web.'
    }
 }

 export default HTMLButton

 