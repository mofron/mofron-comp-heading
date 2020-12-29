/**
 * @file mofron-comp-heading/index.js
 * @brief heading component for mofron
 * @license MIT
 */
const Text   = require('mofron-comp-text');
const Horiz  = require('mofron-layout-horizon');
const VrtPos = require('mofron-effect-vrtpos');
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                key-value: component config
     * @param level parameter
     * @short text,level
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname('Heading');
            this.shortForm('text', 'level');

            /* init config */
	    this.confmng().add('level', { type:'number', init: 1, select: [1,2,3,4,5,6] });
            
            /* set config */
	    if (0 < arguments.length) {
                this.config(p1, p2);
	    }
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
            this.layout(new Horiz(), { private:true });
	    this.child(this.text());
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
            if (true === comutl.isinc(prm,"Text")) {
	        prm.effect(new VrtPos("center"));
                prm.style({ "margin-left" : "0.2rem" });
		this.innerComp('text', prm);
                this.resize();
		return;
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
     * text size
     * 
     * @param (number) text size level [1-6]
     * @return (number) text size level
     * @type parameter
     */
    level (prm) {
        try {
            let ret = this.confmng('level', prm);
            if (undefined !== prm) {
                this.resize();
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * resize text
     * 
     * @type private
     */
    resize () {
        try {
            let siz = [ '0.32rem', '0.24rem', '0.18rem', '0.16rem', '0.12rem', '0.10rem' ];
	    this.text().size(siz[this.level()-1]);
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
     * @param (key-value) style option
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
	    return this.text().color(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
