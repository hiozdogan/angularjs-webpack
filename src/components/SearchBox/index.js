import template from './index.html';
import './style.scss';

export default {
    template,
    controller () {
        this.reset = () => {
            this.searchText = '';
            this.onChange('')
        }
    },
    bindings: {
        onChange: '=',
    }
}
