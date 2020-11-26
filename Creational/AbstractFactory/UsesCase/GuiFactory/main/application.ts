// O código cliente trabalha com fábricas e produtos apenas
// através de tipos abstratos: GUIFactory, Button e Checkbox.
// Isso permite que você passe qualquer subclasse fábrica ou de
// produto para o código cliente sem quebrá-lo.

import Button from "../abstractProducts/button"
import GUIFactory from '../abstractFactory/guiFactory'
class Application {
    private factory: GUIFactory
    private button: Button
    
    constructor (factory: GUIFactory) {
        this.factory = factory
    }

    createUI(){
        this.button = this.factory.createButton()
    }

    paint(){
        this.button.paint
    }
}

 export default Application
 