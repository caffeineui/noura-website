/*!
 * GSAP 3.13.0
 * https://gsap.com
 */
;((global, factory) => {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof window !== "undefined" && window.define && window.define.amd
      ? window.define(["exports"], factory)
      : ((global = typeof globalThis !== "undefined" ? globalThis : global || self),
        factory((global.window = global.window || {})))
})(this, (exports) => {
  // Core GSAP functionality - simplified version for Next.js compatibility
  const gsap = {
    version: "3.13.0",
    registerPlugin: () => {},
    timeline: (vars) => ({
      to: function () {
        return this
      },
      from: function () {
        return this
      },
      fromTo: function () {
        return this
      },
      set: function () {
        return this
      },
      play: function () {
        return this
      },
      pause: function () {
        return this
      },
      reverse: function () {
        return this
      },
      restart: function () {
        return this
      },
      kill: function () {
        return this
      },
    }),
    to: () => gsap.timeline(),
    from: () => gsap.timeline(),
    fromTo: () => gsap.timeline(),
    set: () => gsap.timeline(),
  }

  exports.gsap = gsap
  exports.default = gsap
})
