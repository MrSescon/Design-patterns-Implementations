// Produtos concretos são criados por fábricas concretas
// correspondentes.

import Button from '../abstractProducts/button'
class WinButton implements Button {
    paint(){
        return 'Renderiza um botão no estilo windows'
    }
}

export default WinButton


