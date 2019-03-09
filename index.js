/**
 * @file   Heading.js
 * @author simpart
 */
const mf     = require('mofron');
const Text   = require('mofron-comp-text');
const Horiz  = require('mofron-layout-horizon');
const HrzPos = require('mofron-effect-hrzpos');

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
    
    level (lv) {
        try { return this.member('level', 'number', prm, 4); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if (undefined !== prm) {
                let siz = [ '0.32rem', '0.24rem', '0.18rem', '0.16rem', '0.12rem', '0.10rem' ];
                prm.option({
                    size: siz[this.level()], sizeValue: ['margin-left', '0.05rem'],
                    effect: [ new HrzPos('center') ]
                });
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
