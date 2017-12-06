export function debounce(fn, wait) {
    return function _debounce() {
        if (!_debounce.pending) {
            _debounce.pending = true;
            // eslint-disable-next-line raptor/no-set-timeout
            setTimeout(() => {
                fn();
                _debounce.pending = false;
            }, wait);
        }
    };
}
