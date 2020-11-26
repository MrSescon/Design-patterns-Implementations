import Checkbox from "../abstractProducts/checkbox";
// Produtos concretos são criados por fábricas concretas
// correspondentes.

class WinCheckBox implements Checkbox {
    paint(){
        return 'Renderiza uma CheckBox no estilo Windows'
    }
}

export default WinCheckBox

