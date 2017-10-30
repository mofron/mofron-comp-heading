/**
 * @file   Heading.js
 * @author simpart
 */
let mf = require('mofron');
let Text = require('mofron-comp-text');


/**
 * @class Heading
 * @brief base heading component 
 */
mf.comp.Heading = class extends mf.Component {
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
            super.initDomConts();
            let hrz = new mf.Dom({
                tag       : 'div',
                component : this,
                style     : { 'display'     : 'flex',
                              'align-items' : 'center' }
            });
            this.target().addChild(hrz);
            this.target(hrz);
            this.updTag();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    htag (flg) {
        try {
            if (undefined === typeof flg) {
                /* getter */
                return (undefined === this.m_htag) ? false : this.m_htag;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_htag = flg;
            if (true === this.m_htag) {
                this.target().tag('h' + this.level());
            } else {
               
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    updTag () {
        try {
            if (true === this.m_htag) {
                this.target().tag('h' + this.level());
            } else {
                this.target().tag('div');
                this.target().style({
                    'height' : (this.getLevelSize() * 2) + 'px'
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    level (lv) {
        try {
            if (undefined === lv) {
                /* getter */
                return (undefined === this.m_level) ? 3 : this.m_level;
            }
            /* setter */
            if ( ('number' !== typeof lv) ||
                 (1 > lv) ||
                 (6 < lv) ) {
                throw new Error('invalid parameter');
            }
            this.m_level = lv;
            this.updTag();
            if (0 < this.child().length) {
                this.child()[0].size(this.getLevelSize());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getLevelSize () {
        try {
            var lv   = this.level();
            if (1 === lv) {
                return 32;
            } else if (2 === lv) {
                return 24;
            } else if (3 === lv) {
                return 18;
            } else if (4 === lv) {
                return 16;
            } else if (5) {
                return 12;
            } else {
                return 10;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cnt) {
        try {
            if (undefined === cnt) {
                /* getter */
                return (0 === this.child().length) ? null : this.child()[0];
            }
            /* setter */
            let set_cnt = null;
            if ('string' === typeof cnt) {
                set_cnt = new Text({
                    text  : cnt,
                    size  : this.getLevelSize(),
                    style : { 'margin-left' : '5px' }
                });
            } else if (true === mf.func.isInclude(cnt, 'Text')) {
                set_cnt = cnt;
                set_cnt.size(this.getLevelSize());
                set_cnt.style({ 'margin-left' : '5px' });
            } else {
                throw new Error('invalid parameter');
            }
            this.addChild(set_cnt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.heading = {};
module.exports = mofron.comp.Heading;
