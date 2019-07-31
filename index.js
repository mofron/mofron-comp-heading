/**
 * @file   Heading.js
 * @author simpart
 */
const mf     = require('mofron');
const Text   = require('mofron-comp-text');
const Horiz  = require('mofron-layout-horizon');
const VrtPos = require('mofron-effect-vrtpos');

/**
 * @class Heading
 * @brief base heading component 
 */
mf.comp.Heading = class extends mf.Component {
    constructor (po, p2) {
        try {
            super();
            this.name('Heading');
            /* option */
            this.prmMap(['text', 'level']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            super.initDomConts();
            this.option({ layout: [ new Horiz() ], child: [ this.text() ] });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    level (prm) {
        try {
            let ret = this.member('level', 'number', prm, 0);
            if (undefined !== prm) {
                if ( (1 > prm) || (6 < prm) ) {
                    throw new Error('invalid parameter');
                }
                let siz = [ '0.32rem', '0.24rem', '0.18rem', '0.16rem', '0.12rem', '0.10rem' ];
                this.text().option({ size: siz[this.level()-1] });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if (true === mf.func.isComp(prm,"Text")) {
                prm.option({ effect: [ new VrtPos('center') ], sizeValue: ['margin-left', '0.2rem'] });
                if (0 !== this.level()) {
                    let siz = [ '0.32rem', '0.24rem', '0.18rem', '0.16rem', '0.12rem', '0.10rem' ];
                    prm.option({ size: siz[this.level()] });
                }
            } else if ("string" === typeof prm) { 
                this.text().text(prm);
                return;
            }
            return this.innerComp('text', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (prm) {
        try { return this.text().color(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Heading;
/* end of file */
