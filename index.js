/**
 * @file   Heading.js
 * @author simpart
 */
const mf   = require('mofron');
const Text = require('mofron-comp-text');

/**
 * @class Heading
 * @brief base heading component 
 */
mf.comp.Heading = class extends mf.Component {
    constructor (po, p2) {
        try {
            super();
            this.name('Heading');
            this.m_level = 3;
            /* option */
            this.prmMap('text', 'level');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            let hrz = new mf.Dom({
                tag       : 'div',
                component : this ,
                style     : { 'display'     : 'flex',
                              'align-items' : 'center' }
            });
            this.adom().addChild(hrz);
            this.updTag();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    htag (prm) {
        try {
            if (undefined === typeof prm) {
                /* getter */
                return (undefined === this.m_htag) ? false : this.m_htag;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_htag = prm;
            this.updTag();
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
                let lv_siz = this.getLevelSize();
                lv_siz.value(lv_siz.value() * 2);
                this.sizeValue('height', lv_siz.toString());
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
                return new mf.size.Rem(0.32);
            } else if (2 === lv) {
                return new mf.size.Rem(0.24);
            } else if (3 === lv) {
                return new mf.size.Rem(0.18);
            } else if (4 === lv) {
                return new mf.size.Rem(0.16);
            } else if (5) {
                return new mf.size.Rem(0.12);
            } else {
                return new mf.size.Rem(0.10);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (cnt) {
        try {
            if (undefined === cnt) {
                /* getter */
                return (0 === this.child().length) ? null : this.child()[0];
            }
            /* setter */
            let set_cnt = null;
            if ('string' === typeof cnt) {
                set_cnt = new Text(cnt);
            } else if (true === mf.func.isInclude(cnt, 'Text')) {
                set_cnt = cnt;
            } else {
                throw new Error('invalid parameter');
            }
            set_cnt.execOption({
                size      : this.getLevelSize(),
                sizeValue : new mf.Param('margin-left', '0.05rem')
            });
            this.addChild(set_cnt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Heading;
/* end of file */
