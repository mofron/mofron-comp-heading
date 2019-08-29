/**
 * @file mofron-comp-heading/index.js
 * @brief heading component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Text   = require('mofron-comp-text');
const Horiz  = require('mofron-layout-horizon');
const VrtPos = require('mofron-effect-vrtpos');

mf.comp.Heading = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                object: component option
     * @param (prm) level parameter
     * @type private
     */
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
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.option({ layout: [ new Horiz() ], child: [ this.text() ] });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size
     * 
     * @param (number) text size level [1-6]
     * @return (number) text size level
     * @type parameter
     */
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
    
    /**
     * heading text contents
     * 
     * @param (mixed) string: heading text contents
     *                mofron-comp-text: heading text component
     * @return (mofron-comp-text) heading text component
     * @type parameter
     */
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
    
    /**
     * text color
     * 
     * @param (mixed (color)) string: text color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @type parameter
     */
    mainColor (prm, opt) {
        try { return this.text().color(prm,opt); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Heading;
/* end of file */
