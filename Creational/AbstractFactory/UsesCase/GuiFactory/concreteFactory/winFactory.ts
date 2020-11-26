// As fábricas concretas produzem uma família de produtos que
// pertencem a uma única variante. A fábrica garante que os
// produtos resultantes sejam compatíveis. Assinaturas dos
// métodos fabrica retornam um produto abstrato, enquanto que
// dentro do método um produto concreto é instanciado.

// Cada fábrica concreta tem uma variante de produto
// correspondente.

import GUIFactory from '../abstractFactory/guiFactory'
import { Button, CheckBox, WinButton, WinCheckBox } from '../index'


class WinFactory implements GUIFactory {
    
    createButton(): Button {
        return new WinButton()
    }

    createCheckBox(): CheckBox {
        return new WinCheckBox()
    }

}

export default WinFactory