import Checkbox from "../abstractProducts/checkbox";

// Produtos concretos são criados por fábricas concretas
// correspondentes.

class MacCheckBox implements Checkbox {
    paint(){
        return 'Renderiza uma CheckBox no estilo mac'
    }
}

export default MacCheckBox

