var DEFAULT_OPTIONS = {
    touchAction: "pan-y"
};

/**
 * Hammer instance for an element
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    this.element = element;
    this.options = options || DEFAULT_OPTIONS;

    this.sessions = [];

    this.input = new Input(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    this.gestures = new Gestures(this);
}

Hammer.defaults = DEFAULT_OPTIONS;

/**
 * destroy the instance
 */
Hammer.prototype.destroy = function() {
    this.sessions.length = 0;
    this.input.destroy();
};
