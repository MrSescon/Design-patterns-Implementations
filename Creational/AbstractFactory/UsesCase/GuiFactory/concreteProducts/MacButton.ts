// Produtos concretos são criados por fábricas concretas
// correspondentes.

import Button from '../abstractProducts/button'
class MacButton implements Button {
    paint(){
        return 'Renderiza um botão no estilo Mac'
    }
}

export default MacButton


