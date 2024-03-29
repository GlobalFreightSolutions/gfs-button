import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PaperButtonBehavior } from '@polymer/paper-behaviors/paper-button-behavior.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import './gfs-button-styles.js';

class GfsButton extends mixinBehaviors([PaperButtonBehavior], PolymerElement) {
    static get template() {
        return html`
            <style include="gfs-button-styles"></style>

            <slot></slot>
        `;
    }

    static get is() {
        return 'gfs-button';
    }

    static get properties() {
        return {
            raised: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
                observer: '_calculateElevation'
            }
        }
    }


    ready() {
        super.ready();
    }

    _calculateElevation() {
        if (!this.raised) {
            this._setElevation(0);
        } else {
            Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this);
        }
    }
}
window.customElements.define(GfsButton.is, GfsButton);
