/**
 * @file   Heading.js
 * @author simpart
 */
require('mofron-comp-text');


/**
 * @class Heading
 * @brief base heading component 
 */
mofron.comp.Heading = class extends mofron.Component {
    constructor (prm_opt) {
        try {
            super();
            this.name('Heading');
            this.m_level = 3;
            /* option */
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            if ('string' === (typeof prm)) {
                var conts = new mofron.Dom('h' + this.level(), this);
                this.vdom().addChild(conts);
                this.target(conts);
                this.addChild(
                    new mofron.comp.Text({
                        param : prm
                    })
                );
            } else if ('object' === mofron.func.isInclude(prm, 'Text')) {
                var conts = new mofron.Dom('div', this);
                this.vdom().addChild(conts);
                this.target(conts);
                if (true === mofron.func.isInclude(prm, 'Text')) {
                    var lv = this.level();
                    if (1 === lv) {
                        prm.size(32);
                    } else if (2 === lv) {
                        prm.size(24);
                    } else if (3 === lv) {
                        prm.size(18);
                    } else if (4 === lv) {
                        prm.size(16);
                    } else if (5) {
                        prm.size(12);
                    } else {
                        prm.size(10);
                    }
                }
                this.addChild(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    level (lv) {
        try {
            if (undefined === lv) {
                return this.m_level;
            }
            if ('number' !== typeof lv) {
                throw new Error('invalid parameter');
            }
            if ((1 > lv) || (6 < lv)) {
                throw new Error('invalid parameter');
            }
            this.m_level = lv;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.heading = {};
module.exports = mofron.comp.Heading;
