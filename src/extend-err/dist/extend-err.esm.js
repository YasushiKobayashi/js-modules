class ExtendErr extends Error{constructor(a,b){super(a instanceof Error?a.toString():a),this.errorStack=b,a instanceof Error&&(this.message=a.message),this.name=new.target.name,Object.setPrototypeOf(this,new.target.prototype)}}export default ExtendErr;
//# sourceMappingURL=extend-err.esm.js.map
