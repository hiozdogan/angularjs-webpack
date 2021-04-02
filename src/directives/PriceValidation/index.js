import Money from '../../utils/Money';

export default function PriceValidation () {
    return {
        require: 'ngModel',
        link(scope, $element, attributes, ngModel) {
            $element.on('keypress', (e) => {
                if (!Money.isValidCharacter(e.key)) {
                    e.preventDefault();
                }

            });

            $element.on('blur', () => {
                const value = $element.val();

                if (!value) {
                    ngModel.$setValidity('validPriceRange', true);
                    ngModel.$setValidity('validPriceFormat', true);

                    return;
                }

                const price = Money.convertCommaToDot(value);
                const isValidFormat = value && Money.isValidFormat(value);

                ngModel.$setValidity('validPriceRange', price < 999 && price > 0);
                ngModel.$setValidity('validPriceFormat', isValidFormat);
            });
        }
    }
}
