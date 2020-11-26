import Dialog  from '../AbstractCreator/dialog'
import Button from '../abstractProduct/button'
import WindowsButton from '../concreteProducts/windowsButton'

// Criadores concretos sobrescrevem o método fábrica para mudar
// o tipo de produto resultante.
class WindowsDialog extends Dialog {

    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createButton(): Button {
        return new WindowsButton()
    }
}

export default WindowsDialog
