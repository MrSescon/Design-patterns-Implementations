import Dialog  from '../AbstractCreator/dialog'
import Button from '../abstractProduct/button'
import HTMLButton from '../concreteProducts/htmlButton'

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class WebDialog extends Dialog {
    
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createButton(): Button {
        return new HTMLButton()
    }
}

export default WebDialog