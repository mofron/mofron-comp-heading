/**
 * @file   Heading.js
 * @brief  Base UI of Heading
 * @author simpart
 */

mofron.comp.Heading = class extends mofron.comp.Base {
    constructor (txt, lv) {
        try {
            var _lv = (lv === undefined) ? 1 : lv;
            if ( (null === txt) || ('number' != (typeof _lv)) ) {
                throw new Error('invalid parameter');
            }
            if ( (1 > _lv) || (6 < _lv)) {
                throw new Error('invalid parameter');
            }
            super([txt,_lv]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getTarget() {
        try {
            return this.vdom.getChild(0);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initContents (vd, prm) {
        try {
            if ('string' === (typeof prm[0])) {
                var conts = new mofron.util.Vdom('h' + prm[1]);
                conts.setStyle('margin', '0px');
                conts.setText(prm[0]);
                vd.addChild(conts);
            } else if ('object' === (typeof prm[0])) {
                var conts = new mofron.util.Vdom('div');
                vd.addChild(conts);
                this.addChild(prm[0]);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    marginLeft (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.getTarget().getStyle('margin-left');
            }
            if ('number' !== (typeof _val)) {
                throw new Error('invalid parameter');
            }
            this.style('margin-left', val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
