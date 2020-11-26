// Produtos concretos fornecem várias implementações da
// interface do produto.

import Button from "../abstractProduct/button";

 class WindowsButton implements Button {
    render() {
        return 'Renderiza um botão no estilo Windows.'
    }
    onClick(f) {
        return 'vincula um evento de clique do SO nativo'
    }
 }

 export default WindowsButton
 
 