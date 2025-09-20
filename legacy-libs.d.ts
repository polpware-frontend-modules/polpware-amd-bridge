import StateMachine from 'javascript-state-machine';
import _ from 'underscore';
import meld from 'meld';
import Model from 'model-js';
import cjs from 'constraintjs';
import when from 'when';
export type UnderscoreStatic = typeof _;
export type StateMachineStatic = typeof StateMachine;
export type MeldStatic = typeof meld;
export type ModelJsStatic = typeof Model;
export type CjsStatic = typeof cjs;
export type WhenStatic = typeof when;
/**
 * A single object that consolidates all legacy libraries for easy access.
 */
export declare const legacyLibs: {
    /** jQuery: DOM manipulation library. Imported via default import. */
    $: JQueryStatic;
    /** Backbone: MVC framework. Imported via default import. */
    Backbone: any;
    /** Underscore: Utility library, a dependency for Backbone. Imported via default import. */
    _: any;
    /** javascript-state-machine: Finite State Machine library. Imported via default import. */
    StateMachine: typeof StateMachine;
    /** meld: Aspect-oriented programming library. Imported via `import = require()`. */
    meld: any;
    /** model-js: A functional reactive model library. Imported via `import = require()`. */
    ModelJs: any;
    /** constraintjs: A constraint-based programming library. Imported via `import = require()`. */
    cjs: any;
    /** when: A promise library. Imported via `import = require()`. */
    when: typeof when;
    /** locache: A global caching library. Referenced directly from the window object. */
    locache: any;
};
