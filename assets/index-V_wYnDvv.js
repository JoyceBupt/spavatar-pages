var N=Object.defineProperty;var J=(c,e,t)=>e in c?N(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var s=(c,e,t)=>J(c,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const Z="modulepreload",X=function(c){return"/"+c},R={},Q=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(t.map(l=>{if(l=X(l),l in R)return;R[l]=!0;const f=l.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":Z,f||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),f)return new Promise((u,m)=>{h.addEventListener("load",u),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return a.then(i=>{for(const o of i||[])o.status==="rejected"&&n(o.reason);return e().catch(n)})};class K{constructor(e){s(this,"module");s(this,"allocatedPointers");s(this,"structPointers");this.module=e,this.allocatedPointers=new Set,this.structPointers=new Map}allocateAndCopy(e){const t=e.byteLength,r=this.module._malloc(t);if(!r)throw new Error(`Failed to allocate ${t} bytes in WASM memory`);const a=new Uint8Array(e);return this.module.writeArrayToMemory(a,r),this.allocatedPointers.add(r),{ptr:r,size:t}}createTemplateConfig(e){const r=this.module._malloc(128);if(!r)throw new Error("Failed to allocate AvatarTemplateConfig structure");const a=this.allocateAndCopy(e.flameModel),n=this.allocateAndCopy(e.headTemplate),i=this.allocateAndCopy(e.landmarks),o=this.allocateAndCopy(e.masks),l=this.allocateAndCopy(e.lEyelid),f=this.allocateAndCopy(e.rEyelid),d=this.allocateAndCopy(e.teethObj),h=this.allocateAndCopy(e.teethNpz);let u=0;return this.module.setValue(r+u,a.ptr,"i32"),u+=4,this.module.setValue(r+u,a.size,"i32"),u+=4,this.module.setValue(r+u,n.ptr,"i32"),u+=4,this.module.setValue(r+u,n.size,"i32"),u+=4,this.module.setValue(r+u,i.ptr,"i32"),u+=4,this.module.setValue(r+u,i.size,"i32"),u+=4,this.module.setValue(r+u,o.ptr,"i32"),u+=4,this.module.setValue(r+u,o.size,"i32"),u+=4,this.module.setValue(r+u,l.ptr,"i32"),u+=4,this.module.setValue(r+u,l.size,"i32"),u+=4,this.module.setValue(r+u,f.ptr,"i32"),u+=4,this.module.setValue(r+u,f.size,"i32"),u+=4,this.module.setValue(r+u,d.ptr,"i32"),u+=4,this.module.setValue(r+u,d.size,"i32"),u+=4,this.module.setValue(r+u,h.ptr,"i32"),u+=4,this.module.setValue(r+u,h.size,"i32"),u+=4,this.structPointers.set("template_config",r),r}createCharacterData(e,t){const a=this.module._malloc(16);if(!a)throw new Error("Failed to allocate AvatarCharacterData structure");const n=this.allocateAndCopy(e),i=this.allocateAndCopy(t);let o=0;return this.module.setValue(a+o,n.ptr,"i32"),o+=4,this.module.setValue(a+o,n.size,"i32"),o+=4,this.module.setValue(a+o,i.ptr,"i32"),o+=4,this.module.setValue(a+o,i.size,"i32"),o+=4,this.structPointers.set("character_data",a),a}createFlameParams(e){var n,i,o,l,f,d,h;const r=this.module._malloc(1672);if(!r)throw new Error("Failed to allocate AvatarFlameParams structure");let a=0;for(let u=0;u<300;u++){const m=((n=e.shape_params)==null?void 0:n[u])||0;this.module.setValue(r+a,m,"float"),a+=4}for(let u=0;u<100;u++){const m=((i=e.expr_params)==null?void 0:i[u])||0;this.module.setValue(r+a,m,"float"),a+=4}for(let u=0;u<3;u++){const m=((o=e.rotation)==null?void 0:o[u])||0;this.module.setValue(r+a,m,"float"),a+=4}for(let u=0;u<3;u++){const m=((l=e.translation)==null?void 0:l[u])||0;this.module.setValue(r+a,m,"float"),a+=4}for(let u=0;u<3;u++){const m=((f=e.neck_pose)==null?void 0:f[u])||0;this.module.setValue(r+a,m,"float"),a+=4}for(let u=0;u<3;u++){const m=((d=e.jaw_pose)==null?void 0:d[u])||0;this.module.setValue(r+a,m,"float"),a+=4}for(let u=0;u<6;u++){const m=((h=e.eyes_pose)==null?void 0:h[u])||0;this.module.setValue(r+a,m,"float"),a+=4}return r}readSplatPointFlatArray(e){if(!e)throw new Error("Invalid array pointer");const t=this.module.getValue(e,"i32"),r=this.module.getValue(e+4,"i32");if(r===0||!t)return null;const n=r*13,i=t/4,o=new Float32Array(n);return o.set(this.module.HEAPF32.subarray(i,i+n)),o}readFaceGeometryArray(e){if(!e)throw new Error("Invalid face geometry array pointer");const t=this.module.getValue(e,"i32"),r=this.module.getValue(e+4,"i32");if(r===0||!t)return null;const n=r*8,i=t/4;return this.module.HEAPF32.subarray(i,i+n)}readOriginalSplatArray(e){if(!e)throw new Error("Invalid original splat array pointer");const t=this.module.getValue(e,"i32"),r=this.module.getValue(e+4,"i32");if(r===0||!t)return null;const n=r*16,i=new Float32Array(n),o=t/4;for(let l=0;l<r;l++){const f=o+l*16;for(let u=0;u<15;u++)i[l*16+u]=this.module.HEAPF32[f+u];const d=t+l*64+60,h=this.module.getValue(d,"i32");i[l*16+15]=h}return{data:i,count:r}}readMeshData(e){const t=this.module.getValue(e+0,"*"),r=this.module.getValue(e+4,"i32"),a=this.module.getValue(e+8,"*"),n=this.module.getValue(e+12,"i32"),i=this.module.getValue(e+16,"float"),o=this.module.getValue(e+20,"*"),l=this.module.getValue(e+24,"i32"),f=new Float32Array(r*3);if(t&&r>0)for(let u=0;u<r*3;u++)f[u]=this.module.getValue(t+u*4,"float");const d=new Uint32Array(n*3);if(a&&n>0)for(let u=0;u<n*3;u++)d[u]=this.module.getValue(a+u*4,"i32");let h=null;if(o&&l>0){h=new Float32Array(l*3);for(let u=0;u<l*3;u++)h[u]=this.module.getValue(o+u*4,"float")}return{vertices:f,vertexCount:r,faces:d,faceCount:n,landmarks:h,landmarkCount:l,computeTime:i}}free(e){e&&this.allocatedPointers.has(e)&&(this.module._free(e),this.allocatedPointers.delete(e))}freeStruct(e){const t=this.structPointers.get(e);t&&(this.module._free(t),this.structPointers.delete(e))}cleanup(){for(const e of this.allocatedPointers)this.module._free(e);this.allocatedPointers.clear();for(const[,e]of this.structPointers)this.module._free(e);this.structPointers.clear()}getMemoryStats(){return{allocatedPointers:this.allocatedPointers.size,structPointers:this.structPointers.size,totalAllocatedMB:Math.round(this.allocatedPointers.size*1024/1024)}}}class ee{constructor(e={}){s(this,"options");s(this,"baseUrl");s(this,"cache");s(this,"loadingPromises");s(this,"templateResources");s(this,"characterResources");this.options={baseAssetsPath:"/",modelFolder:"3dgs",enableCache:!0,retryCount:3,retryDelay:1e3,enableProgressCallback:!0,baseUrl:"",...e},this.baseUrl=e.baseUrl||"",this.cache=new Map,this.loadingPromises=new Map,this.templateResources={flameModel:"flame_model.pb",headTemplate:"head_template_mesh.obj",landmarks:"flame_landmark_embedding.json",masks:"flame_masks.json",lEyelid:"l_eyelid.json",rEyelid:"r_eyelid.json",teethObj:"fine_teeth.obj",teethNpz:"fine_teeth.npz"},this.characterResources={shape:"shape.pb",pointCloud:"point_cloud.ply"}}joinPath(...e){return e.map((t,r)=>(r>0&&(t=t.replace(/^\/+/,"")),t=t.replace(/\/+$/,""),t)).filter(t=>t.length>0).join("/")}async loadTemplateResources(e=null){const t=Object.keys(this.templateResources).length;let r=0;const a=(n,i)=>{i&&r++,e&&this.options.enableProgressCallback&&e({stage:"template_resources",filename:n,loaded:r,total:t,progress:r/t*100})};try{const n=Object.entries(this.templateResources).map(async([l,f])=>{a(f,!1);const d=await this.loadBinaryResource(this.joinPath(this.options.baseAssetsPath,"flame",f));return a(f,!0),[l,d]}),i=await Promise.all(n);return Object.fromEntries(i)}catch(n){console.error("❌ Failed to load template resources:",n);const i=n instanceof Error?n.message:String(n);throw new Error(`Template resources loading failed: ${i}`)}}async loadCharacterData(e=null){const t=Object.keys(this.characterResources).length;let r=0;const a=(n,i)=>{i&&r++,e&&this.options.enableProgressCallback&&e({stage:"character_data",filename:n,loaded:r,total:t,progress:r/t*100})};try{const n=this.options.modelFolder,[i,o]=await Promise.all([this.loadBinaryResource(this.joinPath(this.options.baseAssetsPath,n,this.characterResources.shape),f=>a(this.characterResources.shape,f)),this.loadBinaryResource(this.joinPath(this.options.baseAssetsPath,n,this.characterResources.pointCloud),f=>a(this.characterResources.pointCloud,f))]);return{shape:i,pointCloud:o}}catch(n){console.error("❌ Failed to load character data:",n);const i=n instanceof Error?n.message:String(n);throw new Error(`Character data loading failed: ${i}`)}}async loadAnimationData(){try{const e=this.joinPath(this.options.baseAssetsPath,this.options.modelFolder,"idle.pb");return await this.loadBinaryResource(e)}catch(e){console.error("❌ Failed to load animation data:",e);const t=e instanceof Error?e.message:String(e);throw new Error(`Animation data loading failed: ${t}`)}}async loadBinaryResource(e,t=null){if(this.options.enableCache&&this.cache.has(e))return t&&t(!0),this.cache.get(e);if(this.loadingPromises.has(e))return await this.loadingPromises.get(e);const r=this.loadBinaryResourceInternal(e,t);this.loadingPromises.set(e,r);try{const a=await r;return this.options.enableCache&&this.cache.set(e,a),a}finally{this.loadingPromises.delete(e)}}async loadBinaryResourceInternal(e,t=null){let r=null;const a=this.baseUrl?`${this.baseUrl}${e}`:e;for(let n=1;n<=this.options.retryCount;n++)try{const i=await fetch(a);if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const o=i.headers.get("content-type");this.validateContentType(e,o);const l=await i.arrayBuffer();if(l.byteLength===0)throw new Error("Received empty file");return t&&t(!0),n>1,l}catch(i){r=i instanceof Error?i:new Error(String(i)),n<this.options.retryCount&&await this.delay(this.options.retryDelay*n)}throw new Error(`Failed to load ${e} after ${this.options.retryCount} attempts: ${(r==null?void 0:r.message)||"Unknown error"}`)}validateContentType(e,t){var i;const r={".pb":["application/octet-stream","application/x-protobuf"],".obj":["text/plain","application/octet-stream"],".json":["application/json","text/plain"],".ply":["application/octet-stream","text/plain"],".npz":["application/octet-stream","application/zip"]},a=(i=e.split(".").pop())==null?void 0:i.toLowerCase(),n=a?r[`.${a}`]:void 0;n&&t&&n.some(o=>t.includes(o))}async delay(e){return new Promise(t=>setTimeout(t,e))}getTotalSizeMB(e){let t=0;for(const r of Object.values(e))r instanceof ArrayBuffer&&(t+=r.byteLength);return(t/(1024*1024)).toFixed(2)}clearCache(){this.cache.clear(),this.loadingPromises.clear()}getCacheStats(){let e=0,t=0;for(const r of this.cache.values())e+=r.byteLength,t++;return{files:t,totalSizeMB:(e/(1024*1024)).toFixed(2),cacheHitRate:this.cache.size>0?(this.cache.size/(this.cache.size+this.loadingPromises.size)*100).toFixed(1):"0"}}async preloadAllResources(e=null){try{const[t,r]=await Promise.all([this.loadTemplateResources(e),this.loadCharacterData(e)]);return{templateResources:t,characterData:r}}catch(t){console.error("❌ Failed to preload resources:",t);const r=t instanceof Error?t.message:String(t);throw new Error(`Resource preloading failed: ${r}`)}}}class te{constructor(e={}){s(this,"options");s(this,"wasmConfig");s(this,"wasmModule");s(this,"memoryManager");s(this,"resourceLoader");s(this,"coreHandle");s(this,"characterHandle");s(this,"animationHandle");s(this,"totalFrames");s(this,"isInitialized");s(this,"isCharacterLoaded");s(this,"api");s(this,"performanceMetrics");s(this,"wasmTime",0);s(this,"errorCodes");s(this,"flameInfo");s(this,"characterInfo");s(this,"flameParamsCache",{exprParams:new Float32Array(100),rotation:new Float32Array(3),translation:new Float32Array(3),neckPose:new Float32Array(3),jawPose:new Float32Array(3),eyesPose:new Float32Array(6),eyelid:new Float32Array(2)});this.options={logLevel:"basic",enableValidation:!0,enablePerformanceMetrics:!0,retryCount:3,baseAssetsPath:"/",modelFolder:"3dgs",wasmPath:"/avatar_core_wasm.wasm",...e},this.wasmConfig=e.wasmConfig||{},this.wasmModule=null,this.memoryManager=null,this.resourceLoader=null,this.coreHandle=null,this.characterHandle=null,this.animationHandle=null,this.totalFrames=null,this.isInitialized=!1,this.isCharacterLoaded=!1,this.api={},this.performanceMetrics={initTime:0,loadTime:0,computeFrames:0,totalComputeTime:0,averageComputeTime:0},this.errorCodes={0:"AVATAR_SUCCESS",1:"AVATAR_ERROR_INVALID_PARAMETER",2:"AVATAR_ERROR_MEMORY_ALLOCATION",3:"AVATAR_ERROR_INVALID_DATA_FORMAT",4:"AVATAR_ERROR_CHARACTER_NOT_FOUND",5:"AVATAR_ERROR_ANIMATION_NOT_FOUND",6:"AVATAR_ERROR_COMPUTATION_FAILED"}}async initialize(e=null){const t=performance.now();try{await this.updateProgress(e,"Initializing WASM module...",10),await this.loadWASMModule(),await this.updateProgress(e,"Loading template resources...",30);const r=await this.resourceLoader.loadTemplateResources();return await this.updateProgress(e,"Initializing Avatar Core...",60),await this.initializeAvatarCore(r),await this.updateProgress(e,"System ready",100),this.isInitialized=!0,this.performanceMetrics.initTime=performance.now()-t,!0}catch(r){console.error("❌ Avatar Core initialization failed:",r);const a=r instanceof Error?r.message:String(r);throw new Error(`Avatar Core initialization failed: ${a}`)}}async loadWASMModule(){try{const{default:e}=await Q(async()=>{const{default:t}=await import("./avatar_core_wasm-BUXZvgBr.js");return{default:t}},[]);this.wasmConfig&&Object.keys(this.wasmConfig).length>0?this.wasmModule=await e(this.wasmConfig):this.wasmModule=await e(),this.validateWASMModule(),this.memoryManager=new K(this.wasmModule),this.resourceLoader=new ee({baseAssetsPath:this.options.baseAssetsPath,modelFolder:this.options.modelFolder,baseUrl:this.wasmConfig.baseUrl}),this.setupCAPIFunctions()}catch(e){const t=e instanceof Error?e.message:String(e);throw new Error(`Failed to load WASM module: ${t}`)}}validateWASMModule(){const e=["cwrap","_malloc","_free","setValue","getValue","writeArrayToMemory"];for(const t of e)if(typeof this.wasmModule[t]!="function")throw new Error(`WASM module missing required function: ${t}`);this.initializeMemoryViews()}initializeMemoryViews(){try{const e=this.wasmModule._malloc(4);if(!e)throw new Error("Memory allocation test failed");const t=305419896;if(this.wasmModule.setValue(e,t,"i32"),this.wasmModule.getValue(e,"i32")!==t)throw new Error("Memory read/write test failed");this.wasmModule._free(e)}catch(e){const t=e instanceof Error?e.message:String(e);throw new Error(`Memory system initialization failed: ${t}`)}}setupCAPIFunctions(){this.api={initialize:this.wasmModule.cwrap("avatar_core_initialize","number",["number"]),release:this.wasmModule.cwrap("avatar_core_release",null,["number"]),getVersion:this.wasmModule.cwrap("avatar_core_get_version","string",[]),getErrorString:this.wasmModule.cwrap("avatar_core_get_error_string","string",["number"]),loadCharacter:this.wasmModule.cwrap("avatar_core_load_character","number",["number","number"]),removeCharacter:this.wasmModule.cwrap("avatar_core_remove_character",null,["number","number"]),getCharacterInfo:this.wasmModule.cwrap("avatar_core_get_character_info","number",["number","number","number"]),loadAnimation:this.wasmModule.cwrap("avatar_core_load_animation","number",["number","number"]),parseAnimationFramesFromFile:this.wasmModule.cwrap("avatar_core_parse_animation_frames_from_file","number",["number","number","number"]),getAnimationFrameCount:this.wasmModule.cwrap("avatar_core_get_animation_frame_count","number",["number","number"]),getFrameFromAnimation:this.wasmModule.cwrap("avatar_core_get_frame_from_animation","number",["number","number","number"]),computeFrameFlat:this.wasmModule.cwrap("avatar_core_compute_frame_as_splat_points_flat","number",["number","number","number","number"]),freeSplatPointsFlat:this.wasmModule.cwrap("avatar_core_free_splat_points_flat",null,["number"]),computeFrameAsMesh:this.wasmModule.cwrap("avatar_core_compute_frame_as_mesh","number",["number","number","number","number"]),freeMeshData:this.wasmModule.cwrap("avatar_core_free_mesh_data",null,["number"]),computeFrameAsFaceGeometry:this.wasmModule.cwrap("avatar_core_compute_frame_as_face_geometry","number",["number","number","number","number"]),freeFaceGeometry:this.wasmModule.cwrap("avatar_core_free_face_geometry",null,["number"]),getOriginalSplats:this.wasmModule.cwrap("avatar_core_get_original_splats","number",["number","number","number"]),freeOriginalSplats:this.wasmModule.cwrap("avatar_core_free_original_splats",null,["number"]),setEyeTrackingConfig:this.wasmModule.cwrap("avatar_core_set_eye_tracking_config","number",["number","number"]),setGazeTarget:this.wasmModule.cwrap("avatar_core_set_gaze_target","number",["number","number","number","number"]),resetEyeTracking:this.wasmModule.cwrap("avatar_core_reset_eye_tracking","number",["number"]),getFlameInfo:this.wasmModule.cwrap("avatar_core_get_flame_info","number",["number","number","number","number"]),getFLAMETemplateData:this.wasmModule.cwrap("avatar_core_get_flame_template_data","number",["number","number","number"]),getCharacterShapeParams:this.wasmModule.cwrap("avatar_core_get_character_shape_params","number",["number","number"])}}async initializeAvatarCore(e){try{const t=this.memoryManager.createTemplateConfig(e),r=this.api.initialize(t);if(!r)throw new Error("avatar_core_initialize returned NULL - initialization failed");this.coreHandle=r,await this.queryFlameInfo()}catch(t){const r=t instanceof Error?t.message:String(t);throw new Error(`Failed to initialize Avatar Core: ${r}`)}}async loadCharacter(e=null){if(!this.isInitialized)throw new Error("Avatar Core not initialized");const t=performance.now();try{await this.updateProgress(e,"Loading character data...",20);const r=await this.resourceLoader.loadCharacterData();await this.updateProgress(e,"Creating character...",60);const a=this.memoryManager.createCharacterData(r.shape,r.pointCloud),n=this.api.loadCharacter(this.coreHandle,a);if(!n)throw new Error("avatar_core_load_character returned NULL - character loading failed");return this.characterHandle=n,this.isCharacterLoaded=!0,await this.queryCharacterInfo(),await this.updateProgress(e,"Character loaded",100),this.performanceMetrics.loadTime=performance.now()-t,!0}catch(r){console.error("❌ Character loading failed:",r);const a=r instanceof Error?r.message:String(r);throw new Error(`Character loading failed: ${a}`)}}async loadAnimationFromData(e){const t=this.memoryManager.allocateAndCopy(e),r=this.wasmModule._malloc(8);this.wasmModule.setValue(r,t.ptr,"i32"),this.wasmModule.setValue(r+4,t.size,"i32");const a=this.api.loadAnimation(this.coreHandle,r);if(this.wasmModule._free(r),!a)throw new Error("avatar_core_load_animation returned NULL");return a}async loadAnimation(){if(this.animationHandle)return this.animationHandle;if(!this.isInitialized)throw new Error("Avatar Core not initialized");try{const e=await this.resourceLoader.loadAnimationData();return this.animationHandle=await this.loadAnimationFromData(e),await this.getAnimationTotalFrames(),this.animationHandle}catch(e){console.error("❌ Failed to load animation:",e);const t=e instanceof Error?e.message:String(e);throw new Error(`Failed to load animation: ${t}`)}}async switchAnimationFile(e){if(!this.isInitialized)throw new Error("Avatar Core not initialized");try{const t=[this.options.baseAssetsPath,this.options.modelFolder,e].map((o,l)=>(l>0&&(o=o.replace(/^\/+/,"")),o=o.replace(/\/+$/,""),o)).filter(o=>o.length>0).join("/"),r=this.wasmConfig.baseUrl?`${this.wasmConfig.baseUrl}${t}`:t,a=await fetch(r);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const n=await a.arrayBuffer(),i=await this.loadAnimationFromData(n);return this.animationHandle=i,this.totalFrames=null,await this.getAnimationTotalFrames(),this.totalFrames}catch(t){console.error(`❌ Failed to switch animation to ${e}:`,t);const r=t instanceof Error?t.message:String(t);throw new Error(`Failed to switch animation: ${r}`)}}async getAnimationTotalFrames(){if(this.totalFrames!==null)return this.totalFrames;if(!this.animationHandle)return await this.loadAnimation(),this.totalFrames;try{const e=this.wasmModule._malloc(4),t=this.api.getAnimationFrameCount(this.animationHandle,e);if(t!==0){this.wasmModule._free(e);const a=this.api.getErrorString(t);throw new Error(`Failed to get animation frame count: ${a}`)}const r=this.wasmModule.getValue(e,"i32");return this.wasmModule._free(e),this.totalFrames=r,r}catch(e){console.error("❌ Failed to get animation frame count:",e);const t=e instanceof Error?e.message:String(e);throw new Error(`Failed to get animation frame count: ${t}`)}}async getAnimationFrameParams(e=0){this.animationHandle||await this.loadAnimation(),this.totalFrames!==null&&this.totalFrames>0&&(e=e%this.totalFrames,e<0&&(e+=this.totalFrames));try{const t=this.wasmModule._malloc(1684),r=this.api.getFrameFromAnimation(this.animationHandle,e,t);if(r!==0){this.wasmModule._free(t);const a=this.api.getErrorString(r);throw new Error(`Failed to get frame ${e}: ${a}`)}return t}catch(t){console.error(`❌ Failed to get animation frame ${e}:`,t);const r=t instanceof Error?t.message:String(t);throw new Error(`Failed to get animation frame ${e}: ${r}`)}}async setGazeTarget(e,t,r){if(!this.isCharacterLoaded)throw new Error("Character not loaded");try{const a=this.api.setGazeTarget(this.coreHandle,e,t,r);return this.checkError(a,"avatar_core_set_gaze_target"),!0}catch(a){console.error("❌ Failed to set gaze target:",a);const n=a instanceof Error?a.message:String(a);throw new Error(`Failed to set gaze target: ${n}`)}}async resetEyeTracking(){if(!this.isCharacterLoaded)throw new Error("Character not loaded");try{const e=this.api.resetEyeTracking(this.coreHandle);return this.checkError(e,"avatar_core_reset_eye_tracking"),!0}catch(e){console.error("❌ Failed to reset eye tracking:",e);const t=e instanceof Error?e.message:String(e);throw new Error(`Failed to reset eye tracking: ${t}`)}}async queryFlameInfo(){try{const e=this.wasmModule._malloc(4),t=this.wasmModule._malloc(4),r=this.wasmModule._malloc(4),a=this.api.getFlameInfo(this.coreHandle,e,t,r);this.checkError(a,"avatar_core_get_flame_info");const n=this.wasmModule.getValue(e,"i32"),i=this.wasmModule.getValue(t,"i32"),o=this.wasmModule.getValue(r,"i32");this.wasmModule._free(e),this.wasmModule._free(t),this.wasmModule._free(r),this.flameInfo={vertexCount:n,faceCount:i,jointCount:o}}catch(e){const t=e instanceof Error?e.message:String(e);console.error("❌ Failed to query FLAME info:",t)}}async queryCharacterInfo(){try{const e=this.wasmModule._malloc(4),t=this.wasmModule._malloc(1),r=this.api.getCharacterInfo(this.characterHandle,e,t);this.checkError(r,"avatar_core_get_character_info");const a=this.wasmModule.getValue(e,"i32"),n=this.wasmModule.getValue(t,"i8")!==0;this.wasmModule._free(e),this.wasmModule._free(t),this.characterInfo={pointCount:a,hasAnimation:n}}catch(e){const t=e instanceof Error?e.message:String(e);console.error("❌ Failed to query character info:",t)}}checkError(e,t){if(e!==0){const r=this.errorCodes[e]||`UNKNOWN_ERROR_${e}`,a=this.api.getErrorString(e);throw console.error(`❌ ${t} failed: code=${e}, name=${r}, message=${a}`),new Error(`${t} failed: ${r} - ${a}`)}}async updateProgress(e,t,r){e&&typeof e=="function"&&e({message:t,progress:r})}getPerformanceMetrics(){var e,t,r,a;return{...this.performanceMetrics,memoryStats:(e=this.memoryManager)==null?void 0:e.getMemoryStats(),cacheStats:(t=this.resourceLoader)==null?void 0:t.getCacheStats(),flameInfo:this.flameInfo,characterInfo:this.characterInfo,version:((a=(r=this.api).getVersion)==null?void 0:a.call(r))||"unknown"}}async release(){try{this.characterHandle&&this.coreHandle&&(this.api.removeCharacter(this.coreHandle,this.characterHandle),this.characterHandle=null,this.isCharacterLoaded=!1),this.coreHandle&&(this.api.release(this.coreHandle),this.coreHandle=null),this.memoryManager&&this.memoryManager.cleanup(),this.resourceLoader&&this.resourceLoader.clearCache(),this.isInitialized=!1}catch(e){console.error("❌ Failed to release resources:",e)}}async loadFlameModel(e){return!0}async load3DGSData(e,t,r){return!0}async computeCompleteFrameFlat(e){if(!this.isCharacterLoaded)throw new Error("Character not loaded");const t=performance.now();let r=null,a=null;try{const n=(e==null?void 0:e.frameIndex)??0;a=await this.getAnimationFrameParams(n),r=this.wasmModule._malloc(16);const i=this.api.computeFrameFlat(this.coreHandle,this.characterHandle,a,r);this.checkError(i,"avatar_core_compute_frame_as_splat_points_flat");const o=this.memoryManager.readSplatPointFlatArray(r),l=performance.now()-t;return this.wasmTime=l,this.performanceMetrics.computeFrames++,this.performanceMetrics.totalComputeTime+=l,this.performanceMetrics.averageComputeTime=this.performanceMetrics.totalComputeTime/this.performanceMetrics.computeFrames,o}catch(n){console.error("❌ computeCompleteFrameFlat failed:",n);const i=n instanceof Error?n.message:String(n);throw new Error(`computeCompleteFrameFlat failed: ${i}`)}finally{r!==null&&(this.api.freeSplatPointsFlat(r),this.wasmModule._free(r)),a!==null&&this.wasmModule._free(a)}}async computeFrameAsMeshFromUserParams(e){if(!this.isCharacterLoaded)throw new Error("Character not loaded");const t=performance.now();let r=null;try{const a=this.convertUserParamsToFlameParams(e),n=this.memoryManager.createFlameParams(a);r=this.wasmModule._malloc(28);const i=this.api.computeFrameAsMesh(this.coreHandle,this.characterHandle,n,r);this.checkError(i,"avatar_core_compute_frame_as_mesh");const o=this.memoryManager.readMeshData(r);this.wasmModule._free(n),this.api.freeMeshData(r);const l=performance.now()-t;return this.performanceMetrics.computeFrames++,this.performanceMetrics.totalComputeTime+=l,this.performanceMetrics.averageComputeTime=this.performanceMetrics.totalComputeTime/this.performanceMetrics.computeFrames,{vertices:o.vertices||new Float32Array,vertexCount:o.vertexCount,faces:o.faces||new Uint32Array,faceCount:o.faceCount,landmarks:o.landmarks||new Float32Array,landmarkCount:o.landmarkCount,computeTime:o.computeTime,totalTime:l}}catch(a){console.error("❌ Mesh computation failed:",a);const n=a instanceof Error?a.message:String(a);throw new Error(`Mesh computation failed: ${n}`)}finally{r!==null&&this.wasmModule._free(r)}}convertUserParamsToFlameParams(e){return{shape_params:e.shape_params||Array(300).fill(0),expr_params:e.expr_params||Array(100).fill(0),rotation:e.rotation||[0,0,0],translation:e.translation||[0,0,0],neck_pose:e.neck_pose||[0,0,0],jaw_pose:e.jaw_pose||[0,0,0],eyes_pose:e.eyes_pose||[0,0,0,0,0,0],eyelid:e.eyelid||[0,0],has_eyelid:e.eyelid&&e.eyelid.length>=2}}async computeFrameAsMesh(e){if(!this.isCharacterLoaded)throw new Error("Character not loaded");const t=performance.now();let r=null;try{const a=this.memoryManager.createFlameParams(e);r=this.wasmModule._malloc(32);const n=this.api.computeFrameAsMesh(this.coreHandle,this.characterHandle,a,r);this.checkError(n,"avatar_core_compute_frame_as_mesh");const i=this.memoryManager.readMeshData(r);this.wasmModule._free(a),this.api.freeMeshData(r);const o=performance.now()-t;return this.performanceMetrics.computeFrames++,this.performanceMetrics.totalComputeTime+=o,this.performanceMetrics.averageComputeTime=this.performanceMetrics.totalComputeTime/this.performanceMetrics.computeFrames,{vertices:i.vertices||new Float32Array,vertexCount:i.vertexCount,faces:i.faces||new Uint32Array,faceCount:i.faceCount,landmarks:i.landmarks||new Float32Array,landmarkCount:i.landmarkCount,computeTime:i.computeTime,totalTime:o}}catch(a){console.error("❌ Mesh computation failed:",a);const n=a instanceof Error?a.message:String(a);throw new Error(`Mesh computation failed: ${n}`)}finally{r!==null&&this.wasmModule._free(r)}}async computeCompleteFrameAsMesh(e){if(!this.isCharacterLoaded)throw new Error("Character not loaded");try{const t=(e==null?void 0:e.frameIndex)??0,r=await this.getAnimationFrameParams(t),a=await this.computeFrameAsMeshWithPtr(r);return this.wasmModule._free(r),a}catch(t){console.error("❌ computeCompleteFrameAsMesh failed:",t);const r=t instanceof Error?t.message:String(t);throw new Error(`computeCompleteFrameAsMesh failed: ${r}`)}}async computeFrameAsMeshWithPtr(e){const t=performance.now();let r=null;try{r=this.wasmModule._malloc(32);const a=this.api.computeFrameAsMesh(this.coreHandle,this.characterHandle,e,r);this.checkError(a,"avatar_core_compute_frame_as_mesh");const n=this.memoryManager.readMeshData(r);(!n.vertices||n.vertices.length===0)&&console.error("❌ [MESH COMPUTE RESULT] No vertices in result!"),this.api.freeMeshData(r);const i=performance.now()-t;return this.performanceMetrics.computeFrames++,this.performanceMetrics.totalComputeTime+=i,this.performanceMetrics.averageComputeTime=this.performanceMetrics.totalComputeTime/this.performanceMetrics.computeFrames,{vertices:n.vertices||new Float32Array,vertexCount:n.vertexCount,faces:n.faces||new Uint32Array,faceCount:n.faceCount,landmarks:n.landmarks||new Float32Array,landmarkCount:n.landmarkCount,computeTime:n.computeTime,totalTime:i}}catch(a){console.error("❌ Mesh computation failed:",a);const n=a instanceof Error?a.message:String(a);throw new Error(`Mesh computation failed: ${n}`)}finally{r!==null&&this.wasmModule._free(r)}}async computeFrameAsFaceGeometry(e){if(!this.isCharacterLoaded)throw new Error("Character not loaded");let t=null,r=null;try{const a=(e==null?void 0:e.frameIndex)??0;r=await this.getAnimationFrameParams(a),t=this.wasmModule._malloc(12);const n=this.api.computeFrameAsFaceGeometry(this.coreHandle,this.characterHandle,r,t);return this.checkError(n,"avatar_core_compute_frame_as_face_geometry"),this.memoryManager.readFaceGeometryArray(t)}catch(a){throw console.error("❌ computeFrameAsFaceGeometry failed:",a),a}finally{r!==null&&this.wasmModule._free(r),t!==null&&(this.api.freeFaceGeometry(t),this.wasmModule._free(t))}}async getFLAMEFrameParams(e=0){if(!this.isCharacterLoaded)throw new Error("Character not loaded");let t=null;try{t=await this.getAnimationFrameParams(e);const r=this.wasmModule.HEAPU8.buffer,a=t+300*4;return this.flameParamsCache.exprParams.set(new Float32Array(r,a,100)),this.flameParamsCache.rotation.set(new Float32Array(r,a+100*4,3)),this.flameParamsCache.translation.set(new Float32Array(r,a+103*4,3)),this.flameParamsCache.neckPose.set(new Float32Array(r,a+106*4,3)),this.flameParamsCache.jawPose.set(new Float32Array(r,a+109*4,3)),this.flameParamsCache.eyesPose.set(new Float32Array(r,a+112*4,6)),this.flameParamsCache.eyelid.set(new Float32Array(r,a+118*4,2)),this.flameParamsCache}catch(r){return console.error("❌ getFLAMEFrameParams failed:",r),null}finally{t!==null&&this.wasmModule._free(t)}}async getCharacterShapeParams(){if(!this.isCharacterLoaded)throw new Error("Character not loaded");let e=null;try{e=this.wasmModule._malloc(300*4);const t=this.api.getCharacterShapeParams(this.characterHandle,e);if(t!==0)throw new Error(`Failed to get character shape params: ${this.api.getErrorString(t)}`);const r=this.wasmModule.HEAPU8.buffer;return new Float32Array(r,e,300).slice()}catch(t){return console.error("❌ getCharacterShapeParams failed:",t),null}finally{e!==null&&this.wasmModule._free(e)}}async getOriginalSplatsData(){if(!this.isCharacterLoaded)throw new Error("Character not loaded");let e=null;try{e=this.wasmModule._malloc(8);const t=this.api.getOriginalSplats(this.coreHandle,this.characterHandle,e);this.checkError(t,"avatar_core_get_original_splats");const r=this.memoryManager.readOriginalSplatArray(e);return r&&console.log(`✅ Loaded ${r.count} original splats for WebGPU (${(r.data.byteLength/1024/1024).toFixed(2)} MB)`),r}catch(t){throw console.error("❌ getOriginalSplatsData failed:",t),t}finally{e!==null&&(this.api.freeOriginalSplats(e),this.wasmModule._free(e))}}async getFLAMETemplateData(){if(!this.isInitialized)throw new Error("Avatar Core not initialized");let e=null;try{e=this.wasmModule._malloc(64);const t=this.api.getFLAMETemplateData(this.coreHandle,this.characterHandle||0,e);this.checkError(t,"avatar_core_get_flame_template_data");const r=this.wasmModule.getValue(e,"i32"),a=this.wasmModule.getValue(e+4,"i32"),n=this.wasmModule.getValue(e+8,"i32"),i=this.wasmModule.getValue(e+12,"i32"),o=this.wasmModule.getValue(e+16,"i32"),l=this.wasmModule.getValue(e+20,"i32"),f=this.wasmModule.getValue(e+24,"i32"),d=this.wasmModule.getValue(e+28,"i32"),h=this.wasmModule.getValue(e+32,"i32"),u=this.wasmModule.getValue(e+36,"i32"),m=this.wasmModule.getValue(e+40,"i32"),P=this.wasmModule.getValue(e+44,"i32"),v=this.wasmModule.getValue(e+48,"i32"),y=this.wasmModule.getValue(e+52,"i32"),p=this.wasmModule.HEAPU8.buffer,b=new Float32Array(p,r,a*3).slice(),$=new Float32Array(p,n,a*3*i).slice(),Y=new Float32Array(p,o,a*3*l).slice(),E=new Float32Array(p,f,d*a).slice(),G=new Float32Array(p,h,a*d).slice(),z=new Int32Array(p,u,d).slice(),U=new Uint32Array(p,m,P*3).slice(),x=v&&y>0?new Float32Array(p,v,y*3).slice():null;console.log("Applying transpose optimization for GPU cache efficiency...");const T=L($,a,i),I=L(Y,a,l),H=(b.byteLength+T.byteLength+I.byteLength+E.byteLength+G.byteLength+z.byteLength+U.byteLength+((x==null?void 0:x.byteLength)||0))/1024/1024;return console.log(`FLAME template data retrieved (${H.toFixed(2)} MB)`),x&&console.log(`  Static offset: ${y} vertices (${(x.byteLength/1024).toFixed(2)} KB)`),{vTemplate:b,vertexCount:a,shapedirs:T,shapeParamCount:i,posedirs:I,poseParamCount:l,jRegressor:E,jointCount:d,lbsWeights:G,parents:z,faces:U,faceCount:P,staticOffset:x,staticOffsetCount:y}}catch(t){throw console.error("getFLAMETemplateData failed:",t),t}finally{e!==null&&this.wasmModule._free(e)}}}function L(c,e,t){const r=performance.now(),a=new Float32Array(e*3*t);console.log(`Transposing blendshape data: ${e}v × 3 × ${t}p`);for(let o=0;o<t;o++){for(let l=0;l<e;l++)for(let f=0;f<3;f++){const d=l*3*t+f*t+o,h=o*e*3+l*3+f;a[h]=c[d]}((o+1)%50===0||o===t-1)&&console.log(`  Progress: ${o+1}/${t} (${((o+1)/t*100).toFixed(1)}%)`)}const n=performance.now()-r;console.log(`Transpose completed in ${n.toFixed(2)}ms`);let i=!0;for(let o=0;o<5;o++){const l=Math.floor(Math.random()*e),f=Math.floor(Math.random()*t),d=Math.floor(Math.random()*3),h=l*3*t+d*t+f,u=f*e*3+l*3+d;if(Math.abs(c[h]-a[u])>1e-6){console.error(`Validation failed at v=${l}, p=${f}, xyz=${d}`),i=!1;break}}return i&&console.log("Transpose validation passed"),a}const re=`#version 300 es
precision highp float;

// 基础四边形顶点属性（共享4个顶点）
layout(location = 0) in vec2 a_quadVertex;      // (-1,-1), (-1,1), (1,-1), (1,1)

// 实例化属性（每个splat实例）
layout(location = 1) in vec3 a_position;        // splat中心位置
layout(location = 2) in vec4 a_color;           // RGBA颜色
layout(location = 3) in vec3 a_covA;            // 协方差矩阵上三角
layout(location = 4) in vec3 a_covB;            // 协方差矩阵下三角

// Uniform变量
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;
uniform vec2 u_screenSize;
uniform int u_enableFrustumCulling;

// 输出到片段着色器
out vec2 v_relativePosition;
out vec4 v_color;

// 常量定义
const float BOUNDS_RADIUS = 3.0;

/**
 * 计算2D协方差矩阵（复刻Metal版本）
 */
vec3 calcCovariance2D(vec3 viewPos, vec3 cov3Da, vec3 cov3Db, mat4 viewMatrix, mat4 projectionMatrix, vec2 screenSize) {
    float invViewPosZ = 1.0 / viewPos.z;
    float invViewPosZSquared = invViewPosZ * invViewPosZ;

    // FOV限制
    float tanHalfFovX = 1.0 / projectionMatrix[0][0];
    float tanHalfFovY = 1.0 / projectionMatrix[1][1];
    float limX = 1.3 * tanHalfFovX;
    float limY = 1.3 * tanHalfFovY;

    viewPos.x = clamp(viewPos.x * invViewPosZ, -limX, limX) * viewPos.z;
    viewPos.y = clamp(viewPos.y * invViewPosZ, -limY, limY) * viewPos.z;

    // 焦距计算
    float focalX = screenSize.x * projectionMatrix[0][0] / 2.0;
    float focalY = screenSize.y * projectionMatrix[1][1] / 2.0;

    // 雅可比矩阵 J
    mat3 J = mat3(
        focalX * invViewPosZ, 0.0, 0.0,
        0.0, focalY * invViewPosZ, 0.0,
        -(focalX * viewPos.x) * invViewPosZSquared, -(focalY * viewPos.y) * invViewPosZSquared, 0.0
    );

    // 视图变换矩阵 W (仅旋转部分) - 固定使用转置（经验最清晰）
    mat3 W = transpose(mat3(viewMatrix[0].xyz, viewMatrix[1].xyz, viewMatrix[2].xyz));

    // 投影变换 T = J * W
    mat3 T = J * W;

    // 3D协方差矩阵 Vrk
    mat3 Vrk = mat3(
        cov3Da.x, cov3Da.y, cov3Da.z,
        cov3Da.y, cov3Db.x, cov3Db.y,
        cov3Da.z, cov3Db.y, cov3Db.z
    );

    // 2D协方差矩阵
    mat3 cov = T * Vrk * transpose(T);

    // 低通滤波器
    cov[0][0] += 0.3;
    cov[1][1] += 0.3;

    return vec3(cov[0][0], cov[0][1], cov[1][1]);
}

/**
 * 分解协方差矩阵
 */
void decomposeCovariance(vec3 cov2D, out vec2 v1, out vec2 v2) {
    float a = cov2D.x;
    float b = cov2D.y;
    float d = cov2D.z;

    float det = a * d - b * b;
    float trace = a + d;

    float mean = 0.5 * trace;
    float dist = max(0.1, sqrt(mean * mean - det));

    // 特征值
    float lambda1 = mean + dist;
    float lambda2 = mean - dist;

    // 确保特征值为正
    lambda1 = max(lambda1, 0.01);
    lambda2 = max(lambda2, 0.01);

    // 特征向量 - 完全复刻MetalSplatter的算法
    vec2 eigenvector1;
    if (abs(b) < 1e-6) {
        eigenvector1 = (a > d) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    } else {
        // ✅ 修复：使用MetalSplatter的公式 (b, d - lambda2) 而不是 (b, lambda1 - a)
        eigenvector1 = normalize(vec2(b, d - lambda2));
    }

    // ✅ 修复：正交特征向量，使用MetalSplatter的方向 (y, -x) 而不是 (-y, x)
    vec2 eigenvector2 = vec2(eigenvector1.y, -eigenvector1.x);

    v1 = eigenvector1 * sqrt(lambda1);
    v2 = eigenvector2 * sqrt(lambda2);
}

void main() {
    // 直接使用原始位置数据，不进行硬编码缩放
    vec3 scaledPosition = a_position;

    // 转换到视图空间
    vec4 viewPosition4 = u_viewMatrix * vec4(scaledPosition, 1.0);
    vec3 viewPosition3 = viewPosition4.xyz;

    // 计算2D协方差矩阵
    vec3 cov2D = calcCovariance2D(viewPosition3, a_covA, a_covB, u_viewMatrix, u_projectionMatrix, u_screenSize);

    // 分解协方差矩阵
    vec2 axis1, axis2;
    decomposeCovariance(cov2D, axis1, axis2);

    // 投影到屏幕空间
    vec4 projectedCenter = u_projectionMatrix * viewPosition4;

    // 视锥体剔除（对齐MetalSplatter边界，可调试禁用）
    if (u_enableFrustumCulling == 1) {
        float bounds = 1.2 * projectedCenter.w;
        if (projectedCenter.z < 0.0 ||
            projectedCenter.z > projectedCenter.w ||
            projectedCenter.x < -bounds ||
            projectedCenter.x > bounds ||
            projectedCenter.y < -bounds ||
            projectedCenter.y > bounds) {
            // 剔除到屏幕外
            gl_Position = vec4(1.0, 1.0, 0.0, 1.0);
            return;
        }
    }

    // 使用实例化的四边形顶点
    vec2 relativeCoord = a_quadVertex;

    // 计算椭圆变换后的相对位置（像素单位）
    vec2 ellipseRelativePos = relativeCoord.x * axis1 + relativeCoord.y * axis2;

    // 计算屏幕空间偏移
    vec2 screenSizeFloat = u_screenSize;
    vec2 projectedScreenDelta = ellipseRelativePos * 2.0 * BOUNDS_RADIUS / screenSizeFloat;

    // 最终顶点位置
    gl_Position = vec4(
        projectedCenter.x + projectedScreenDelta.x * projectedCenter.w,
        projectedCenter.y + projectedScreenDelta.y * projectedCenter.w,
        projectedCenter.z,
        projectedCenter.w
    );

    // 传递标准化坐标给片段着色器（椭圆内[-1,1]范围）
    v_relativePosition = relativeCoord * BOUNDS_RADIUS;
    v_color = a_color;
}
`,ae=`#version 300 es
precision highp float;

in vec2 v_relativePosition;
in vec4 v_color;

out vec4 fragColor;

const float BOUNDS_RADIUS = 3.0;
const float BOUNDS_RADIUS_SQUARED = BOUNDS_RADIUS * BOUNDS_RADIUS;

float splatFragmentAlpha(vec2 relativePosition, float splatAlpha) {
    // ✅ 修复：完全匹配MetalSplatter的计算方式
    float negativeMagnitudeSquared = -dot(relativePosition, relativePosition);

    // 边界检查：超出椭圆边界的点被剔除
    if (negativeMagnitudeSquared < -BOUNDS_RADIUS_SQUARED) {
        return 0.0;
    }

    // ✅ 修复：高斯衰减，使用MetalSplatter的公式 exp(0.5 * negative)
    return exp(0.5 * negativeMagnitudeSquared) * splatAlpha;
}

void main() {
    float alpha = splatFragmentAlpha(v_relativePosition, v_color.a);

    // 非预乘alpha输出，标准alpha混合
    fragColor = vec4(v_color.rgb, alpha);
}
`;class ne{constructor(e,t){s(this,"canvas");s(this,"backgroundColor");s(this,"gl");s(this,"shaderProgram");s(this,"uniformLocations");s(this,"attributeLocations");s(this,"splatBuffer");s(this,"quadVertexBuffer");s(this,"vertexArray");s(this,"splatCount");s(this,"isInitialized");s(this,"splatBufferSize");this.canvas=e,this.backgroundColor=t||[1,1,1,1],this.gl=null,this.shaderProgram=null,this.uniformLocations={},this.attributeLocations={},this.splatBuffer=null,this.quadVertexBuffer=null,this.vertexArray=null,this.splatCount=0,this.isInitialized=!1,this.splatBufferSize=0}async initialize(){try{if(this.gl=this.canvas.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),!this.gl)throw new Error("WebGL2 not supported");const e=this.gl;this.shaderProgram=this.createShaderProgram(e),this.setupShaderLocations(),this.setupWebGLState(),this.createBuffers(),this.isInitialized=!0,console.log("🔧 WebGL Renderer: Using CPU Radix Sort")}catch(e){throw e}}setupShaderLocations(){const e=this.gl;if(!e)throw new Error("WebGL context not initialized");const t=this.shaderProgram;if(!t)throw new Error("Shader program not initialized");this.uniformLocations={viewMatrix:e.getUniformLocation(t,"u_viewMatrix"),projectionMatrix:e.getUniformLocation(t,"u_projectionMatrix"),screenSize:e.getUniformLocation(t,"u_screenSize"),enableFrustumCulling:e.getUniformLocation(t,"u_enableFrustumCulling")},this.attributeLocations={quadVertex:0,position:1,color:2,covA:3,covB:4}}setupWebGLState(){const e=this.gl;if(!e)throw new Error("WebGL context not initialized");e.disable(e.DEPTH_TEST),e.depthMask(!0),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.clearColor(this.backgroundColor[0],this.backgroundColor[1],this.backgroundColor[2],this.backgroundColor[3])}createBuffers(){const e=this.gl;if(!e)throw new Error("WebGL context not initialized");this.vertexArray=e.createVertexArray(),this.splatBuffer=e.createBuffer(),this.createQuadVertexBuffer()}createQuadVertexBuffer(){const e=this.gl;if(!e)throw new Error("WebGL context not initialized");const t=new Float32Array([-1,-1,-1,1,1,-1,1,1]);this.quadVertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVertexBuffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}loadSplatsFromPackedData(e,t,r){if(!this.isInitialized)throw new Error("Renderer not initialized");this.splatCount=t,this.uploadToGPU(e)}uploadToGPU(e){const t=this.gl;if(!t)throw new Error("WebGL context not initialized");t.bindBuffer(t.ARRAY_BUFFER,this.splatBuffer),this.splatBufferSize!==e.byteLength?(t.bufferData(t.ARRAY_BUFFER,e,t.DYNAMIC_DRAW),this.splatBufferSize=e.byteLength):t.bufferSubData(t.ARRAY_BUFFER,0,e)}setupVertexAttributes(){const e=this.gl;if(!e)throw new Error("WebGL context not initialized");e.bindVertexArray(this.vertexArray),e.bindBuffer(e.ARRAY_BUFFER,this.quadVertexBuffer),e.enableVertexAttribArray(this.attributeLocations.quadVertex),e.vertexAttribPointer(this.attributeLocations.quadVertex,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.splatBuffer);const t=13,r=4,a=t*r;e.enableVertexAttribArray(this.attributeLocations.position),e.vertexAttribPointer(this.attributeLocations.position,3,e.FLOAT,!1,a,0),e.vertexAttribDivisor(this.attributeLocations.position,1),e.enableVertexAttribArray(this.attributeLocations.color),e.vertexAttribPointer(this.attributeLocations.color,4,e.FLOAT,!1,a,3*r),e.vertexAttribDivisor(this.attributeLocations.color,1),e.enableVertexAttribArray(this.attributeLocations.covA),e.vertexAttribPointer(this.attributeLocations.covA,3,e.FLOAT,!1,a,7*r),e.vertexAttribDivisor(this.attributeLocations.covA,1),e.enableVertexAttribArray(this.attributeLocations.covB),e.vertexAttribPointer(this.attributeLocations.covB,3,e.FLOAT,!1,a,10*r),e.vertexAttribDivisor(this.attributeLocations.covB,1)}render(e,t,r){if(!this.isInitialized||this.splatCount===0)return;const a=this.gl;if(!a)throw new Error("WebGL context not initialized");a.viewport(0,0,r[0],r[1]),a.clearColor(this.backgroundColor[0],this.backgroundColor[1],this.backgroundColor[2],this.backgroundColor[3]),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.useProgram(this.shaderProgram),a.uniformMatrix4fv(this.uniformLocations.viewMatrix,!1,e),a.uniformMatrix4fv(this.uniformLocations.projectionMatrix,!1,t),a.uniform2fv(this.uniformLocations.screenSize,r),a.uniform1i(this.uniformLocations.enableFrustumCulling,1),this.setupVertexAttributes(),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,this.splatCount)}createShaderProgram(e){const t=e.createShader(e.VERTEX_SHADER);if(!t)throw new Error("Failed to create vertex shader");if(e.shaderSource(t,re),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){const n=e.getShaderInfoLog(t);throw e.deleteShader(t),new Error("顶点着色器编译失败: "+n)}const r=e.createShader(e.FRAGMENT_SHADER);if(!r)throw e.deleteShader(t),new Error("Failed to create fragment shader");if(e.shaderSource(r,ae),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const n=e.getShaderInfoLog(r);throw e.deleteShader(t),e.deleteShader(r),new Error("片段着色器编译失败: "+n)}const a=e.createProgram();if(!a)throw e.deleteShader(t),e.deleteShader(r),new Error("Failed to create shader program");if(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const n=e.getProgramInfoLog(a);throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(a),new Error("着色器程序链接失败: "+n)}return e.deleteShader(t),e.deleteShader(r),a}dispose(){if(!this.gl)return;const e=this.gl;this.splatBuffer&&e.deleteBuffer(this.splatBuffer),this.quadVertexBuffer&&e.deleteBuffer(this.quadVertexBuffer),this.vertexArray&&e.deleteVertexArray(this.vertexArray),this.shaderProgram&&e.deleteProgram(this.shaderProgram),this.isInitialized=!1}}const se=`/**
 * WebGPU 3DGS 渲染着色器
 *
 * 实例化渲染：每个 splat 绘制一个四边形
 * 对应 WebGL 版本的 GLSL 着色器
 */

// ============ Uniform Bindings ============

struct Uniforms {
  viewMatrix: mat4x4f,
  projectionMatrix: mat4x4f,
  screenSize: vec2f,
  enableFrustumCulling: u32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

// ============ Storage Buffer Bindings (间接索引渲染) ============

@group(1) @binding(0) var<storage, read> sortIndices: array<u32>;
@group(1) @binding(1) var<storage, read> splatData: array<f32>;

// ============ Vertex Shader ============

struct VertexInput {
  // 共享四边形顶点 (per-vertex)
  @location(0) quadVertex: vec2f,
}

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) relativePosition: vec2f,
  @location(1) color: vec4f,
}

// 常量定义
const BOUNDS_RADIUS: f32 = 3.0;

/**
 * 计算2D协方差矩阵（复刻 WebGL 版本）
 */
fn calcCovariance2D(
  viewPos: vec3f,
  cov3Da: vec3f,
  cov3Db: vec3f,
  viewMatrix: mat4x4f,
  projectionMatrix: mat4x4f,
  screenSize: vec2f
) -> vec3f {
  let invViewPosZ = 1.0 / viewPos.z;
  let invViewPosZSquared = invViewPosZ * invViewPosZ;

  // FOV 限制
  let tanHalfFovX = 1.0 / projectionMatrix[0][0];
  let tanHalfFovY = 1.0 / projectionMatrix[1][1];
  let limX = 1.3 * tanHalfFovX;
  let limY = 1.3 * tanHalfFovY;

  var clampedViewPos = viewPos;
  clampedViewPos.x = clamp(viewPos.x * invViewPosZ, -limX, limX) * viewPos.z;
  clampedViewPos.y = clamp(viewPos.y * invViewPosZ, -limY, limY) * viewPos.z;

  // 焦距计算
  let focalX = screenSize.x * projectionMatrix[0][0] / 2.0;
  let focalY = screenSize.y * projectionMatrix[1][1] / 2.0;

  // 雅可比矩阵 J
  let J = mat3x3f(
    focalX * invViewPosZ, 0.0, -(focalX * clampedViewPos.x) * invViewPosZSquared,
    0.0, focalY * invViewPosZ, -(focalY * clampedViewPos.y) * invViewPosZSquared,
    0.0, 0.0, 0.0
  );

  // 视图变换矩阵 W (仅旋转部分) - 转置
  let W = transpose(mat3x3f(
    viewMatrix[0].xyz,
    viewMatrix[1].xyz,
    viewMatrix[2].xyz
  ));

  // 投影变换 T = J * W
  let T = J * W;

  // 3D 协方差矩阵 Vrk（对称矩阵）
  let Vrk = mat3x3f(
    cov3Da.x, cov3Da.y, cov3Da.z,
    cov3Da.y, cov3Db.x, cov3Db.y,
    cov3Da.z, cov3Db.y, cov3Db.z
  );

  // 2D 协方差矩阵: cov = T * Vrk * T^T
  let cov = T * Vrk * transpose(T);

  // 低通滤波器
  var result = vec3f(cov[0][0], cov[0][1], cov[1][1]);
  result.x += 0.3;
  result.z += 0.3;

  return result;
}

/**
 * 分解协方差矩阵
 */
fn decomposeCovariance(cov2D: vec3f) -> array<vec2f, 2> {
  let a = cov2D.x;
  let b = cov2D.y;
  let d = cov2D.z;

  let det = a * d - b * b;
  let trace = a + d;

  let mean = 0.5 * trace;
  let dist = max(0.1, sqrt(mean * mean - det));

  // 特征值
  var lambda1 = mean + dist;
  var lambda2 = mean - dist;

  // 确保特征值为正
  lambda1 = max(lambda1, 0.01);
  lambda2 = max(lambda2, 0.01);

  // 特征向量（复刻 WebGL MetalSplatter 算法）
  var eigenvector1: vec2f;
  if (abs(b) < 1e-6) {
    eigenvector1 = select(vec2f(0.0, 1.0), vec2f(1.0, 0.0), a > d);
  } else {
    eigenvector1 = normalize(vec2f(b, d - lambda2));
  }

  // 正交特征向量
  let eigenvector2 = vec2f(eigenvector1.y, -eigenvector1.x);

  let v1 = eigenvector1 * sqrt(lambda1);
  let v2 = eigenvector2 * sqrt(lambda2);

  return array<vec2f, 2>(v1, v2);
}

@vertex
fn vertexMain(
  input: VertexInput,
  @builtin(instance_index) instanceIndex: u32
) -> VertexOutput {
  var output: VertexOutput;

  // 🚀 间接索引：通过排序索引读取实际数据
  let sortedIdx = sortIndices[instanceIndex];
  let dataOffset = sortedIdx * 13u;

  // 从 storage buffer 读取 splat 数据
  let position = vec3f(
    splatData[dataOffset + 0u],
    splatData[dataOffset + 1u],
    splatData[dataOffset + 2u]
  );
  let color = vec4f(
    splatData[dataOffset + 3u],
    splatData[dataOffset + 4u],
    splatData[dataOffset + 5u],
    splatData[dataOffset + 6u]
  );
  let covA = vec3f(
    splatData[dataOffset + 7u],
    splatData[dataOffset + 8u],
    splatData[dataOffset + 9u]
  );
  let covB = vec3f(
    splatData[dataOffset + 10u],
    splatData[dataOffset + 11u],
    splatData[dataOffset + 12u]
  );

  // 转换到视图空间
  let viewPosition4 = uniforms.viewMatrix * vec4f(position, 1.0);
  let viewPosition3 = viewPosition4.xyz;

  // 计算 2D 协方差矩阵
  let cov2D = calcCovariance2D(
    viewPosition3,
    covA,
    covB,
    uniforms.viewMatrix,
    uniforms.projectionMatrix,
    uniforms.screenSize
  );

  // 分解协方差矩阵
  let axes = decomposeCovariance(cov2D);
  let axis1 = axes[0];
  let axis2 = axes[1];

  // 投影到屏幕空间
  let projectedCenter = uniforms.projectionMatrix * viewPosition4;

  // 视锥体剔除
  if (uniforms.enableFrustumCulling == 1u) {
    let bounds = 1.2 * projectedCenter.w;
    if (projectedCenter.z < 0.0 ||
        projectedCenter.z > projectedCenter.w ||
        projectedCenter.x < -bounds ||
        projectedCenter.x > bounds ||
        projectedCenter.y < -bounds ||
        projectedCenter.y > bounds) {
      // 剔除到屏幕外
      output.position = vec4f(2.0, 2.0, 0.0, 1.0);
      output.relativePosition = vec2f(0.0);
      output.color = vec4f(0.0);
      return output;
    }
  }

  // 使用实例化的四边形顶点
  let relativeCoord = input.quadVertex;

  // 计算椭圆变换后的相对位置（像素单位）
  let ellipseRelativePos = relativeCoord.x * axis1 + relativeCoord.y * axis2;

  // 计算屏幕空间偏移
  let projectedScreenDelta = ellipseRelativePos * 2.0 * BOUNDS_RADIUS / uniforms.screenSize;

  // 最终顶点位置
  output.position = vec4f(
    projectedCenter.x + projectedScreenDelta.x * projectedCenter.w,
    projectedCenter.y + projectedScreenDelta.y * projectedCenter.w,
    projectedCenter.z,
    projectedCenter.w
  );

  // 传递给 fragment shader
  output.relativePosition = relativeCoord * BOUNDS_RADIUS;
  output.color = color;

  return output;
}

// ============ Fragment Shader ============

const BOUNDS_RADIUS_SQUARED: f32 = BOUNDS_RADIUS * BOUNDS_RADIUS;

fn splatFragmentAlpha(relativePosition: vec2f, splatAlpha: f32) -> f32 {
  // 复刻 WebGL MetalSplatter 计算方式
  let negativeMagnitudeSquared = -dot(relativePosition, relativePosition);

  // 边界检查：超出椭圆边界的点被剔除
  if (negativeMagnitudeSquared < -BOUNDS_RADIUS_SQUARED) {
    return 0.0;
  }

  // 高斯衰减
  return exp(0.5 * negativeMagnitudeSquared) * splatAlpha;
}

@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
  let alpha = splatFragmentAlpha(input.relativePosition, input.color.a);

  // 非预乘 alpha 输出，标准 alpha 混合
  return vec4f(input.color.rgb, alpha);
}
`,ie=`/**
 * WebGPU 3DGS Transform Compute Shader
 *
 * 功能: 在GPU上执行3DGS变换 + 协方差计算
 * 输入: Original Splats (110K点) + Face Geometry (15.4K面)
 * 输出: Transformed Splats with Covariance (GPU格式)
 */

// ============================================================================
// 数据结构定义
// ============================================================================

// ============================================================================
// Bindings (使用flat array避免struct padding问题)
// ============================================================================

// Original Splats: 每个splat 16 floats (64 bytes紧密排列)
// [position.xyz, scale.xyz, rotation.xyzw, color.rgba, opacity, binding(as float)]
@group(0) @binding(0) var<storage, read> originalSplatsData: array<f32>;

// Face Geometries: 每个face 8 floats (32 bytes紧密排列)
// [center.xyz, scale, quat.xyzw]
@group(0) @binding(1) var<storage, read> faceGeometriesData: array<f32>;

// 输出为flat float array: [pos.xyz, color.rgba, cov[6]] = 13 floats per splat
@group(0) @binding(2) var<storage, read_write> transformedData: array<f32>;

// 🚀 性能优化: 单独输出紧凑的positions (用于排序)
// [xyz] = 3 floats per splat
@group(0) @binding(3) var<storage, read_write> positionsOutput: array<f32>;

// 🆕 GPU排序优化: ViewMatrix uniform (用于计算view-space depth)
struct Uniforms {
  viewMatrix: mat4x4f,
}
@group(0) @binding(4) var<uniform> uniforms: Uniforms;

// 🆕 GPU排序优化: 输出深度值 (Uint32格式, 已处理降序)
@group(0) @binding(5) var<storage, read_write> depthsOutput: array<u32>;

// ============================================================================
// 辅助函数
// ============================================================================

/**
 * 四元数归一化
 */
fn normalizeQuaternion(q: vec4f) -> vec4f {
  let norm = length(q);
  if (norm < 1e-8) {
    return vec4f(0.0, 0.0, 0.0, 1.0); // 单位四元数
  }
  return q / norm;
}

/**
 * 四元数乘法 (q1 * q2)
 * 注意: 四元数乘法不可交换
 */
fn multiplyQuaternions(q1: vec4f, q2: vec4f) -> vec4f {
  return vec4f(
    q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y,  // x
    q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x,  // y
    q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w,  // z
    q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z   // w
  );
}

/**
 * 用四元数旋转向量
 * v_rotated = q * v * q_conjugate
 */
fn rotateVectorByQuaternion(q: vec4f, v: vec3f) -> vec3f {
  // 优化版本: v' = v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v)
  let qxyz = q.xyz;
  let qw = q.w;
  let t = 2.0 * cross(qxyz, v);
  return v + qw * t + cross(qxyz, t);
}

/**
 * 将四元数转换为3x3旋转矩阵
 * ⚠️ CRITICAL: C++存储的是TRANSPOSED matrix！
 * 所以quaternion → matrix转换后需要再次转置才能匹配C++的orientation_mat
 */
fn quaternionToMatrix(q: vec4f) -> mat3x3f {
  let qx = q.x;
  let qy = q.y;
  let qz = q.z;
  let qw = q.w;

  // 标准quaternion到matrix转换
  let m00 = 1.0 - 2.0 * (qy*qy + qz*qz);
  let m01 = 2.0 * (qx*qy - qz*qw);
  let m02 = 2.0 * (qx*qz + qy*qw);

  let m10 = 2.0 * (qx*qy + qz*qw);
  let m11 = 1.0 - 2.0 * (qx*qx + qz*qz);
  let m12 = 2.0 * (qy*qz - qx*qw);

  let m20 = 2.0 * (qx*qz - qy*qw);
  let m21 = 2.0 * (qy*qz + qx*qw);
  let m22 = 1.0 - 2.0 * (qx*qx + qy*qy);

  // WGSL mat3x3f is column-major
  // Standard quaternion-to-matrix conversion (no transpose)
  return mat3x3f(
    vec3f(m00, m10, m20),  // column 0
    vec3f(m01, m11, m21),  // column 1
    vec3f(m02, m12, m22)   // column 2
  );
}

/**
 * 从四元数构建旋转矩阵并计算协方差
 * Covariance = (R*S) * (R*S)^T
 */
fn computeCovariance3D(scale: vec3f, rotation: vec4f) -> array<f32, 6> {
  // 1. 归一化四元数
  let q = normalizeQuaternion(rotation);
  let qx = q.x;
  let qy = q.y;
  let qz = q.z;
  let qw = q.w;

  // 2. 构建旋转矩阵 R (3x3)
  let r00 = 1.0 - 2.0 * (qy*qy + qz*qz);
  let r01 = 2.0 * (qx*qy - qz*qw);
  let r02 = 2.0 * (qx*qz + qy*qw);

  let r10 = 2.0 * (qx*qy + qz*qw);
  let r11 = 1.0 - 2.0 * (qx*qx + qz*qz);
  let r12 = 2.0 * (qy*qz - qx*qw);

  let r20 = 2.0 * (qx*qz - qy*qw);
  let r21 = 2.0 * (qy*qz + qx*qw);
  let r22 = 1.0 - 2.0 * (qx*qx + qy*qy);

  // 3. 计算 R * S
  let sx = scale.x;
  let sy = scale.y;
  let sz = scale.z;

  let rs00 = r00 * sx;
  let rs01 = r01 * sy;
  let rs02 = r02 * sz;

  let rs10 = r10 * sx;
  let rs11 = r11 * sy;
  let rs12 = r12 * sz;

  let rs20 = r20 * sx;
  let rs21 = r21 * sy;
  let rs22 = r22 * sz;

  // 4. 计算协方差矩阵上三角 = (R*S) * (R*S)^T
  var cov: array<f32, 6>;
  cov[0] = rs00*rs00 + rs01*rs01 + rs02*rs02;  // cov[0][0]
  cov[1] = rs00*rs10 + rs01*rs11 + rs02*rs12;  // cov[0][1]
  cov[2] = rs00*rs20 + rs01*rs21 + rs02*rs22;  // cov[0][2]
  cov[3] = rs10*rs10 + rs11*rs11 + rs12*rs12;  // cov[1][1]
  cov[4] = rs10*rs20 + rs11*rs21 + rs12*rs22;  // cov[1][2]
  cov[5] = rs20*rs20 + rs21*rs21 + rs22*rs22;  // cov[2][2]

  return cov;
}

/**
 * 计算可排序深度
 *
 * View space: Z轴负方向，物体Z < 0，越远越小
 * RadixSort: ascending (小到大)
 * 目标: far-to-near (远到近)
 *
 * depth = viewPos.z (负数，远点如-10，近点如-2)
 * 转sortable: 负数小 → sortable小
 * Ascending: 小在前 → 远在前 ✅
 *
 * 🚀 优化: 只需要 viewPos.z，因此只提取 viewMatrix 第3行的点积
 * viewPos.z = row3 · [worldPosition, 1]
 */
fn computeSortableDepth(worldPosition: vec3f) -> u32 {
  // 🚀 优化: 直接计算 viewPos.z，无需完整矩阵乘法
  // WGSL 列主序: uniforms.viewMatrix[col][row]
  // 第3行 = [viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2], viewMatrix[3][2]]
  let depth = uniforms.viewMatrix[0][2] * worldPosition.x +
              uniforms.viewMatrix[1][2] * worldPosition.y +
              uniforms.viewMatrix[2][2] * worldPosition.z +
              uniforms.viewMatrix[3][2];

  let depthBits = bitcast<u32>(depth);
  let depthSortable = depthBits ^ select(0x80000000u, 0xffffffffu, depth < 0.0);
  return depthSortable;
}

// ============================================================================
// Compute Shader Main
// ============================================================================

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) global_id: vec3u) {
  let idx = global_id.x;

  // 边界检查 (originalSplatsData长度 / 16 = splat数量)
  let splatCount = arrayLength(&originalSplatsData) / 16u;
  if (idx >= splatCount) {
    return;
  }

  // ============================================================================
  // 读取Original Splat (16 floats per splat)
  // [position.xyz, scale.xyz, rotation.xyzw, color.rgba, opacity, binding]
  // ============================================================================
  let splatOffset = idx * 16u;

  let position = vec3f(
    originalSplatsData[splatOffset + 0u],
    originalSplatsData[splatOffset + 1u],
    originalSplatsData[splatOffset + 2u]
  );

  let scale = vec3f(
    originalSplatsData[splatOffset + 3u],
    originalSplatsData[splatOffset + 4u],
    originalSplatsData[splatOffset + 5u]
  );

  let rotation = vec4f(
    originalSplatsData[splatOffset + 6u],
    originalSplatsData[splatOffset + 7u],
    originalSplatsData[splatOffset + 8u],
    originalSplatsData[splatOffset + 9u]
  );

  let color = vec4f(
    originalSplatsData[splatOffset + 10u],
    originalSplatsData[splatOffset + 11u],
    originalSplatsData[splatOffset + 12u],
    originalSplatsData[splatOffset + 13u]
  );

  let opacity = originalSplatsData[splatOffset + 14u];
  let binding = i32(originalSplatsData[splatOffset + 15u]);

  // ============================================================================
  // 获取绑定的Face Geometry (带边界检查)
  // ============================================================================
  let faceCount = arrayLength(&faceGeometriesData) / 8u;
  if (binding < 0 || u32(binding) >= faceCount) {
    // 绑定无效,跳过 (设置为无效点)
    let baseOffset = idx * 13u;
    for (var i = 0u; i < 13u; i++) {
      transformedData[baseOffset + i] = 0.0;
    }
    return;
  }

  // ============================================================================
  // 读取Face Geometry (8 floats per face)
  // [center.xyz, scale, quat.xyzw]
  // ============================================================================
  let faceOffset = u32(binding) * 8u;

  let faceCenter = vec3f(
    faceGeometriesData[faceOffset + 0u],
    faceGeometriesData[faceOffset + 1u],
    faceGeometriesData[faceOffset + 2u]
  );

  let faceScale = faceGeometriesData[faceOffset + 3u];

  let faceQuat = vec4f(
    faceGeometriesData[faceOffset + 4u],
    faceGeometriesData[faceOffset + 5u],
    faceGeometriesData[faceOffset + 6u],
    faceGeometriesData[faceOffset + 7u]
  );

  // ============================================================================
  // 1. 位置变换: position = orientation_mat * (original_pos * face_scale) + face_center
  //    匹配C++: transformed_splat.position = face_geometry.orientation_mat * original_splat.position * face_geometry.scaling + face_geometry.center;
  // ============================================================================
  let orientationMat = quaternionToMatrix(faceQuat);
  let scaledPosition = position * faceScale;
  let rotated = orientationMat * scaledPosition;
  let transformedPosition = rotated + faceCenter;

  // ============================================================================
  // 2. 缩放变换: scale = original_scale * face_scale
  // ============================================================================
  let transformedScale = scale * faceScale;

  // ============================================================================
  // 3. 旋转变换: rotation = quat_multiply(normalize(original_rotation), face_quat)
  // ============================================================================
  let normalizedOriginalRotation = normalizeQuaternion(rotation);
  let transformedRotation = multiplyQuaternions(normalizedOriginalRotation, faceQuat);

  // ============================================================================
  // 4. 计算3D协方差矩阵
  // ============================================================================
  let covariance = computeCovariance3D(transformedScale, transformedRotation);

  // ============================================================================
  // 5. 输出结果到flat array (13 floats per splat)
  // ============================================================================
  let baseOffset = idx * 13u;

  // position[3]
  transformedData[baseOffset + 0u] = transformedPosition.x;
  transformedData[baseOffset + 1u] = transformedPosition.y;
  transformedData[baseOffset + 2u] = transformedPosition.z;

  // color[4]: 从SH 0阶系数转换为RGB
  // SH_C0 = 0.28209479177387814
  // RGB = SH_C0 * sh[0] + 0.5
  let SH_C0 = 0.28209479177387814;
  let r = clamp(SH_C0 * color.r + 0.5, 0.0, 1.0);
  let g = clamp(SH_C0 * color.g + 0.5, 0.0, 1.0);
  let b = clamp(SH_C0 * color.b + 0.5, 0.0, 1.0);

  transformedData[baseOffset + 3u] = r;
  transformedData[baseOffset + 4u] = g;
  transformedData[baseOffset + 5u] = b;
  transformedData[baseOffset + 6u] = opacity;

  // covariance[6]
  transformedData[baseOffset + 7u] = covariance[0];
  transformedData[baseOffset + 8u] = covariance[1];
  transformedData[baseOffset + 9u] = covariance[2];
  transformedData[baseOffset + 10u] = covariance[3];
  transformedData[baseOffset + 11u] = covariance[4];
  transformedData[baseOffset + 12u] = covariance[5];

  // ============================================================================
  // 6. 🚀 同时输出紧凑的positions (用于排序，零额外开销)
  // ============================================================================
  let posOffset = idx * 3u;
  positionsOutput[posOffset + 0u] = transformedPosition.x;
  positionsOutput[posOffset + 1u] = transformedPosition.y;
  positionsOutput[posOffset + 2u] = transformedPosition.z;

  // ============================================================================
  // 7. 🆕 GPU排序优化: 输出可排序深度值 (Uint32, 降序)
  // ============================================================================
  depthsOutput[idx] = computeSortableDepth(transformedPosition);
}
`;class oe{constructor(e){s(this,"device");s(this,"computePipeline",null);s(this,"bindGroup",null);s(this,"originalSplatsBuffer",null);s(this,"faceGeometryBuffer",null);s(this,"transformedOutputBuffer",null);s(this,"positionsOutputBuffer",null);s(this,"viewMatrixBuffer",null);s(this,"depthsOutputBuffer",null);s(this,"splatCount",0);s(this,"faceCount",0);s(this,"faceGeometryStagingBuffer",null);s(this,"usesExternalFaceGeometryBuffer",!1);this.device=e}async initialize(){const e=this.device.createShaderModule({label:"Transform Compute Shader",code:ie});this.computePipeline=await this.device.createComputePipelineAsync({label:"Transform Compute Pipeline",layout:"auto",compute:{module:e,entryPoint:"main"}})}uploadOriginalSplats(e,t){if(!this.device)throw new Error("Device not initialized");this.splatCount=t;const r=e.byteLength;this.originalSplatsBuffer&&this.originalSplatsBuffer.destroy(),this.originalSplatsBuffer=this.device.createBuffer({label:"Original Splats Buffer",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.originalSplatsBuffer,0,e.buffer,e.byteOffset,e.byteLength),this.createTransformedOutputBuffer(),this.createViewMatrixBuffer()}setFaceGeometryBufferFromGPU(e,t){if(!this.device)throw new Error("Device not initialized");this.faceGeometryBuffer&&!this.usesExternalFaceGeometryBuffer&&this.faceGeometryBuffer.destroy(),this.faceGeometryBuffer=e,this.faceCount=t,this.usesExternalFaceGeometryBuffer=!0,this.createBindGroup()}updateFaceGeometry(e){if(!this.device)throw new Error("Device not initialized");const t=e.length/8,r=e.byteLength;if((!this.faceGeometryBuffer||this.faceCount!==t||this.usesExternalFaceGeometryBuffer)&&(this.faceCount=t,this.faceGeometryBuffer&&!this.usesExternalFaceGeometryBuffer&&this.faceGeometryBuffer.destroy(),this.faceGeometryBuffer=this.device.createBuffer({label:"Face Geometry Buffer (CPU path)",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.usesExternalFaceGeometryBuffer=!1,this.createBindGroup()),!this.faceGeometryBuffer)throw new Error("FaceGeometry buffer not created");this.device.queue.writeBuffer(this.faceGeometryBuffer,0,e.buffer,e.byteOffset,e.byteLength)}executeInEncoder(e,t){if(!this.device||!this.computePipeline||!this.bindGroup){console.error("❌ Transform pipeline not ready");return}if(this.splatCount===0){console.warn("⚠️  No splats to transform");return}const r=e.beginComputePass({label:"Transform Compute Pass",timestampWrites:t==null?void 0:t.getTimestampWrites("Transform")});r.setPipeline(this.computePipeline),r.setBindGroup(0,this.bindGroup);const a=Math.ceil(this.splatCount/256);r.dispatchWorkgroups(a),r.end()}getTransformedOutputBuffer(){return this.transformedOutputBuffer}getPositionsOutputBuffer(){return this.positionsOutputBuffer}getDepthsOutputBuffer(){return this.depthsOutputBuffer}updateViewMatrix(e){!this.device||!this.viewMatrixBuffer||this.device.queue.writeBuffer(this.viewMatrixBuffer,0,e.buffer,e.byteOffset,e.byteLength)}getSplatCount(){return this.splatCount}createTransformedOutputBuffer(){if(!this.device||this.splatCount===0)return;const t=this.splatCount*13*4;this.transformedOutputBuffer&&this.transformedOutputBuffer.destroy(),this.transformedOutputBuffer=this.device.createBuffer({label:"Transformed Output Buffer",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.createPositionsOutputBuffer(),this.createDepthsOutputBuffer()}createPositionsOutputBuffer(){if(!this.device||this.splatCount===0)return;const t=this.splatCount*3*4;this.positionsOutputBuffer&&this.positionsOutputBuffer.destroy(),this.positionsOutputBuffer=this.device.createBuffer({label:"Positions Output Buffer (for sorting)",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC})}createViewMatrixBuffer(){if(!this.device)return;const e=64;this.viewMatrixBuffer=this.device.createBuffer({label:"View Matrix Uniform",size:e,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}createDepthsOutputBuffer(){if(!this.device||this.splatCount===0)return;const e=this.splatCount*4;this.depthsOutputBuffer=this.device.createBuffer({label:"Depths Output Buffer (for GPU sorting)",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC})}createBindGroup(){if(!this.device||!this.computePipeline||!this.originalSplatsBuffer||!this.faceGeometryBuffer||!this.transformedOutputBuffer||!this.positionsOutputBuffer||!this.viewMatrixBuffer||!this.depthsOutputBuffer)return;const e=this.computePipeline.getBindGroupLayout(0);this.bindGroup=this.device.createBindGroup({label:"Transform Bind Group",layout:e,entries:[{binding:0,resource:{buffer:this.originalSplatsBuffer}},{binding:1,resource:{buffer:this.faceGeometryBuffer}},{binding:2,resource:{buffer:this.transformedOutputBuffer}},{binding:3,resource:{buffer:this.positionsOutputBuffer}},{binding:4,resource:{buffer:this.viewMatrixBuffer}},{binding:5,resource:{buffer:this.depthsOutputBuffer}}]})}destroy(){var e,t,r,a,n,i;(e=this.originalSplatsBuffer)==null||e.destroy(),this.faceGeometryBuffer&&!this.usesExternalFaceGeometryBuffer&&this.faceGeometryBuffer.destroy(),(t=this.transformedOutputBuffer)==null||t.destroy(),(r=this.positionsOutputBuffer)==null||r.destroy(),(a=this.viewMatrixBuffer)==null||a.destroy(),(n=this.depthsOutputBuffer)==null||n.destroy(),(i=this.faceGeometryStagingBuffer)==null||i.destroy(),this.originalSplatsBuffer=null,this.faceGeometryBuffer=null,this.transformedOutputBuffer=null,this.positionsOutputBuffer=null,this.viewMatrixBuffer=null,this.depthsOutputBuffer=null,this.faceGeometryStagingBuffer=null,this.bindGroup=null}}class le{constructor(e){s(this,"device");s(this,"splatCount",0);s(this,"initialized",!1);s(this,"indicesBuffer",null);s(this,"depthsStagingBuffer",null);s(this,"cachedIndices",null);s(this,"depthsStagingBuffers",[null,null]);s(this,"frameIndex",0);s(this,"sortPromise",null);s(this,"lastSortTime",0);s(this,"depthsArrays",[null,null]);s(this,"indicesArrays",[null,null]);s(this,"indices0",null);s(this,"indices1",null);s(this,"counts",null);s(this,"BUCKET_SIZE",2048);s(this,"MASK",this.BUCKET_SIZE-1);this.device=e}initialize(e){this.splatCount=e,console.log(`🔧 Initializing CPU Sort Pipeline for ${e} splats...`),this.indicesBuffer=this.device.createBuffer({label:"CPU Sort Indices Buffer",size:e*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.depthsStagingBuffer=this.device.createBuffer({label:"Depths Staging Buffer (Balance)",size:e*4,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});for(let t=0;t<2;t++)this.depthsStagingBuffers[t]=this.device.createBuffer({label:`Depths Staging Buffer ${t} (Quality)`,size:e*4,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});for(let t=0;t<2;t++)this.depthsArrays[t]=new Uint32Array(e),this.indicesArrays[t]=new Uint32Array(e);this.indices0=new Uint32Array(e),this.indices1=new Uint32Array(e),this.counts=new Uint32Array(this.BUCKET_SIZE),this.initialized=!0,console.log("✅ CPU Sort Pipeline initialized")}async sortOnce(e,t){if(!this.initialized)throw new Error("CPUSortPipeline not initialized");console.log("🔄 [Balance] Sorting once (first frame)..."),t.copyBufferToBuffer(e,0,this.depthsStagingBuffer,0,this.splatCount*4),this.device.queue.submit([t.finish()]),await this.depthsStagingBuffer.mapAsync(GPUMapMode.READ);const r=new Uint32Array(this.depthsStagingBuffer.getMappedRange()),a=new Uint32Array(this.splatCount);a.set(r),this.depthsStagingBuffer.unmap();const n=this.cpuRadixSort(a);this.cachedIndices=n,this.device.queue.writeBuffer(this.indicesBuffer,0,n.buffer,n.byteOffset,n.byteLength),console.log("✅ [Balance] First frame sorted and cached")}async sortEveryFrame(e,t){if(!this.initialized)throw new Error("CPUSortPipeline not initialized");const r=this.frameIndex%2;if((this.frameIndex+1)%2,this.sortPromise){const a=await this.sortPromise;this.device.queue.writeBuffer(this.indicesBuffer,0,a.buffer,a.byteOffset,a.byteLength)}t.copyBufferToBuffer(e,0,this.depthsStagingBuffers[r],0,this.splatCount*4),this.frameIndex++}startAsyncSort(){const e=(this.frameIndex-1)%2;this.sortPromise=this.asyncSort(e)}async asyncSort(e){await this.depthsStagingBuffers[e].mapAsync(GPUMapMode.READ);const t=new Uint32Array(this.depthsStagingBuffers[e].getMappedRange());this.depthsArrays[e].set(t),this.depthsStagingBuffers[e].unmap();const r=performance.now(),a=this.cpuRadixSort(this.depthsArrays[e],this.indicesArrays[e]);return this.lastSortTime=performance.now()-r,a}cpuRadixSort(e,t){const r=t||new Uint32Array(this.splatCount),a=this.indices0,n=this.indices1,i=this.counts;for(let o=0;o<this.splatCount;o++)a[o]=o;this.radixPass(e,a,n,i,0),this.radixPass(e,n,a,i,11),this.radixPass(e,a,n,i,22);for(let o=0;o<this.splatCount;o++)r[o]=n[o];return r}radixPass(e,t,r,a,n){a.fill(0);for(let o=0;o<this.splatCount;o++){const l=e[t[o]]>>n&this.MASK;a[l]++}let i=0;for(let o=0;o<this.BUCKET_SIZE;o++){const l=a[o];a[o]=i,i+=l}for(let o=0;o<this.splatCount;o++){const l=t[o],f=e[l]>>n&this.MASK;r[a[f]++]=l}}getSortedIndicesBuffer(){if(!this.initialized)throw new Error("CPUSortPipeline not initialized");return this.indicesBuffer}getIndicesBufferSize(){return this.splatCount*4}destroy(){var e,t,r,a;(e=this.indicesBuffer)==null||e.destroy(),(t=this.depthsStagingBuffer)==null||t.destroy(),(r=this.depthsStagingBuffers[0])==null||r.destroy(),(a=this.depthsStagingBuffers[1])==null||a.destroy(),this.indicesBuffer=null,this.depthsStagingBuffer=null,this.depthsStagingBuffers=[null,null],this.cachedIndices=null,this.depthsArrays=[null,null],this.indicesArrays=[null,null],this.indices0=null,this.indices1=null,this.counts=null,this.sortPromise=null,this.initialized=!1,console.log("🗑️ CPU Sort Pipeline destroyed")}}class ue{constructor(e){s(this,"device");s(this,"supported");s(this,"querySet",null);s(this,"queryBuffer",null);s(this,"resultBuffers",[null,null]);s(this,"currentBufferIndex",0);s(this,"bufferMappedState",[!1,!1]);s(this,"queryIndex",0);s(this,"maxQueries",32);s(this,"currentFrameEntries",[]);s(this,"previousFrameEntries",[]);s(this,"lastResults",{});s(this,"pendingRead",!1);this.device=e,this.supported=e.features.has("timestamp-query"),this.supported&&this.initialize()}initialize(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxQueries}),this.queryBuffer=this.device.createBuffer({label:"GPU Profiler Query Buffer",size:8*this.maxQueries,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffers[0]=this.device.createBuffer({label:"GPU Profiler Result Buffer 0",size:8*this.maxQueries,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),this.resultBuffers[1]=this.device.createBuffer({label:"GPU Profiler Result Buffer 1",size:8*this.maxQueries,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}getTimestampWrites(e){if(!this.supported||!this.querySet||this.queryIndex>=this.maxQueries-1)return;const t=this.queryIndex,r=this.queryIndex+1;return this.currentFrameEntries.push({label:e,beginIndex:t,endIndex:r}),this.queryIndex+=2,{querySet:this.querySet,beginningOfPassWriteIndex:t,endOfPassWriteIndex:r}}resolve(e){if(!this.supported||!this.querySet||!this.queryBuffer||this.queryIndex===0)return;const t=this.resultBuffers[this.currentBufferIndex];if(t){if(this.bufferMappedState[this.currentBufferIndex]){console.warn("⚠️  GPU Profiler: Skipping frame - buffer still mapped");return}e.resolveQuerySet(this.querySet,0,this.queryIndex,this.queryBuffer,0),e.copyBufferToBuffer(this.queryBuffer,0,t,0,this.queryIndex*8),this.previousFrameEntries=[...this.currentFrameEntries],this.currentBufferIndex=1-this.currentBufferIndex}}readPreviousFrame(){!this.supported||this.pendingRead||this.previousFrameEntries.length===0||this.readResultsAsync()}async readResultsAsync(){if(this.pendingRead)return;this.pendingRead=!0;const e=1-this.currentBufferIndex,t=this.resultBuffers[e];if(!t){this.pendingRead=!1;return}try{this.bufferMappedState[e]=!0,await t.mapAsync(GPUMapMode.READ);const r=new BigUint64Array(t.getMappedRange()),a={};for(const n of this.previousFrameEntries){const i=r[n.beginIndex],o=r[n.endIndex];if(o>i){const l=Number(o-i);a[n.label]=l/1e6}}this.lastResults=a,t.unmap(),this.bufferMappedState[e]=!1}catch(r){console.error("GPU Profiler: Failed to read results",r),this.bufferMappedState[e]=!1}finally{this.pendingRead=!1}}reset(){this.queryIndex=0,this.currentFrameEntries=[]}getLastResults(){return{...this.lastResults}}isSupported(){return this.supported}destroy(){var e,t,r,a;(e=this.querySet)==null||e.destroy(),(t=this.queryBuffer)==null||t.destroy(),(r=this.resultBuffers[0])==null||r.destroy(),(a=this.resultBuffers[1])==null||a.destroy()}}class fe{constructor(){s(this,"device",null);s(this,"buffers",null);s(this,"vertexCount",0);s(this,"faceCount",0);s(this,"jointCount",0);s(this,"shapeParamCount",0);s(this,"poseParamCount",0);s(this,"staticOffsetCount",0);s(this,"paramDataCache",new Float32Array(32*4))}initialize(e,t,r){var i;console.log("🔧 Initializing FLAME GPU buffers..."),this.device=e,this.vertexCount=t.vertexCount,this.faceCount=t.faceCount,this.jointCount=t.jointCount,this.shapeParamCount=t.shapeParamCount,this.poseParamCount=t.poseParamCount;const a=5023;this.staticOffsetCount=Math.min(t.staticOffsetCount,a),this.buffers={vTemplate:this.createStorageBuffer("v_template",t.vTemplate),shapedirs:this.createStorageBuffer("shapedirs",t.shapedirs),posedirs:this.createStorageBuffer("posedirs",t.posedirs),jRegressor:this.createStorageBuffer("J_regressor",t.jRegressor),lbsWeights:this.createStorageBuffer("lbs_weights",t.lbsWeights),parents:this.createStorageBuffer("parents",t.parents),faces:this.createStorageBuffer("faces",t.faces),staticOffset:t.staticOffset?this.createStorageBuffer("static_offset",t.staticOffset.slice(0,this.staticOffsetCount*3)):null,shapeParams:this.createStorageBuffer("shape_params",r),frameParams:this.createFrameParamsBuffer(),metadata:this.createMetadataBuffer()};const n=(t.vTemplate.byteLength+t.shapedirs.byteLength+t.posedirs.byteLength+t.jRegressor.byteLength+t.lbsWeights.byteLength+t.parents.byteLength+t.faces.byteLength+(((i=t.staticOffset)==null?void 0:i.byteLength)||0))/1024/1024;console.log(`✅ FLAME GPU buffers initialized (${n.toFixed(2)} MB uploaded)`),console.log(`   Vertices: ${this.vertexCount}, Faces: ${this.faceCount}, Joints: ${this.jointCount}`),this.staticOffsetCount>0&&console.log(`   Static offset: ${this.staticOffsetCount} vertices`)}createStorageBuffer(e,t){const r=this.device.createBuffer({label:`FLAME ${e}`,size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!0});return t instanceof Float32Array?new Float32Array(r.getMappedRange()).set(t):t instanceof Int32Array?new Int32Array(r.getMappedRange()).set(t):t instanceof Uint32Array&&new Uint32Array(r.getMappedRange()).set(t),r.unmap(),r}createFrameParamsBuffer(){return this.device.createBuffer({label:"FLAME frame params",size:512,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}createMetadataBuffer(){const e=this.device.createBuffer({label:"FLAME metadata",size:256,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!0}),t=new Uint32Array(e.getMappedRange());return t[0]=this.vertexCount,t[1]=this.faceCount,t[2]=this.jointCount,t[3]=this.shapeParamCount,t[4]=this.poseParamCount,t[5]=this.staticOffsetCount,e.unmap(),e}updateFrameParams(e){if(!this.buffers||!this.device)throw new Error("FLAME GPU buffers not initialized");const t=this.paramDataCache;let r=0;for(let a=0;a<100;a+=4)t[r++]=e.exprParams[a]||0,t[r++]=e.exprParams[a+1]||0,t[r++]=e.exprParams[a+2]||0,t[r++]=e.exprParams[a+3]||0;t[r++]=e.rotation[0]||0,t[r++]=e.rotation[1]||0,t[r++]=e.rotation[2]||0,t[r++]=0,t[r++]=e.translation[0]||0,t[r++]=e.translation[1]||0,t[r++]=e.translation[2]||0,t[r++]=0,t[r++]=e.neckPose[0]||0,t[r++]=e.neckPose[1]||0,t[r++]=e.neckPose[2]||0,t[r++]=0,t[r++]=e.jawPose[0]||0,t[r++]=e.jawPose[1]||0,t[r++]=e.jawPose[2]||0,t[r++]=0,t[r++]=e.eyesPose[0]||0,t[r++]=e.eyesPose[1]||0,t[r++]=e.eyesPose[2]||0,t[r++]=0,t[r++]=e.eyesPose[3]||0,t[r++]=e.eyesPose[4]||0,t[r++]=e.eyesPose[5]||0,t[r++]=0,t[r++]=e.eyelid[0]||0,t[r++]=e.eyelid[1]||0,t[r++]=0,t[r++]=0,this.device.queue.writeBuffer(this.buffers.frameParams,0,t)}getBuffers(){if(!this.buffers)throw new Error("FLAME GPU buffers not initialized");return this.buffers}getMetadata(){return{vertexCount:this.vertexCount,faceCount:this.faceCount,jointCount:this.jointCount,shapeParamCount:this.shapeParamCount,poseParamCount:this.poseParamCount,staticOffsetCount:this.staticOffsetCount}}async debugReadMetadata(){if(!this.buffers||!this.device)throw new Error("FLAME GPU buffers not initialized");const e=this.device.createBuffer({size:256,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),t=this.device.createCommandEncoder();t.copyBufferToBuffer(this.buffers.metadata,0,e,0,256),this.device.queue.submit([t.finish()]),await e.mapAsync(GPUMapMode.READ);const r=new Uint32Array(e.getMappedRange()),a={vertexCount:r[0],faceCount:r[1],jointCount:r[2],shapeParamCount:r[3],poseParamCount:r[4],staticOffsetCount:r[5]};return e.unmap(),e.destroy(),a}async debugReadStaticOffset(e){if(!this.buffers||!this.device)throw new Error("FLAME GPU buffers not initialized");if(!this.buffers.staticOffset)return null;const t=e*3*4,r=this.device.createBuffer({size:t,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),a=this.device.createCommandEncoder();a.copyBufferToBuffer(this.buffers.staticOffset,0,r,0,t),this.device.queue.submit([a.finish()]),await r.mapAsync(GPUMapMode.READ);const n=new Float32Array(r.getMappedRange()).slice();return r.unmap(),r.destroy(),n}destroy(){this.buffers&&(Object.values(this.buffers).forEach(e=>e.destroy()),this.buffers=null),this.device=null,console.log("🗑️ FLAME GPU buffers destroyed")}}const ce=`/**
 * FLAME Common Definitions
 *
 * 共享的结构体、常量和工具函数
 * 🔧 Updated: Added staticOffsetCount to FLAMEMetadata
 */

// ============================================================================
// 常量定义
// ============================================================================

const PI: f32 = 3.14159265359;

// ============================================================================
// 结构体定义 (与 FLAMEGPUBuffers 对齐)
// ============================================================================

/**
 * FLAME 帧参数 (Uniform Buffer)
 * 🚀 优化: 移除 shapeParams (已分离为独立 Storage Buffer)
 * Layout (std140, vec4 对齐):
 * - exprParams: 25 vec4 (100 floats)
 * - rotation: 1 vec4 (3 floats + padding)
 * - translation: 1 vec4 (3 floats + padding)
 * - neckPose: 1 vec4 (3 floats + padding)
 * - jawPose: 1 vec4 (3 floats + padding)
 * - eyesPose: 2 vec4 (6 floats)
 * - eyelid: 1 vec4 (2 floats + padding)
 * Total: 32 vec4 = 512 bytes (was 1744 bytes, 节省 71%)
 */
struct FLAMEParams {
  exprParams: array<vec4<f32>, 25>,   // [100] expression parameters
  rotation: vec4<f32>,                 // [3] global rotation (axis-angle) + padding
  translation: vec4<f32>,              // [3] global translation + padding
  neckPose: vec4<f32>,                 // [3] neck pose + padding
  jawPose: vec4<f32>,                  // [3] jaw pose + padding
  eyesPose: array<vec4<f32>, 2>,      // [6] eyes pose (2 vec4)
  eyelid: vec4<f32>,                   // [2] eyelid + padding
}

/**
 * FLAME 元数据 (Uniform Buffer)
 */
struct FLAMEMetadata {
  vertexCount: u32,
  faceCount: u32,
  jointCount: u32,
  shapeParamCount: u32,
  poseParamCount: u32,
  staticOffsetCount: u32,  // 🆕 静态偏移顶点数量
  _padding0: u32,          // 对齐到 32 bytes
  _padding1: u32,
}

// ============================================================================
// 工具函数
// ============================================================================

/**
 * Rodrigues 公式: 轴角表示转换为旋转矩阵
 * @param axisAngle 轴角表示 (vec3)
 * @return 3x3 旋转矩阵
 */
fn rodrigues(axisAngle: vec3<f32>) -> mat3x3<f32> {
  let theta = length(axisAngle);

  // 特殊情况: 零旋转
  if (theta < 1e-8) {
    return mat3x3<f32>(
      vec3<f32>(1.0, 0.0, 0.0),
      vec3<f32>(0.0, 1.0, 0.0),
      vec3<f32>(0.0, 0.0, 1.0)
    );
  }

  let axis = axisAngle / theta;
  let c = cos(theta);
  let s = sin(theta);
  let t = 1.0 - c;

  let x = axis.x;
  let y = axis.y;
  let z = axis.z;

  // 旋转矩阵 (列主序)
  return mat3x3<f32>(
    vec3<f32>(t*x*x + c,   t*x*y + s*z, t*x*z - s*y),
    vec3<f32>(t*x*y - s*z, t*y*y + c,   t*y*z + s*x),
    vec3<f32>(t*x*z + s*y, t*y*z - s*x, t*z*z + c)
  );
}

/**
 * 构建 4x4 变换矩阵 (从旋转和平移)
 * @param rotation 3x3 旋转矩阵
 * @param translation 平移向量
 * @return 4x4 变换矩阵
 */
fn makeTransform(rotation: mat3x3<f32>, translation: vec3<f32>) -> mat4x4<f32> {
  return mat4x4<f32>(
    vec4<f32>(rotation[0], 0.0),
    vec4<f32>(rotation[1], 0.0),
    vec4<f32>(rotation[2], 0.0),
    vec4<f32>(translation, 1.0)
  );
}

/**
 * 🚀 优化: 从 vec4 数组提取 float，使用数组索引消除分支
 */
fn extractFloatExpr(arr: array<vec4<f32>, 25>, idx: u32) -> f32 {
  let vecIdx = idx / 4u;
  let offset = idx % 4u;
  let v = arr[vecIdx];
  // 使用数组字面量代替 if-else，GPU 可以优化为 swizzle
  return array<f32, 4>(v.x, v.y, v.z, v.w)[offset];
}

/**
 * 矩阵乘法 (mat3x3 * vec3)
 */
fn matMulVec3(m: mat3x3<f32>, v: vec3<f32>) -> vec3<f32> {
  return vec3<f32>(
    dot(m[0], v),
    dot(m[1], v),
    dot(m[2], v)
  );
}

/**
 * 矩阵乘法 (mat3x3 * mat3x3)
 */
fn matMul3x3(a: mat3x3<f32>, b: mat3x3<f32>) -> mat3x3<f32> {
  return mat3x3<f32>(
    matMulVec3(a, b[0]),
    matMulVec3(a, b[1]),
    matMulVec3(a, b[2])
  );
}

/**
 * 计算三角形法向量
 */
fn computeTriangleNormal(v0: vec3<f32>, v1: vec3<f32>, v2: vec3<f32>) -> vec3<f32> {
  let edge1 = v1 - v0;
  let edge2 = v2 - v0;
  return normalize(cross(edge1, edge2));
}

/**
 * 计算三角形质心
 */
fn computeTriangleCentroid(v0: vec3<f32>, v1: vec3<f32>, v2: vec3<f32>) -> vec3<f32> {
  return (v0 + v1 + v2) / 3.0;
}

/**
 * 四元数转旋转矩阵
 * @param q 四元数 (x, y, z, w)
 * @return 3x3 旋转矩阵
 */
fn quaternionToMatrix(q: vec4<f32>) -> mat3x3<f32> {
  let x = q.x;
  let y = q.y;
  let z = q.z;
  let w = q.w;

  let x2 = x * x;
  let y2 = y * y;
  let z2 = z * z;
  let xy = x * y;
  let xz = x * z;
  let yz = y * z;
  let wx = w * x;
  let wy = w * y;
  let wz = w * z;

  return mat3x3<f32>(
    vec3<f32>(1.0 - 2.0*(y2 + z2), 2.0*(xy + wz), 2.0*(xz - wy)),
    vec3<f32>(2.0*(xy - wz), 1.0 - 2.0*(x2 + z2), 2.0*(yz + wx)),
    vec3<f32>(2.0*(xz + wy), 2.0*(yz - wx), 1.0 - 2.0*(x2 + y2))
  );
}
`,de=`@group(0) @binding(0) var<uniform> metadata: FLAMEMetadata;
@group(0) @binding(1) var<storage, read> shapeParamsStorage: array<f32>;
@group(0) @binding(2) var<uniform> params: FLAMEParams;

@group(1) @binding(0) var<storage, read> vTemplate: array<f32>;
@group(1) @binding(1) var<storage, read> shapedirs: array<f32>;
@group(1) @binding(2) var<storage, read_write> vShaped: array<f32>;
@group(1) @binding(3) var<storage, read> staticOffset: array<f32>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
  let vertexIdx = globalId.x;

  let baseIdx = vertexIdx * 3u;
  var vertex = vec3<f32>(
    vTemplate[baseIdx],
    vTemplate[baseIdx + 1u],
    vTemplate[baseIdx + 2u]
  );

  let vertexCount = metadata.vertexCount;
  let numShapeParams = 300u;
  let numExprParams = 100u;

  // Use transposed layout [param][vertex][xyz] for cache efficiency
  for (var s = 0u; s < numShapeParams; s++) {
    let shapeParam = shapeParamsStorage[s];

    let offset = s * vertexCount * 3u + vertexIdx * 3u;
    let dx = shapedirs[offset];
    let dy = shapedirs[offset + 1u];
    let dz = shapedirs[offset + 2u];

    vertex += vec3<f32>(dx, dy, dz) * shapeParam;
  }

  for (var e = 0u; e < numExprParams; e++) {
    let exprParam = extractFloatExpr(params.exprParams, e);
    let paramIdx = numShapeParams + e;

    let offset = paramIdx * vertexCount * 3u + vertexIdx * 3u;
    let dx = shapedirs[offset];
    let dy = shapedirs[offset + 1u];
    let dz = shapedirs[offset + 2u];

    vertex += vec3<f32>(dx, dy, dz) * exprParam;
  }

  if (vertexIdx < metadata.staticOffsetCount) {
    vertex.x += staticOffset[baseIdx];
    vertex.y += staticOffset[baseIdx + 1u];
    vertex.z += staticOffset[baseIdx + 2u];
  }

  vShaped[baseIdx] = vertex.x;
  vShaped[baseIdx + 1u] = vertex.y;
  vShaped[baseIdx + 2u] = vertex.z;
}
`,he=`@group(0) @binding(0) var<uniform> params: FLAMEParams;
@group(0) @binding(1) var<uniform> metadata: FLAMEMetadata;

@group(1) @binding(0) var<storage, read> vShaped: array<f32>;
@group(1) @binding(1) var<storage, read> posedirs: array<f32>;
@group(1) @binding(2) var<storage, read_write> vPosed: array<f32>;

/**
 * 计算 pose_feature 向量 (36 维)
 *
 * 从 5 个关节的旋转参数计算:
 * - Joint 0 (global): 跳过
 * - Joints 1-4 (neck, jaw, left_eye, right_eye): 各贡献 9 个元素
 */
fn computePoseFeature() -> array<f32, 36> {
  var pose_feature: array<f32, 36>;

  // Joint 1: neck (indices 0-8)
  let R_neck = rodrigues(vec3<f32>(params.neckPose.x, params.neckPose.y, params.neckPose.z));
  let I = mat3x3<f32>(1.0, 0.0, 0.0,  0.0, 1.0, 0.0,  0.0, 0.0, 1.0);
  let rel_neck = R_neck - I;

  pose_feature[0] = rel_neck[0][0]; pose_feature[1] = rel_neck[0][1]; pose_feature[2] = rel_neck[0][2];
  pose_feature[3] = rel_neck[1][0]; pose_feature[4] = rel_neck[1][1]; pose_feature[5] = rel_neck[1][2];
  pose_feature[6] = rel_neck[2][0]; pose_feature[7] = rel_neck[2][1]; pose_feature[8] = rel_neck[2][2];

  // Joint 2: jaw (indices 9-17)
  let R_jaw = rodrigues(vec3<f32>(params.jawPose.x, params.jawPose.y, params.jawPose.z));
  let rel_jaw = R_jaw - I;

  pose_feature[9]  = rel_jaw[0][0]; pose_feature[10] = rel_jaw[0][1]; pose_feature[11] = rel_jaw[0][2];
  pose_feature[12] = rel_jaw[1][0]; pose_feature[13] = rel_jaw[1][1]; pose_feature[14] = rel_jaw[1][2];
  pose_feature[15] = rel_jaw[2][0]; pose_feature[16] = rel_jaw[2][1]; pose_feature[17] = rel_jaw[2][2];

  // Joint 3: left_eye (indices 18-26)
  let R_left_eye = rodrigues(vec3<f32>(params.eyesPose[0].x, params.eyesPose[0].y, params.eyesPose[0].z));
  let rel_left_eye = R_left_eye - I;

  pose_feature[18] = rel_left_eye[0][0]; pose_feature[19] = rel_left_eye[0][1]; pose_feature[20] = rel_left_eye[0][2];
  pose_feature[21] = rel_left_eye[1][0]; pose_feature[22] = rel_left_eye[1][1]; pose_feature[23] = rel_left_eye[1][2];
  pose_feature[24] = rel_left_eye[2][0]; pose_feature[25] = rel_left_eye[2][1]; pose_feature[26] = rel_left_eye[2][2];

  // Joint 4: right_eye (indices 27-35)
  let R_right_eye = rodrigues(vec3<f32>(params.eyesPose[1].x, params.eyesPose[1].y, params.eyesPose[1].z));
  let rel_right_eye = R_right_eye - I;

  pose_feature[27] = rel_right_eye[0][0]; pose_feature[28] = rel_right_eye[0][1]; pose_feature[29] = rel_right_eye[0][2];
  pose_feature[30] = rel_right_eye[1][0]; pose_feature[31] = rel_right_eye[1][1]; pose_feature[32] = rel_right_eye[1][2];
  pose_feature[33] = rel_right_eye[2][0]; pose_feature[34] = rel_right_eye[2][1]; pose_feature[35] = rel_right_eye[2][2];

  return pose_feature;
}

// ============================================================================
// Compute Shader
// ============================================================================

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
  let vertexIdx = globalId.x;

  let baseIdx = vertexIdx * 3u;
  var vertex = vec3<f32>(
    vShaped[baseIdx],
    vShaped[baseIdx + 1u],
    vShaped[baseIdx + 2u]
  );

  // 计算 pose_feature (36 维)
  let pose_feature = computePoseFeature();
  let poseParamCount = metadata.poseParamCount; // 36
  let vertexCount = metadata.vertexCount;

  var pose_offset = vec3<f32>(0.0, 0.0, 0.0);

  // Use transposed layout [param][vertex][xyz] for cache efficiency
  for (var p = 0u; p < poseParamCount; p++) {
    let feature = pose_feature[p];

    let offset = p * vertexCount * 3u + vertexIdx * 3u;
    let dx = posedirs[offset];
    let dy = posedirs[offset + 1u];
    let dz = posedirs[offset + 2u];

    pose_offset += vec3<f32>(dx, dy, dz) * feature;
  }

  // 应用姿态偏移
  vertex += pose_offset;

  // 写回结果
  vPosed[baseIdx] = vertex.x;
  vPosed[baseIdx + 1u] = vertex.y;
  vPosed[baseIdx + 2u] = vertex.z;
}
`,me=`@group(0) @binding(1) var<uniform> metadata: FLAMEMetadata;

@group(1) @binding(0) var<storage, read> vPosed: array<f32>;
@group(1) @binding(1) var<storage, read> jRegressor: array<f32>;
@group(1) @binding(2) var<storage, read_write> joints: array<f32>;


// 每个 workgroup 的局部累加缓冲区 (256 threads × 3 coords)
var<workgroup> sharedSumX: array<f32, 256>;
var<workgroup> sharedSumY: array<f32, 256>;
var<workgroup> sharedSumZ: array<f32, 256>;

// ============================================================================
// Compute Shader
// ============================================================================

/**
 * 计算策略:
 * - 对于 5 个关节，使用 5 个 workgroups (每个 workgroup 256 threads)
 * - 每个 workgroup 处理一个关节的所有顶点
 * - 使用 shared memory 进行树状归约
 *
 * Dispatch: (5, 1, 1) workgroups × (256, 1, 1) threads
 */
@compute @workgroup_size(256, 1, 1)
fn main(
  @builtin(global_invocation_id) globalId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>,
  @builtin(workgroup_id) workgroupId: vec3<u32>
) {
  let jointIdx = workgroupId.x;
  let threadIdx = localId.x;
  let vertexCount = metadata.vertexCount;
  let jointCount = metadata.jointCount;

  // 🚀 优化: 移除边界检查（dispatcher 保证）
  // 初始化局部累加器
  var localSumX: f32 = 0.0;
  var localSumY: f32 = 0.0;
  var localSumZ: f32 = 0.0;

  // 每个线程处理多个顶点（循环展开）
  // 8031 vertices / 256 threads ≈ 32 iterations per thread
  let stride = 256u;
  var vertexIdx = threadIdx;

  // 🚀 优化: 移除稀疏检查，GPU 优化零乘法
  while (vertexIdx < vertexCount) {
    let weight = jRegressor[jointIdx * vertexCount + vertexIdx];
    let vIdx = vertexIdx * 3u;
    let vx = vPosed[vIdx];
    let vy = vPosed[vIdx + 1u];
    let vz = vPosed[vIdx + 2u];

    localSumX += weight * vx;
    localSumY += weight * vy;
    localSumZ += weight * vz;

    vertexIdx += stride;
  }

  // 写入 shared memory
  sharedSumX[threadIdx] = localSumX;
  sharedSumY[threadIdx] = localSumY;
  sharedSumZ[threadIdx] = localSumZ;

  // 同步所有线程
  workgroupBarrier();

  // 🚀 优化: 树状归约 (256 → 128 → 64 → 32，然后展开最后 5 次迭代)
  // 前 3 次迭代需要 barrier (128 → 64 → 32)
  var activeThreads = 128u;
  for (var i = 0u; i < 3u; i++) {
    if (threadIdx < activeThreads) {
      sharedSumX[threadIdx] += sharedSumX[threadIdx + activeThreads];
      sharedSumY[threadIdx] += sharedSumY[threadIdx + activeThreads];
      sharedSumZ[threadIdx] += sharedSumZ[threadIdx + activeThreads];
    }
    workgroupBarrier();
    activeThreads = activeThreads / 2u;
  }

  // 🚀 展开最后 5 次迭代 (32 → 16 → 8 → 4 → 2 → 1)
  // 在同一 warp 内，无需 barrier (WGSL 保证 subgroup 内同步)
  if (threadIdx < 32u) {
    sharedSumX[threadIdx] += sharedSumX[threadIdx + 16u];
    sharedSumY[threadIdx] += sharedSumY[threadIdx + 16u];
    sharedSumZ[threadIdx] += sharedSumZ[threadIdx + 16u];

    sharedSumX[threadIdx] += sharedSumX[threadIdx + 8u];
    sharedSumY[threadIdx] += sharedSumY[threadIdx + 8u];
    sharedSumZ[threadIdx] += sharedSumZ[threadIdx + 8u];

    sharedSumX[threadIdx] += sharedSumX[threadIdx + 4u];
    sharedSumY[threadIdx] += sharedSumY[threadIdx + 4u];
    sharedSumZ[threadIdx] += sharedSumZ[threadIdx + 4u];

    sharedSumX[threadIdx] += sharedSumX[threadIdx + 2u];
    sharedSumY[threadIdx] += sharedSumY[threadIdx + 2u];
    sharedSumZ[threadIdx] += sharedSumZ[threadIdx + 2u];

    sharedSumX[threadIdx] += sharedSumX[threadIdx + 1u];
    sharedSumY[threadIdx] += sharedSumY[threadIdx + 1u];
    sharedSumZ[threadIdx] += sharedSumZ[threadIdx + 1u];
  }

  // 线程 0 写入最终结果
  if (threadIdx == 0u) {
    let outputIdx = jointIdx * 3u;
    joints[outputIdx] = sharedSumX[0];
    joints[outputIdx + 1u] = sharedSumY[0];
    joints[outputIdx + 2u] = sharedSumZ[0];
  }
}
`,pe=`@group(0) @binding(0) var<uniform> params: FLAMEParams;
@group(0) @binding(1) var<uniform> metadata: FLAMEMetadata;

@group(1) @binding(0) var<storage, read> joints: array<f32>;
@group(1) @binding(1) var<storage, read_write> jointTransforms: array<f32>;

/**
 * 写入 4x4 矩阵到扁平数组 (列主序)
 */
fn writeMat4(buffer: ptr<storage, array<f32>, read_write>, offset: u32, m: mat4x4<f32>) {
  (*buffer)[offset +  0u] = m[0][0];
  (*buffer)[offset +  1u] = m[0][1];
  (*buffer)[offset +  2u] = m[0][2];
  (*buffer)[offset +  3u] = m[0][3];
  (*buffer)[offset +  4u] = m[1][0];
  (*buffer)[offset +  5u] = m[1][1];
  (*buffer)[offset +  6u] = m[1][2];
  (*buffer)[offset +  7u] = m[1][3];
  (*buffer)[offset +  8u] = m[2][0];
  (*buffer)[offset +  9u] = m[2][1];
  (*buffer)[offset + 10u] = m[2][2];
  (*buffer)[offset + 11u] = m[2][3];
  (*buffer)[offset + 12u] = m[3][0];
  (*buffer)[offset + 13u] = m[3][1];
  (*buffer)[offset + 14u] = m[3][2];
  (*buffer)[offset + 15u] = m[3][3];
}

/**
 * 4x4 矩阵求逆 (简化版，假设是变换矩阵)
 * 对于变换矩阵 [R | t; 0 | 1]，逆矩阵为 [R^T | -R^T*t; 0 | 1]
 *
 * 🔧 关键：WGSL 使用列主序！
 * m[0] = 第1列, m[1] = 第2列, m[2] = 第3列, m[3] = 第4列
 */
fn invertTransform(m: mat4x4<f32>) -> mat4x4<f32> {
  // 🔧 正确提取旋转部分 (列主序)
  // m[col][row] -> M[row][col]
  let r00 = m[0][0]; let r01 = m[1][0]; let r02 = m[2][0];  // 第1行
  let r10 = m[0][1]; let r11 = m[1][1]; let r12 = m[2][1];  // 第2行
  let r20 = m[0][2]; let r21 = m[1][2]; let r22 = m[2][2];  // 第3行

  // 🔧 正确提取平移部分 (第4列)
  let tx = m[3][0];  // M[0][3]
  let ty = m[3][1];  // M[1][3]
  let tz = m[3][2];  // M[2][3]

  // 计算 R^T (旋转矩阵的转置)
  let rt00 = r00; let rt01 = r10; let rt02 = r20;
  let rt10 = r01; let rt11 = r11; let rt12 = r21;
  let rt20 = r02; let rt21 = r12; let rt22 = r22;

  // 计算 -R^T * t
  let ntx = -(rt00 * tx + rt01 * ty + rt02 * tz);
  let nty = -(rt10 * tx + rt11 * ty + rt12 * tz);
  let ntz = -(rt20 * tx + rt21 * ty + rt22 * tz);

  // 🔧 构建逆矩阵 (列主序)
  return mat4x4<f32>(
    vec4<f32>(rt00, rt10, rt20, 0.0),  // 第1列
    vec4<f32>(rt01, rt11, rt21, 0.0),  // 第2列
    vec4<f32>(rt02, rt12, rt22, 0.0),  // 第3列
    vec4<f32>(ntx, nty, ntz, 1.0)      // 第4列
  );
}

// ============================================================================
// Compute Shader
// ============================================================================

@compute @workgroup_size(1)
fn main() {
  // FLAME 关节层级 (硬编码，5个关节):
  // parents = [-1, 0, 1, 1, 1]
  // 0: root (parent: -1)
  // 1: neck (parent: 0)
  // 2: jaw (parent: 1)
  // 3: left_eye (parent: 1)
  // 4: right_eye (parent: 1)

  // 🔧 使用 metadata 以防止编译器优化掉 binding
  let jointCount = metadata.jointCount; // 应该是 5

  // ========== Step 1: 读取关节位置 (绝对位置) ==========
  var J: array<vec3<f32>, 5>;
  for (var i = 0u; i < 5u; i++) {
    let idx = i * 3u;
    J[i] = vec3<f32>(joints[idx], joints[idx + 1u], joints[idx + 2u]);
  }

  // ========== Step 2: 计算相对关节位置 ==========
  // C++: rel_joints[i] = joints[i] - joints[parents[i]]
  var rel_J: array<vec3<f32>, 5>;
  rel_J[0] = J[0];           // root: 无父关节
  rel_J[1] = J[1] - J[0];    // neck - root
  rel_J[2] = J[2] - J[1];    // jaw - neck
  rel_J[3] = J[3] - J[1];    // left_eye - neck
  rel_J[4] = J[4] - J[1];    // right_eye - neck

  // ========== Step 3: 准备 pose 旋转矩阵 ==========
  let globalRotation = params.rotation.xyz;
  let neckPose = params.neckPose.xyz;
  let jawPose = params.jawPose.xyz;
  let leftEyePose = params.eyesPose[0].xyz;
  let rightEyePose = vec3<f32>(params.eyesPose[0].w, params.eyesPose[1].x, params.eyesPose[1].y);

  var R: array<mat3x3<f32>, 5>;
  R[0] = rodrigues(globalRotation);
  R[1] = rodrigues(neckPose);
  R[2] = rodrigues(jawPose);
  R[3] = rodrigues(leftEyePose);
  R[4] = rodrigues(rightEyePose);

  // ========== Step 4: 创建局部变换矩阵 ==========
  // C++: transforms_mat[i] = Matrix4f(pose_matrices[i], rel_joints[i])
  var transforms_mat: array<mat4x4<f32>, 5>;
  for (var i = 0u; i < 5u; i++) {
    transforms_mat[i] = makeTransform(R[i], rel_J[i]);
  }

  // ========== Step 5: 构建变换链 ==========
  // C++: transform_chain[i] = transform_chain[parent] * transforms_mat[i]
  var transform_chain: array<mat4x4<f32>, 5>;
  transform_chain[0] = transforms_mat[0];  // root
  transform_chain[1] = transform_chain[0] * transforms_mat[1];  // neck
  transform_chain[2] = transform_chain[1] * transforms_mat[2];  // jaw
  transform_chain[3] = transform_chain[1] * transforms_mat[3];  // left_eye
  transform_chain[4] = transform_chain[1] * transforms_mat[4];  // right_eye

  // ========== Step 6: 应用 bind pose inverse ==========
  // C++: bind_pose = Matrix4f(Identity, joints[i])
  //      rel_transforms[i] = transform_chain[i] * bind_pose.inverse()
  for (var i = 0u; i < 5u; i++) {
    // 🔧 构建 bind pose: [I | t; 0 | 1]
    // WGSL 列主序: mat4x4 的每个 vec4 是一列
    // 第4列应该是 [t.x, t.y, t.z, 1]
    let bind_pose = mat4x4<f32>(
      vec4<f32>(1.0, 0.0, 0.0, 0.0),           // Column 0
      vec4<f32>(0.0, 1.0, 0.0, 0.0),           // Column 1
      vec4<f32>(0.0, 0.0, 1.0, 0.0),           // Column 2
      vec4<f32>(J[i].x, J[i].y, J[i].z, 1.0)  // Column 3: [tx, ty, tz, 1]
    );

    let bind_pose_inv = invertTransform(bind_pose);
    let rel_transform = transform_chain[i] * bind_pose_inv;

    writeMat4(&jointTransforms, i * 16u, rel_transform);
  }
}
`,ge=`@group(0) @binding(0) var<uniform> params: FLAMEParams;
@group(0) @binding(1) var<uniform> metadata: FLAMEMetadata;

@group(1) @binding(0) var<storage, read> vPosed: array<f32>;
@group(1) @binding(1) var<storage, read> jointTransforms: array<f32>;
@group(1) @binding(2) var<storage, read> lbsWeights: array<f32>;
@group(1) @binding(3) var<storage, read_write> vDeformed: array<f32>;

fn readMat4(offset: u32) -> mat4x4<f32> {
  return mat4x4<f32>(
    vec4<f32>(jointTransforms[offset +  0u], jointTransforms[offset +  1u], jointTransforms[offset +  2u], jointTransforms[offset +  3u]),
    vec4<f32>(jointTransforms[offset +  4u], jointTransforms[offset +  5u], jointTransforms[offset +  6u], jointTransforms[offset +  7u]),
    vec4<f32>(jointTransforms[offset +  8u], jointTransforms[offset +  9u], jointTransforms[offset + 10u], jointTransforms[offset + 11u]),
    vec4<f32>(jointTransforms[offset + 12u], jointTransforms[offset + 13u], jointTransforms[offset + 14u], jointTransforms[offset + 15u])
  );
}

fn transformPoint(m: mat4x4<f32>, p: vec3<f32>) -> vec3<f32> {
  let p4 = vec4<f32>(p, 1.0);
  let transformed = m * p4;
  return transformed.xyz;
}

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
  let vertexIdx = globalId.x;

  let baseIdx = vertexIdx * 3u;
  let vertex = vec3<f32>(
    vPosed[baseIdx],
    vPosed[baseIdx + 1u],
    vPosed[baseIdx + 2u]
  );

  var result = vec3<f32>(0.0, 0.0, 0.0);
  let jointCount = metadata.jointCount;
  let weightBase = vertexIdx * jointCount;

  let w0 = lbsWeights[weightBase];
  let w1 = lbsWeights[weightBase + 1u];
  let w2 = lbsWeights[weightBase + 2u];
  let w3 = lbsWeights[weightBase + 3u];
  let w4 = lbsWeights[weightBase + 4u];

  let T0 = readMat4(0u);
  let T1 = readMat4(16u);
  let T2 = readMat4(32u);
  let T3 = readMat4(48u);
  let T4 = readMat4(64u);

  result = transformPoint(T0, vertex) * w0 +
           transformPoint(T1, vertex) * w1 +
           transformPoint(T2, vertex) * w2 +
           transformPoint(T3, vertex) * w3 +
           transformPoint(T4, vertex) * w4;

  result += params.translation.xyz;

  vDeformed[baseIdx] = result.x;
  vDeformed[baseIdx + 1u] = result.y;
  vDeformed[baseIdx + 2u] = result.z;
}
`,ve=`/**
 * FLAME Face Geometry Compute Shader
 *
 * 为每个三角形面片计算几何信息:
 * - center: 面片重心 (v0 + v1 + v2) / 3
 * - scale: 面片缩放（基于面积）
 * - quaternion: 面片方向（从局部坐标系转换）
 *
 * 这些几何信息用于后续的 3DGS splat 变换
 *
 * Input:
 * - v_deformed: [vertexCount × 3] 最终变形顶点
 * - faces: [faceCount × 3] 面片索引
 *
 * Output:
 * - faceGeometries: [faceCount × 8] (center xyz, scale, quat xyzw)
 */

// 导入公共定义
// (WGSL 不支持 #include，在 TypeScript 中手动拼接)

@group(1) @binding(0) var<storage, read> vDeformed: array<f32>;
@group(1) @binding(1) var<storage, read> faces: array<u32>;
@group(1) @binding(2) var<storage, read_write> faceGeometries: array<f32>;

/**
 * 安全归一化向量（处理零长度情况）
 */
fn safeNormalize(v: vec3<f32>) -> vec3<f32> {
  let len = length(v);
  if (len < 1e-8) {
    return vec3<f32>(1.0, 0.0, 0.0); // 返回默认方向
  }
  return v / len;
}

/**
 * 3x3 旋转矩阵转四元数 (xyzw 顺序)
 *
 * 使用 Shepperd's method 确保数值稳定性
 */
fn matrixToQuaternion(m: mat3x3<f32>) -> vec4<f32> {
  let trace = m[0][0] + m[1][1] + m[2][2];

  var quat: vec4<f32>;

  if (trace > 0.0) {
    // w 是最大分量
    let s = sqrt(trace + 1.0) * 2.0; // s = 4 * w
    quat.w = 0.25 * s;
    quat.x = (m[2][1] - m[1][2]) / s;
    quat.y = (m[0][2] - m[2][0]) / s;
    quat.z = (m[1][0] - m[0][1]) / s;
  } else if (m[0][0] > m[1][1] && m[0][0] > m[2][2]) {
    // x 是最大分量
    let s = sqrt(1.0 + m[0][0] - m[1][1] - m[2][2]) * 2.0; // s = 4 * x
    quat.w = (m[2][1] - m[1][2]) / s;
    quat.x = 0.25 * s;
    quat.y = (m[0][1] + m[1][0]) / s;
    quat.z = (m[0][2] + m[2][0]) / s;
  } else if (m[1][1] > m[2][2]) {
    // y 是最大分量
    let s = sqrt(1.0 + m[1][1] - m[0][0] - m[2][2]) * 2.0; // s = 4 * y
    quat.w = (m[0][2] - m[2][0]) / s;
    quat.x = (m[0][1] + m[1][0]) / s;
    quat.y = 0.25 * s;
    quat.z = (m[1][2] + m[2][1]) / s;
  } else {
    // z 是最大分量
    let s = sqrt(1.0 + m[2][2] - m[0][0] - m[1][1]) * 2.0; // s = 4 * z
    quat.w = (m[1][0] - m[0][1]) / s;
    quat.x = (m[0][2] + m[2][0]) / s;
    quat.y = (m[1][2] + m[2][1]) / s;
    quat.z = 0.25 * s;
  }

  return normalize(quat);
}

fn computeFaceOrientationAndScaling(
  v0: vec3<f32>,
  v1: vec3<f32>,
  v2: vec3<f32>
) -> mat3x3<f32> {
  let edge1 = v1 - v0;
  let edge2 = v2 - v0;

  let axis0 = safeNormalize(edge1);
  let tempAxis1 = cross(axis0, edge2);
  let axis1 = safeNormalize(tempAxis1);
  let tempAxis2 = cross(axis1, axis0);
  let axis2 = safeNormalize(tempAxis2) * -1.0;

  return mat3x3<f32>(
    axis0.x, axis1.x, axis2.x,
    axis0.y, axis1.y, axis2.y,
    axis0.z, axis1.z, axis2.z
  );
}

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
  let faceIdx = globalId.x;

  let faceBaseIdx = faceIdx * 3u;
  let idx0 = faces[faceBaseIdx];
  let idx1 = faces[faceBaseIdx + 1u];
  let idx2 = faces[faceBaseIdx + 2u];

  let v0 = vec3<f32>(
    vDeformed[idx0 * 3u],
    vDeformed[idx0 * 3u + 1u],
    vDeformed[idx0 * 3u + 2u]
  );

  let v1 = vec3<f32>(
    vDeformed[idx1 * 3u],
    vDeformed[idx1 * 3u + 1u],
    vDeformed[idx1 * 3u + 2u]
  );

  let v2 = vec3<f32>(
    vDeformed[idx2 * 3u],
    vDeformed[idx2 * 3u + 1u],
    vDeformed[idx2 * 3u + 2u]
  );

  let center = (v0 + v1 + v2) / 3.0;

  let edge1 = v1 - v0;
  let edge2 = v2 - v0;
  let orientationMatrix = computeFaceOrientationAndScaling(v0, v1, v2);

  let axis0 = safeNormalize(edge1);
  let tempAxis1 = cross(axis0, edge2);
  let axis1 = safeNormalize(tempAxis1);
  let tempAxis2 = cross(axis1, axis0);
  let axis2 = safeNormalize(tempAxis2) * -1.0;

  let s0 = length(edge1);
  let s1 = abs(dot(axis2, edge2));
  let scale = (s0 + s1) / 2.0;

  let quat = matrixToQuaternion(orientationMatrix);

  let outputIdx = faceIdx * 8u;
  faceGeometries[outputIdx] = center.x;
  faceGeometries[outputIdx + 1u] = center.y;
  faceGeometries[outputIdx + 2u] = center.z;
  faceGeometries[outputIdx + 3u] = scale;
  faceGeometries[outputIdx + 4u] = quat.x;
  faceGeometries[outputIdx + 5u] = quat.y;
  faceGeometries[outputIdx + 6u] = quat.z;
  faceGeometries[outputIdx + 7u] = quat.w;
}
`;class ye{constructor(e,t,r,a,n){s(this,"device");s(this,"buffers");s(this,"vertexCount");s(this,"faceCount");s(this,"jointCount");s(this,"shapeBlendPipeline");s(this,"poseDeformPipeline");s(this,"jointRegressPipeline");s(this,"fkPipeline");s(this,"lbsPipeline");s(this,"faceGeometryPipeline");s(this,"shapeBlendParamsBindGroup");s(this,"poseDeformParamsBindGroup");s(this,"jointRegressMetadataBindGroup");s(this,"fkParamsBindGroup");s(this,"lbsMetadataBindGroup");s(this,"shapeBlendBindGroup");s(this,"poseDeformBindGroup");s(this,"jointRegressBindGroup");s(this,"fkBindGroup");s(this,"lbsBindGroup");s(this,"faceGeometryBindGroup");s(this,"vShapedBuffer");s(this,"vPosedBuffer");s(this,"jointsBuffer");s(this,"jointTransformsBuffer");s(this,"vDeformedBuffer");s(this,"faceGeometriesBuffer");this.device=e,this.buffers=t,this.vertexCount=r,this.faceCount=a,this.jointCount=n,this.initialize()}initialize(){console.log("🔧 Initializing FLAME Pipeline..."),this.createIntermediateBuffers(),this.clearIntermediateBuffers(),this.createComputePipelines(),this.createBindGroups(),console.log("✅ FLAME Pipeline initialized")}createIntermediateBuffers(){const e=this.vertexCount*3*4,t=this.jointCount*3*4,r=this.jointCount*16*4,a=this.faceCount*8*4;this.vShapedBuffer=this.device.createBuffer({label:"v_shaped",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.vPosedBuffer=this.device.createBuffer({label:"v_posed",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.jointsBuffer=this.device.createBuffer({label:"joints",size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.jointTransformsBuffer=this.device.createBuffer({label:"joint_transforms",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.vDeformedBuffer=this.device.createBuffer({label:"v_deformed",size:e,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.faceGeometriesBuffer=this.device.createBuffer({label:"face_geometries",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}clearIntermediateBuffers(){const e=this.device.createCommandEncoder({label:"Clear FLAME Buffers"});e.clearBuffer(this.vShapedBuffer),e.clearBuffer(this.vPosedBuffer),e.clearBuffer(this.jointsBuffer),e.clearBuffer(this.jointTransformsBuffer),e.clearBuffer(this.vDeformedBuffer),e.clearBuffer(this.faceGeometriesBuffer),this.device.queue.submit([e.finish()]),console.log("🧹 Cleared all intermediate FLAME buffers")}createComputePipelines(){this.shapeBlendPipeline=this.createPipeline(de,"Shape Blending Pipeline"),this.poseDeformPipeline=this.createPipeline(he,"Pose Deformation Pipeline"),this.jointRegressPipeline=this.createPipeline(me,"Joint Regression Pipeline"),this.fkPipeline=this.createPipeline(pe,"Forward Kinematics Pipeline"),this.lbsPipeline=this.createPipeline(ge,"LBS Skinning Pipeline"),this.faceGeometryPipeline=this.createPipeline(ve,"Face Geometry Pipeline")}createPipeline(e,t){const r=ce+`
`+e,a=this.device.createShaderModule({label:`${t} Shader`,code:r});return this.device.createComputePipeline({label:t,layout:"auto",compute:{module:a,entryPoint:"main"}})}createBindGroups(){this.shapeBlendParamsBindGroup=this.device.createBindGroup({label:"Shape Blend Params Bind Group",layout:this.shapeBlendPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.metadata}},{binding:1,resource:{buffer:this.buffers.shapeParams}},{binding:2,resource:{buffer:this.buffers.frameParams}}]}),this.poseDeformParamsBindGroup=this.device.createBindGroup({label:"Pose Deform Params Bind Group",layout:this.poseDeformPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.frameParams}},{binding:1,resource:{buffer:this.buffers.metadata}}]}),this.fkParamsBindGroup=this.device.createBindGroup({label:"FK Params Bind Group",layout:this.fkPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.frameParams}},{binding:1,resource:{buffer:this.buffers.metadata}}]}),this.jointRegressMetadataBindGroup=this.device.createBindGroup({label:"Joint Regress Metadata Bind Group",layout:this.jointRegressPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:{buffer:this.buffers.metadata}}]}),this.lbsMetadataBindGroup=this.device.createBindGroup({label:"LBS Metadata Bind Group",layout:this.lbsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.frameParams}},{binding:1,resource:{buffer:this.buffers.metadata}}]});const e=this.buffers.staticOffset||this.device.createBuffer({label:"dummy_static_offset",size:4,usage:GPUBufferUsage.STORAGE});this.shapeBlendBindGroup=this.device.createBindGroup({label:"Shape Blend Bind Group",layout:this.shapeBlendPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.buffers.vTemplate}},{binding:1,resource:{buffer:this.buffers.shapedirs}},{binding:2,resource:{buffer:this.vShapedBuffer}},{binding:3,resource:{buffer:e}}]}),this.poseDeformBindGroup=this.device.createBindGroup({label:"Pose Deform Bind Group",layout:this.poseDeformPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.vShapedBuffer}},{binding:1,resource:{buffer:this.buffers.posedirs}},{binding:2,resource:{buffer:this.vPosedBuffer}}]}),this.jointRegressBindGroup=this.device.createBindGroup({label:"Joint Regress Bind Group",layout:this.jointRegressPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.vPosedBuffer}},{binding:1,resource:{buffer:this.buffers.jRegressor}},{binding:2,resource:{buffer:this.jointsBuffer}}]}),this.fkBindGroup=this.device.createBindGroup({label:"FK Bind Group",layout:this.fkPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.jointsBuffer}},{binding:1,resource:{buffer:this.jointTransformsBuffer}}]}),this.lbsBindGroup=this.device.createBindGroup({label:"LBS Bind Group",layout:this.lbsPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.vPosedBuffer}},{binding:1,resource:{buffer:this.jointTransformsBuffer}},{binding:2,resource:{buffer:this.buffers.lbsWeights}},{binding:3,resource:{buffer:this.vDeformedBuffer}}]}),this.faceGeometryBindGroup=this.device.createBindGroup({label:"Face Geometry Bind Group",layout:this.faceGeometryPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.vDeformedBuffer}},{binding:1,resource:{buffer:this.buffers.faces}},{binding:2,resource:{buffer:this.faceGeometriesBuffer}}]})}uploadParamsToStorage(e){console.warn("⚠️ FLAMEPipeline.uploadParamsToStorage() is deprecated. Parameters are now managed by FLAMEGPUBuffers.")}compute(e,t=!1,r){const a=Math.ceil(this.vertexCount/256),n=Math.ceil(this.faceCount/256);t&&(console.log("🔍 [FLAME Compute] Dispatch info:"),console.log(`  Vertices: ${this.vertexCount}, Workgroups: ${a} (256 per group)`),console.log(`  Faces: ${this.faceCount}, Workgroups: ${n} (256 per group)`),console.log(`  Joints: ${this.jointCount}`));const i=e.beginComputePass({label:"FLAME Shape Blending",timestampWrites:r==null?void 0:r.getTimestampWrites("FLAME-ShapeBlend")});i.setPipeline(this.shapeBlendPipeline),i.setBindGroup(0,this.shapeBlendParamsBindGroup),i.setBindGroup(1,this.shapeBlendBindGroup),i.dispatchWorkgroups(a),i.end();const o=e.beginComputePass({label:"FLAME Pose Deformation",timestampWrites:r==null?void 0:r.getTimestampWrites("FLAME-PoseDeform")});o.setPipeline(this.poseDeformPipeline),o.setBindGroup(0,this.poseDeformParamsBindGroup),o.setBindGroup(1,this.poseDeformBindGroup),o.dispatchWorkgroups(a),o.end();const l=e.beginComputePass({label:"FLAME Joint Regression",timestampWrites:r==null?void 0:r.getTimestampWrites("FLAME-JointRegress")});l.setPipeline(this.jointRegressPipeline),l.setBindGroup(0,this.jointRegressMetadataBindGroup),l.setBindGroup(1,this.jointRegressBindGroup),l.dispatchWorkgroups(this.jointCount,1,1),l.end();const f=e.beginComputePass({label:"FLAME Forward Kinematics",timestampWrites:r==null?void 0:r.getTimestampWrites("FLAME-FK")});f.setPipeline(this.fkPipeline),f.setBindGroup(0,this.fkParamsBindGroup),f.setBindGroup(1,this.fkBindGroup),f.dispatchWorkgroups(1,1,1),f.end();const d=e.beginComputePass({label:"FLAME LBS",timestampWrites:r==null?void 0:r.getTimestampWrites("FLAME-LBS")});d.setPipeline(this.lbsPipeline),d.setBindGroup(0,this.lbsMetadataBindGroup),d.setBindGroup(1,this.lbsBindGroup),d.dispatchWorkgroups(a),d.end(),t&&console.log(`  🔧 LBS: Dispatching ${a} workgroups`);const h=e.beginComputePass({label:"FLAME Face Geometry",timestampWrites:r==null?void 0:r.getTimestampWrites("FLAME-FaceGeometry")});return h.setPipeline(this.faceGeometryPipeline),h.setBindGroup(1,this.faceGeometryBindGroup),h.dispatchWorkgroups(n),h.end(),{faceGeometries:this.faceGeometriesBuffer,faceCount:this.faceCount}}destroy(){var e,t,r,a,n,i;(e=this.vShapedBuffer)==null||e.destroy(),(t=this.vPosedBuffer)==null||t.destroy(),(r=this.jointsBuffer)==null||r.destroy(),(a=this.jointTransformsBuffer)==null||a.destroy(),(n=this.vDeformedBuffer)==null||n.destroy(),(i=this.faceGeometriesBuffer)==null||i.destroy(),console.log("🧹 FLAME Pipeline destroyed")}async debugReadVShaped(){const e=this.vertexCount*3*4;return this.debugReadGPUBuffer(this.vShapedBuffer,e)}async debugReadVPosed(){const e=this.vertexCount*3*4;return this.debugReadGPUBuffer(this.vPosedBuffer,e)}async debugReadJoints(){const e=this.jointCount*3*4;return this.debugReadGPUBuffer(this.jointsBuffer,e)}async debugReadJointTransforms(){const e=this.jointCount*16*4;return this.debugReadGPUBuffer(this.jointTransformsBuffer,e)}async debugReadVDeformed(){const e=this.vertexCount*3*4;return this.debugReadGPUBuffer(this.vDeformedBuffer,e)}async debugReadFaceGeometries(){const e=this.faceCount*8*4;return this.debugReadGPUBuffer(this.faceGeometriesBuffer,e)}async debugReadLBSWeights(e=10){const t=e*this.jointCount*4;return this.debugReadGPUBuffer(this.buffers.lbsWeights,t)}async debugReadMetadata(){const t=this.device.createBuffer({label:"Debug Metadata Staging Buffer",size:20,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),r=this.device.createCommandEncoder({label:"Debug Read Metadata"});r.copyBufferToBuffer(this.buffers.metadata,0,t,0,20),this.device.queue.submit([r.finish()]),await t.mapAsync(GPUMapMode.READ);const a=t.getMappedRange(),n=new Uint32Array(a.slice(0));return t.unmap(),t.destroy(),n}async debugReadGPUBuffer(e,t){const r=this.device.createBuffer({label:"Debug Staging Buffer",size:t,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),a=this.device.createCommandEncoder({label:"Debug Read Encoder"});a.copyBufferToBuffer(e,0,r,0,t),this.device.queue.submit([a.finish()]),await r.mapAsync(GPUMapMode.READ);const n=r.getMappedRange(),i=new Float32Array(n.slice(0));return r.unmap(),r.destroy(),i}}class Pe{constructor(e,t){s(this,"canvas");s(this,"backgroundColor");s(this,"device",null);s(this,"context",null);s(this,"renderPipeline",null);s(this,"quadVertexBuffer",null);s(this,"uniformBuffer",null);s(this,"uniformBindGroup",null);s(this,"sortIndexBuffer",null);s(this,"splatDataBuffer",null);s(this,"storageBindGroup",null);s(this,"lastSortOrder",null);s(this,"bindGroupNeedsUpdate",!1);s(this,"transformPipeline",null);s(this,"cpuSortPipeline",null);s(this,"gpuProfiler",null);s(this,"flameGPUBuffers",null);s(this,"flamePipeline",null);s(this,"sortMode","balance");s(this,"firstFrameSorted",!1);s(this,"splatCount",0);s(this,"presentationFormat","bgra8unorm");this.canvas=e,this.backgroundColor=t||[1,1,1,1]}async initialize(){const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("WebGPU: No GPU adapter found");const t=[];if(e.features.has("timestamp-query")&&t.push("timestamp-query"),this.device=await e.requestDevice({requiredFeatures:t}),this.context=this.canvas.getContext("webgpu"),!this.context)throw new Error("WebGPU: Failed to get canvas context");this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.presentationFormat,alphaMode:"opaque"}),this.createUniformBuffer(),this.createQuadVertexBuffer(),await this.createRenderPipeline(),this.transformPipeline=new oe(this.device),await this.transformPipeline.initialize(),this.cpuSortPipeline=new le(this.device),this.gpuProfiler=new ue(this.device),this.gpuProfiler.isSupported()?console.log("✅ GPU Timestamp Queries enabled"):console.log("⚠️  GPU Timestamp Queries not supported on this device")}createUniformBuffer(){if(!this.device)return;const e=160;this.uniformBuffer=this.device.createBuffer({label:"Uniform Buffer",size:e,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}createQuadVertexBuffer(){if(!this.device)return;const e=new Float32Array([-1,-1,-1,1,1,-1,1,1]);this.quadVertexBuffer=this.device.createBuffer({label:"Quad Vertex Buffer",size:e.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.quadVertexBuffer.getMappedRange()).set(e),this.quadVertexBuffer.unmap()}async createRenderPipeline(){if(!this.device)return;const e=this.device.createShaderModule({label:"3DGS Render Shader",code:se}),t=this.device.createBindGroupLayout({label:"Uniform Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),r=this.device.createBindGroupLayout({label:"Storage Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),a=this.device.createPipelineLayout({label:"Render Pipeline Layout",bindGroupLayouts:[t,r]}),n=[{arrayStride:8,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]}];this.renderPipeline=this.device.createRenderPipeline({label:"3DGS Render Pipeline",layout:a,vertex:{module:e,entryPoint:"vertexMain",buffers:n},fragment:{module:e,entryPoint:"fragmentMain",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",stripIndexFormat:void 0},depthStencil:void 0}),this.uniformBindGroup=this.device.createBindGroup({label:"Uniform Bind Group",layout:t,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]})}loadSplatsFromPackedData(e,t,r){if(!this.device)throw new Error("Device not initialized");if(this.splatCount=t,(!this.splatDataBuffer||this.splatDataBuffer.size!==e.byteLength)&&(this.splatDataBuffer&&this.splatDataBuffer.destroy(),this.splatDataBuffer=this.device.createBuffer({label:"Splat Data Buffer",size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.bindGroupNeedsUpdate=!0),this.device.queue.writeBuffer(this.splatDataBuffer,0,e.buffer,e.byteOffset,e.byteLength),r){const a=r.byteLength,n=!this.lastSortOrder||r!==this.lastSortOrder;if((!this.sortIndexBuffer||this.sortIndexBuffer.size!==a)&&(this.sortIndexBuffer&&this.sortIndexBuffer.destroy(),this.sortIndexBuffer=this.device.createBuffer({label:"Sort Index Buffer",size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.bindGroupNeedsUpdate=!0),n&&(this.device.queue.writeBuffer(this.sortIndexBuffer,0,r.buffer,r.byteOffset,r.byteLength),this.lastSortOrder=r),this.bindGroupNeedsUpdate&&this.renderPipeline&&this.sortIndexBuffer&&this.splatDataBuffer){const i=this.renderPipeline.getBindGroupLayout(1);this.storageBindGroup=this.device.createBindGroup({label:"Storage Bind Group",layout:i,entries:[{binding:0,resource:{buffer:this.sortIndexBuffer}},{binding:1,resource:{buffer:this.splatDataBuffer}}]}),this.bindGroupNeedsUpdate=!1}}}render(e,t,r){if(!this.device||!this.context||!this.renderPipeline||this.splatCount===0||!this.storageBindGroup)return;this.updateUniforms(e,t,r);const a=this.context.getCurrentTexture().createView(),n=this.device.createCommandEncoder({label:"Render Command Encoder"}),i=n.beginRenderPass({label:"Render Pass",colorAttachments:[{view:a,clearValue:{r:this.backgroundColor[0],g:this.backgroundColor[1],b:this.backgroundColor[2],a:this.backgroundColor[3]},loadOp:"clear",storeOp:"store"}]});i.setPipeline(this.renderPipeline),i.setBindGroup(0,this.uniformBindGroup),i.setBindGroup(1,this.storageBindGroup),i.setVertexBuffer(0,this.quadVertexBuffer),i.draw(4,this.splatCount),i.end(),this.device.queue.submit([n.finish()])}updateUniforms(e,t,r){if(!this.device||!this.uniformBuffer)return;const a=new ArrayBuffer(160),n=new Float32Array(a),i=new Uint32Array(a);n.set(e,0),n.set(t,16),n[32]=r[0],n[33]=r[1],i[36]=1,this.device.queue.writeBuffer(this.uniformBuffer,0,a)}loadOriginalSplats(e,t){if(!this.transformPipeline)throw new Error("Transform pipeline not initialized");this.transformPipeline.uploadOriginalSplats(e,t),this.splatCount=t;const r=new Uint32Array(t);for(let a=0;a<t;a++)r[a]=a;if(this.sortIndexBuffer=this.device.createBuffer({label:"Default Sort Index Buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.device.queue.writeBuffer(this.sortIndexBuffer,0,r),this.splatDataBuffer=this.transformPipeline.getTransformedOutputBuffer(),this.renderPipeline&&this.sortIndexBuffer&&this.splatDataBuffer){const a=this.renderPipeline.getBindGroupLayout(1);this.storageBindGroup=this.device.createBindGroup({label:"Initial Storage Bind Group",layout:a,entries:[{binding:0,resource:{buffer:this.sortIndexBuffer}},{binding:1,resource:{buffer:this.splatDataBuffer}}]})}this.cpuSortPipeline&&(this.cpuSortPipeline.initialize(t),console.log("🚀 WebGPU Renderer: GPU Transform + CPU Radix Sort (自实现)"))}loadFLAMETemplateData(e,t){if(!this.device)throw new Error("WebGPU device not initialized");console.log("🔧 Loading FLAME template data to GPU..."),this.flameGPUBuffers=new fe,this.flameGPUBuffers.initialize(this.device,e,t),this.flamePipeline=new ye(this.device,this.flameGPUBuffers.getBuffers(),e.vertexCount,e.faceCount,e.jointCount),console.log("✅ FLAME template data loaded to GPU & Pipeline initialized")}updateFLAMEFrameParams(e){if(!this.flameGPUBuffers)throw new Error("FLAME GPU buffers not initialized");this.flameGPUBuffers.updateFrameParams(e)}computeFLAME(e){if(!this.flamePipeline)throw new Error("FLAME Pipeline not initialized");return this.flamePipeline.compute(e,!1,this.gpuProfiler)}async renderWithFaceGeometry(e,t,r,a){var d,h,u,m;if(!this.transformPipeline||!this.cpuSortPipeline){console.error("❌ Transform/Sort pipeline not ready");return}if(!this.device||!this.context||!this.renderPipeline||!this.uniformBindGroup||!this.storageBindGroup){console.error("❌ Render resources not ready");return}this.transformPipeline.updateFaceGeometry(e),this.transformPipeline.updateViewMatrix(t),this.updateUniforms(t,r,a),(d=this.gpuProfiler)==null||d.reset();const n=this.device.createCommandEncoder({label:"Unified Encoder (Transform+Sort+Render)"});this.transformPipeline.executeInEncoder(n);const i=this.transformPipeline.getDepthsOutputBuffer();if(this.sortMode==="balance")if(!this.firstFrameSorted&&i&&this.cpuSortPipeline){await this.cpuSortPipeline.sortOnce(i,n);const P=this.cpuSortPipeline.getSortedIndicesBuffer(),v=this.device.createCommandEncoder();v.copyBufferToBuffer(P,0,this.sortIndexBuffer,0,this.cpuSortPipeline.getIndicesBufferSize()),this.device.queue.submit([v.finish()]),this.firstFrameSorted=!0,console.log("✅ [Balance] First frame sorted")}else this.device.queue.submit([n.finish()]);else if(i&&this.cpuSortPipeline){await this.cpuSortPipeline.sortEveryFrame(i,n),this.device.queue.submit([n.finish()]),this.cpuSortPipeline.startAsyncSort();const P=this.cpuSortPipeline.getSortedIndicesBuffer(),v=this.device.createCommandEncoder();v.copyBufferToBuffer(P,0,this.sortIndexBuffer,0,this.cpuSortPipeline.getIndicesBufferSize()),this.device.queue.submit([v.finish()])}else this.device.queue.submit([n.finish()]);const o=this.device.createCommandEncoder({label:"Render Encoder"}),l=this.context.getCurrentTexture().createView(),f=o.beginRenderPass({label:"Render Pass",colorAttachments:[{view:l,clearValue:{r:this.backgroundColor[0],g:this.backgroundColor[1],b:this.backgroundColor[2],a:this.backgroundColor[3]},loadOp:"clear",storeOp:"store"}],timestampWrites:(h=this.gpuProfiler)==null?void 0:h.getTimestampWrites("Render")});f.setPipeline(this.renderPipeline),f.setBindGroup(0,this.uniformBindGroup),f.setBindGroup(1,this.storageBindGroup),f.setVertexBuffer(0,this.quadVertexBuffer),f.draw(4,this.splatCount,0,0),f.end(),(u=this.gpuProfiler)==null||u.resolve(o),this.device.queue.submit([o.finish()]),(m=this.gpuProfiler)==null||m.readPreviousFrame()}async renderWithGPUFLAME(e,t,r){var h,u,m,P;if(!this.transformPipeline||!this.cpuSortPipeline||!this.flamePipeline){console.error("❌ Pipeline not ready (Transform/Sort/FLAME)");return}if(!this.device||!this.context||!this.renderPipeline||!this.uniformBindGroup||!this.storageBindGroup){console.error("❌ Render resources not ready");return}this.transformPipeline.updateViewMatrix(e),this.updateUniforms(e,t,r),(h=this.gpuProfiler)==null||h.reset();const a=this.device.createCommandEncoder({label:"Unified Encoder (FLAME+Transform+Sort+Render)"}),{faceGeometries:n,faceCount:i}=this.flamePipeline.compute(a,!1,this.gpuProfiler);this.transformPipeline.setFaceGeometryBufferFromGPU(n,i),this.transformPipeline.executeInEncoder(a,this.gpuProfiler);const o=this.transformPipeline.getDepthsOutputBuffer();if(this.sortMode==="balance")if(!this.firstFrameSorted&&o&&this.cpuSortPipeline){await this.cpuSortPipeline.sortOnce(o,a);const v=this.cpuSortPipeline.getSortedIndicesBuffer(),y=this.device.createCommandEncoder();y.copyBufferToBuffer(v,0,this.sortIndexBuffer,0,this.cpuSortPipeline.getIndicesBufferSize()),this.device.queue.submit([y.finish()]),this.firstFrameSorted=!0,console.log("✅ [Balance] First frame sorted (GPU FLAME)")}else this.device.queue.submit([a.finish()]);else if(o&&this.cpuSortPipeline){await this.cpuSortPipeline.sortEveryFrame(o,a),this.device.queue.submit([a.finish()]),this.cpuSortPipeline.startAsyncSort();const v=this.cpuSortPipeline.getSortedIndicesBuffer(),y=this.device.createCommandEncoder();y.copyBufferToBuffer(v,0,this.sortIndexBuffer,0,this.cpuSortPipeline.getIndicesBufferSize()),this.device.queue.submit([y.finish()])}else this.device.queue.submit([a.finish()]);const l=this.device.createCommandEncoder({label:"Render Encoder (GPU FLAME)"}),f=this.context.getCurrentTexture().createView(),d=l.beginRenderPass({label:"Render Pass",colorAttachments:[{view:f,clearValue:{r:this.backgroundColor[0],g:this.backgroundColor[1],b:this.backgroundColor[2],a:this.backgroundColor[3]},loadOp:"clear",storeOp:"store"}],timestampWrites:(u=this.gpuProfiler)==null?void 0:u.getTimestampWrites("Render")});d.setPipeline(this.renderPipeline),d.setBindGroup(0,this.uniformBindGroup),d.setBindGroup(1,this.storageBindGroup),d.setVertexBuffer(0,this.quadVertexBuffer),d.draw(4,this.splatCount,0,0),d.end(),(m=this.gpuProfiler)==null||m.resolve(l),this.device.queue.submit([l.finish()]),(P=this.gpuProfiler)==null||P.readPreviousFrame()}async debugReadFaceGeometry(){if(!this.device||!this.flamePipeline)return null;const e=this.flamePipeline.faceGeometriesBuffer,t=this.flamePipeline.faceCount;if(!e||!t)return null;const r=this.device.createBuffer({size:t*8*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,r,0,t*8*4),this.device.queue.submit([a.finish()]),await r.mapAsync(GPUMapMode.READ);const n=new Float32Array(r.getMappedRange()).slice();return r.unmap(),r.destroy(),n}setSortMode(e){this.sortMode!==e&&(this.sortMode=e,e==="quality"?(this.firstFrameSorted=!1,console.log("🔄 [QUALITY] Mode activated: GPU sort will execute every frame")):(this.firstFrameSorted=!1,console.log("🔄 [BALANCE] Mode activated: GPU sort will execute on first frame only")))}getSortMode(){return this.sortMode}getGPUTimings(){var t;const e=((t=this.gpuProfiler)==null?void 0:t.getLastResults())||{};return this.cpuSortPipeline&&this.cpuSortPipeline.lastSortTime>0&&(e["CPU-Sort"]=this.cpuSortPipeline.lastSortTime),e}dispose(){var e,t,r,a,n,i,o,l;(e=this.sortIndexBuffer)==null||e.destroy(),(t=this.splatDataBuffer)==null||t.destroy(),(r=this.quadVertexBuffer)==null||r.destroy(),(a=this.uniformBuffer)==null||a.destroy(),(n=this.transformPipeline)==null||n.destroy(),(i=this.cpuSortPipeline)==null||i.destroy(),(o=this.gpuProfiler)==null||o.destroy(),(l=this.device)==null||l.destroy(),this.sortIndexBuffer=null,this.splatDataBuffer=null,this.quadVertexBuffer=null,this.uniformBuffer=null,this.uniformBindGroup=null,this.storageBindGroup=null,this.transformPipeline=null,this.cpuSortPipeline=null,this.gpuProfiler=null,this.device=null,this.context=null,this.renderPipeline=null}}let B=null,O=null,D=null,q=null,k=null,j=null;const A=2048,V=A-1;function W(c,e,t){const a=c.length/13;(!B||B.length!==a)&&(B=new Float32Array(a),O=new Uint32Array(B.buffer),D=new Uint32Array(a),q=new Uint32Array(a),k=new Uint32Array(a),j=new Uint32Array(A));const n=B,i=O,o=D,l=q,f=k,d=j,h=e[0],u=e[1],m=e[2],P=t[0],v=t[1],y=t[2];for(let p=0;p<a;p++){const b=p*13;n[p]=(c[b]-h)*P+(c[b+1]-u)*v+(c[b+2]-m)*y,o[p]=p}for(let p=0;p<a;p++){const b=i[p];i[p]=b^(-(b>>31)|2147483648)}M(i,o,l,d,0,a),M(i,l,o,d,11,a),M(i,o,l,d,22,a);for(let p=0;p<a;p++)f[p]=l[a-1-p];return f}function M(c,e,t,r,a,n){r.fill(0);for(let o=0;o<n;o++){const l=c[e[o]]>>a&V;r[l]++}let i=0;for(let o=0;o<A;o++){const l=r[o];r[o]=i,i+=l}for(let o=0;o<n;o++){const l=e[o],f=c[l]>>a&V;t[r[f]++]=l}}const C=13;let S=null;function be(c,e){const t=e.length,r=t*C;(!S||S.length!==r)&&(S=new Float32Array(r));for(let a=0;a<t;a++){const i=e[a]*C,o=a*C;for(let l=0;l<C;l++)S[o+l]=c[i+l]}return S}class we{constructor(e){s(this,"renderer",null);s(this,"backend",null);s(this,"canvas");s(this,"options");s(this,"camera");s(this,"viewMatrix",new Float32Array(16));s(this,"projectionMatrix",new Float32Array(16));s(this,"originalPackedData",null);s(this,"sortMode","balance");s(this,"cachedSortOrder",null);s(this,"sortOrderComputed",!1);s(this,"renderTime",0);s(this,"flameTime",0);s(this,"transformTime",0);s(this,"cpuSortTime",0);s(this,"frameCount",0);this.options=e,this.canvas=e.canvas,this.sortMode=e.sortMode||"balance";const t=e.camera||{position:[-.02,-.013,1.5],target:[0,0,0],fov:22,near:.01,far:100};this.camera={...t,up:[0,1,0],aspect:1}}async initialize(){const{preferBackend:e,backgroundColor:t}=this.options;if(e!=="webgl"&&await this.checkWebGPUSupport())try{this.renderer=new Pe(this.canvas,t),await this.renderer.initialize(),this.backend="webgpu",console.log("✅ Using WebGPU renderer"),this.updateCameraAspect();return}catch(a){console.warn("⚠️ WebGPU init failed, fallback to WebGL:",a)}this.renderer=new ne(this.canvas,t),await this.renderer.initialize(),this.backend="webgl",console.log("✅ Using WebGL renderer"),this.updateCameraAspect()}loadSplatsFromPackedData(e){if(!this.renderer)throw new Error("Renderer not initialized");const t=this.originalPackedData&&this.originalPackedData.length===e.length;this.originalPackedData=e,t||(this.sortOrderComputed=!1,this.cachedSortOrder=null)}renderFrame(){if(!this.renderer||!this.originalPackedData)return;const e=performance.now();this.updateCameraMatrices();const t=Math.floor(this.originalPackedData.length/13);let r;if(this.sortMode==="quality"?(performance.now(),r=W(this.originalPackedData,this.camera.position,this.getCameraForward())):(this.sortOrderComputed||(this.cachedSortOrder=W(this.originalPackedData,this.camera.position,this.getCameraForward()),this.sortOrderComputed=!0),r=this.cachedSortOrder),this.backend==="webgpu")this.renderer.loadSplatsFromPackedData(this.originalPackedData,t,r);else{const a=be(this.originalPackedData,r);this.renderer.loadSplatsFromPackedData(a,t)}this.renderer.render(this.viewMatrix,this.projectionMatrix,[this.canvas.width,this.canvas.height]),this.renderTime=performance.now()-e}async renderFrameWithFaceGeometry(e){if(!this.renderer||this.backend!=="webgpu"){console.error("❌ renderFrameWithFaceGeometry only works with WebGPU");return}const t=performance.now();this.updateCameraMatrices();const r=this.renderer;typeof r.setSortMode=="function"&&r.setSortMode(this.sortMode),typeof r.renderWithFaceGeometry=="function"?await r.renderWithFaceGeometry(e,this.viewMatrix,this.projectionMatrix,[this.canvas.width,this.canvas.height]):console.error("❌ WebGPU renderer does not support renderWithFaceGeometry"),this.renderTime=performance.now()-t}async renderFrameWithGPUFLAME(){if(!this.renderer||this.backend!=="webgpu"){console.error("❌ renderFrameWithGPUFLAME only works with WebGPU");return}const e=performance.now();this.updateCameraMatrices();const t=this.renderer;if(typeof t.setSortMode=="function"&&t.setSortMode(this.sortMode),typeof t.renderWithGPUFLAME=="function"?await t.renderWithGPUFLAME(this.viewMatrix,this.projectionMatrix,[this.canvas.width,this.canvas.height]):console.error("❌ WebGPU renderer does not support renderWithGPUFLAME"),this.renderTime=performance.now()-e,typeof t.getGPUTimings=="function"){const r=t.getGPUTimings(),a=["FLAME-ShapeBlend","FLAME-StaticOffset","FLAME-PoseDeform","FLAME-JointRegress","FLAME-FK","FLAME-LBS"];if(this.flameTime=a.reduce((n,i)=>n+(r[i]||0),0),this.transformTime=r.Transform||0,this.cpuSortTime=r["CPU-Sort"]||0,Object.keys(r).length>0&&(this.frameCount||(this.frameCount=0),this.frameCount++,this.frameCount%60===0)){console.log("📊 GPU Profiler Results (Frame "+this.frameCount+"):");let n=0;Object.entries(r).forEach(([i,o])=>{const l=o;console.log(`  ${i}: ${l.toFixed(3)} ms`),n+=l}),console.log(`  ✅ Total GPU Time: ${n.toFixed(3)} ms`)}}else this.flameTime=0,this.transformTime=0,this.cpuSortTime=0}setSortMode(e){this.sortMode!==e&&(this.sortMode=e,this.sortOrderComputed=!1,this.cachedSortOrder=null,console.log(`🎨 Sort mode changed to: ${e}`))}getSortMode(){return this.sortMode}updateCamera(e){Object.assign(this.camera,e),this.updateCameraAspect()}handleResize(){this.updateCameraAspect()}getBackend(){return this.backend}dispose(){var e;(e=this.renderer)==null||e.dispose(),this.renderer=null}async checkWebGPUSupport(){if(!navigator.gpu)return!1;try{return await navigator.gpu.requestAdapter()!==null}catch{return!1}}updateCameraAspect(){this.camera.aspect=this.canvas.width/this.canvas.height}updateCameraMatrices(){this.updatePerspectiveMatrix(this.camera.fov,this.camera.aspect,this.camera.near,this.camera.far),this.updateLookAtMatrix(this.camera.position,this.camera.target,this.camera.up)}getCameraForward(){const e=[this.camera.target[0]-this.camera.position[0],this.camera.target[1]-this.camera.position[1],this.camera.target[2]-this.camera.position[2]],t=Math.sqrt(e[0]**2+e[1]**2+e[2]**2);return t>0&&(e[0]/=t,e[1]/=t,e[2]/=t),e}updatePerspectiveMatrix(e,t,r,a){const n=1/Math.tan(e*Math.PI/180/2),i=1/(r-a),o=this.projectionMatrix;o[0]=n/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=n,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+a)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*a*i*2,o[15]=0}updateLookAtMatrix(e,t,r){const a=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],n=Math.sqrt(a[0]**2+a[1]**2+a[2]**2);a[0]/=n,a[1]/=n,a[2]/=n;const i=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],o=Math.sqrt(i[0]**2+i[1]**2+i[2]**2);i[0]/=o,i[1]/=o,i[2]/=o;const l=[a[1]*i[2]-a[2]*i[1],a[2]*i[0]-a[0]*i[2],a[0]*i[1]-a[1]*i[0]],f=this.viewMatrix;f[0]=i[0],f[1]=l[0],f[2]=a[0],f[3]=0,f[4]=i[1],f[5]=l[1],f[6]=a[1],f[7]=0,f[8]=i[2],f[9]=l[2],f[10]=a[2],f[11]=0,f[12]=-(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]),f[13]=-(l[0]*e[0]+l[1]*e[1]+l[2]*e[2]),f[14]=-(a[0]*e[0]+a[1]*e[1]+a[2]*e[2]),f[15]=1}}const g={rendering:{backgroundColor:[1,1,1,1],sortMode:"balance"},camera:{position:[-.02,-.013,1.5],target:[0,0,0],fov:22,near:.01,far:100},animation:{fps:25,idleFile:"idle.pb",audioFile:"mono.pb",audioWavFile:"mono.wav"},avatar:{baseAssetsPath:"/",modelFolder:"3dgs4",wasmPath:"/src/wasm/avatar_core_wasm.js"},wasm:{logLevel:"basic",enableValidation:!1,enablePerformanceMetrics:!0}};class xe{constructor(){s(this,"audio",null);s(this,"_isPlaying",!1);s(this,"fps",g.animation.fps);s(this,"onEndedCallback")}async initialize(e,t){return this.onEndedCallback=t,new Promise((r,a)=>{this.audio=new Audio(e),this.audio.addEventListener("canplaythrough",()=>{this.setupEventListeners(),r()},{once:!0}),this.audio.addEventListener("error",()=>{a(new Error(`Failed to load audio: ${e}`))},{once:!0}),this.audio.load()})}setupEventListeners(){this.audio&&(this.audio.addEventListener("play",()=>{this._isPlaying=!0}),this.audio.addEventListener("ended",()=>{var e;this._isPlaying=!1,(e=this.onEndedCallback)==null||e.call(this)}))}async play(){if(!this.audio)throw new Error("Audio not loaded");this.audio.currentTime=0,await this.audio.play()}stop(){this.audio&&(this._isPlaying=!1,this.audio.pause(),this.audio.currentTime=0)}isPlaying(){return this._isPlaying}getCurrentFrameIndex(){return this.audio?Math.floor(this.audio.currentTime*this.fps):0}dispose(){this.stop(),this.audio&&(this.audio.src="",this.audio=null),this.onEndedCallback=void 0}}class Be{constructor(){s(this,"avatarCore",null);s(this,"renderSystem",null);s(this,"animationPlayer",null);s(this,"animationLoopId",null);s(this,"animationStartTime",0);s(this,"lastFrameIndex",-1);s(this,"onPlaybackEndedCallback");s(this,"statsCache",{flameTime:0,transformTime:0,renderTime:0,cpuSortTime:0})}async initialize(e){console.log("🚀 Initializing Avatar App...");try{await this.initializeAvatarCore(),await this.initializeRenderSystem(e),await this.initializeWebGPUOptimization(),await this.renderFirstFrame(),this.startAnimationLoop(),console.log("✅ Avatar App initialized successfully"),console.log(`🎨 Rendering mode: ${this.renderSystem.getSortMode().toUpperCase()}`),this.renderSystem.getSortMode()==="balance"?console.log("  ↳ Balance mode: First-frame sorting, subsequent frames reuse cache"):console.log("  ↳ Quality mode: Every frame re-sorting")}catch(t){throw console.error("❌ Avatar App initialization failed:",t),t}}async initializeAvatarCore(){console.log("🔧 Initializing Avatar Core (main thread)..."),this.avatarCore=new te({logLevel:g.wasm.logLevel,enableValidation:g.wasm.enableValidation,enablePerformanceMetrics:g.wasm.enablePerformanceMetrics,baseAssetsPath:g.avatar.baseAssetsPath,modelFolder:g.avatar.modelFolder,wasmPath:g.avatar.wasmPath}),await this.avatarCore.initialize(),await this.avatarCore.loadCharacter(),await this.avatarCore.loadAnimation(),console.log("✅ Avatar Core initialized")}async initializeRenderSystem(e){this.renderSystem=new we({canvas:e,backgroundColor:g.rendering.backgroundColor,camera:g.camera,sortMode:g.rendering.sortMode}),await this.renderSystem.initialize()}async initializeWebGPUOptimization(){if(!this.avatarCore||!this.renderSystem)return;const e=this.renderSystem.getBackend();if(e==="webgpu"){console.log("🚀 WebGPU detected: Initializing GPU optimization...");try{const t=this.renderSystem.renderer;console.log("📦 Getting character shape parameters...");const r=await this.avatarCore.getCharacterShapeParams();if(!r)throw new Error("Failed to get character shape parameters");console.log(`✅ Got ${r.length} shape parameters`),console.log("📦 Loading FLAME template data...");const a=await this.avatarCore.getFLAMETemplateData();a&&t&&typeof t.loadFLAMETemplateData=="function"&&(t.loadFLAMETemplateData(a,r),console.log("✅ FLAME template data uploaded to GPU"));const n=await this.avatarCore.getOriginalSplatsData();n&&n.data&&t&&typeof t.loadOriginalSplats=="function"&&(t.loadOriginalSplats(n.data,n.count),console.log("✅ Original splats uploaded to GPU")),console.log("✅ WebGPU optimization initialized")}catch(t){console.error("❌ Failed to initialize WebGPU optimization:",t)}}else console.log(`📊 Using ${e} backend: Standard pipeline (WASM full compute)`)}async renderFirstFrame(){console.log("🎬 Rendering first frame (idle pose)..."),await this.renderFrame(0)}async renderFrame(e){if(!this.avatarCore||!this.renderSystem)return;this.renderSystem.getBackend()==="webgpu"?await this.renderFrameWebGPU(e):await this.renderFrameWebGL(e)}async renderFrameWebGL(e){const t=await this.avatarCore.computeCompleteFrameFlat({frameIndex:e});if(!t){console.warn("⚠️ No splat data returned from WASM");return}this.renderSystem.loadSplatsFromPackedData(t),this.renderSystem.renderFrame()}async renderFrameWebGPU(e){const t=this.renderSystem.renderer;if(t&&typeof t.computeFLAME=="function")return this.renderFrameWebGPU_GPU(e);const a=await this.avatarCore.computeFrameAsFaceGeometry({frameIndex:e});if(!a){console.warn("⚠️ No face geometry data returned from WASM");return}await this.renderSystem.renderFrameWithFaceGeometry(a)}async renderFrameWebGPU_GPU(e){const t=await this.avatarCore.getFLAMEFrameParams(e);if(!t){console.warn("⚠️ No FLAME params returned from WASM");return}const r=this.renderSystem.renderer;typeof r.updateFLAMEFrameParams=="function"&&r.updateFLAMEFrameParams(t),typeof this.renderSystem.renderFrameWithGPUFLAME=="function"?await this.renderSystem.renderFrameWithGPUFLAME():console.error("❌ RenderSystem does not support GPU FLAME rendering")}startAnimationLoop(){this.animationStartTime=Date.now(),this.scheduleNextFrame()}scheduleNextFrame(){const e=1e3/g.animation.fps;this.animationLoopId=setTimeout(()=>{this.renderCurrentFrame(),this.scheduleNextFrame()},e)}async renderCurrentFrame(){const e=this.getCurrentFrameIndex();if(e!==this.lastFrameIndex)try{await this.renderFrame(e),this.lastFrameIndex=e}catch(t){console.error("❌ Animation loop error:",t)}}getCurrentFrameIndex(){var t;if((t=this.animationPlayer)!=null&&t.isPlaying())return this.animationPlayer.getCurrentFrameIndex();const e=(Date.now()-this.animationStartTime)/1e3;return Math.floor(e*g.animation.fps)}stopAnimationLoop(){this.animationLoopId!==null&&(clearTimeout(this.animationLoopId),this.animationLoopId=null)}setOnPlaybackEnded(e){this.onPlaybackEndedCallback=e}async playAudioAnimation(){try{if(await this.avatarCore.switchAnimationFile(g.animation.audioFile),this.animationPlayer)this.animationPlayer.stop();else{const e=`${g.avatar.baseAssetsPath}${g.avatar.modelFolder}/${g.animation.audioWavFile}`;this.animationPlayer=new xe,await this.animationPlayer.initialize(e,async()=>{this.animationPlayer.stop(),await this.avatarCore.switchAnimationFile(g.animation.idleFile),this.animationStartTime=Date.now(),this.onPlaybackEndedCallback&&this.onPlaybackEndedCallback()})}await this.animationPlayer.play()}catch(e){throw console.error("❌ Failed to play audio animation:",e),await this.avatarCore.switchAnimationFile(g.animation.idleFile),this.animationStartTime=Date.now(),e}}setSortMode(e){var t;(t=this.renderSystem)==null||t.setSortMode(e)}getSortMode(){var e;return((e=this.renderSystem)==null?void 0:e.getSortMode())||null}getRenderBackend(){var e;return((e=this.renderSystem)==null?void 0:e.getBackend())||null}getPerformanceStats(){var e,t,r,a;return this.statsCache.flameTime=((e=this.renderSystem)==null?void 0:e.flameTime)||0,this.statsCache.transformTime=((t=this.renderSystem)==null?void 0:t.transformTime)||0,this.statsCache.renderTime=((r=this.renderSystem)==null?void 0:r.renderTime)||0,this.statsCache.cpuSortTime=((a=this.renderSystem)==null?void 0:a.cpuSortTime)||0,this.statsCache}handleResize(){var e;(e=this.renderSystem)==null||e.handleResize()}dispose(){var e,t;this.stopAnimationLoop(),(e=this.renderSystem)==null||e.dispose(),(t=this.avatarCore)==null||t.release()}}class Se{constructor(){s(this,"loaderEl");s(this,"loaderMessage");s(this,"errorEl");s(this,"errorMessage");this.loaderEl=document.getElementById("loader"),this.loaderMessage=document.getElementById("loader-message"),this.errorEl=document.getElementById("error"),this.errorMessage=document.getElementById("error-message")}show(e="正在加载..."){this.loaderMessage.textContent=e,this.loaderEl.style.display="flex",this.errorEl.style.display="none"}hide(){this.loaderEl.style.display="none"}showError(e){this.loaderEl.style.display="none",this.errorEl.style.display="flex",this.errorMessage.textContent=e}}class _e{constructor(e){s(this,"app");s(this,"controlsEl");s(this,"backendInfo");s(this,"backendBadge");s(this,"playBtn");s(this,"sortBtn");s(this,"isPlaying",!1);s(this,"sortMode","balance");this.app=e,this.controlsEl=document.getElementById("controls"),this.backendInfo=document.getElementById("backend-info"),this.backendBadge=document.getElementById("backend-badge"),this.playBtn=document.getElementById("play-btn"),this.sortBtn=document.getElementById("sort-btn"),this.playBtn.addEventListener("click",()=>this.handlePlay()),this.sortBtn.addEventListener("click",()=>this.handleToggleSortMode())}show(){var t;const e=((t=this.app.getRenderBackend())==null?void 0:t.toUpperCase())||"Unknown";this.backendBadge.textContent=e,this.backendBadge.className=`badge backend-${e.toLowerCase()}`,this.backendInfo.style.display="flex",this.sortMode=this.app.getSortMode()||"balance",this.sortBtn.textContent=this.sortMode==="quality"?"🎯 Quality":"⚡ Balance",this.controlsEl.style.display="flex"}hide(){this.controlsEl.style.display="none",this.backendInfo.style.display="none"}setOnPlaybackEnded(e){this.app.setOnPlaybackEnded(()=>{this.isPlaying=!1,this.playBtn.disabled=!1,this.playBtn.textContent="▶️ 播放",e()})}async handlePlay(){if(!this.isPlaying)try{this.isPlaying=!0,this.playBtn.disabled=!0,this.playBtn.textContent="播放中...",await this.app.playAudioAnimation()}catch(e){throw console.error("❌ 播放失败:",e),this.isPlaying=!1,this.playBtn.disabled=!1,this.playBtn.textContent="▶️ 播放",e}}handleToggleSortMode(){this.sortMode=this.sortMode==="balance"?"quality":"balance",this.app.setSortMode(this.sortMode),this.sortBtn.textContent=this.sortMode==="quality"?"🎯 Quality":"⚡ Balance",console.log(`🎨 排序模式切换: ${this.sortMode}`)}}class Ce{constructor(e){s(this,"container");s(this,"fpsEl");s(this,"flameEl");s(this,"transformEl");s(this,"renderEl");s(this,"cpuSortEl",null);s(this,"frameCount",0);s(this,"lastFpsUpdate",0);s(this,"currentFps",0);s(this,"lastUpdate",0);s(this,"UPDATE_INTERVAL",1e3);this.container=document.getElementById(e),this.fpsEl=this.createStatItem("FPS","0"),this.flameEl=this.createStatItem("FLAME","0ms"),this.transformEl=this.createStatItem("Transform","0ms"),this.renderEl=this.createStatItem("Render","0ms"),this.container.appendChild(this.fpsEl),this.container.appendChild(this.flameEl),this.container.appendChild(this.transformEl),this.container.appendChild(this.renderEl)}createStatItem(e,t){const r=document.createElement("div");return r.className="stat-item",r.innerHTML=`
      <span class="stat-label">${e}:</span>
      <span class="stat-value">${t}</span>
    `,r}update(e,t,r,a){const n=performance.now();this.frameCount++,n-this.lastFpsUpdate>=1e3&&(this.currentFps=Math.round(this.frameCount*1e3/(n-this.lastFpsUpdate)),this.frameCount=0,this.lastFpsUpdate=n),!(n-this.lastUpdate<this.UPDATE_INTERVAL)&&(this.lastUpdate=n,this.updateValue(this.fpsEl,String(this.currentFps)),this.updateValue(this.flameEl,this.formatTime(e)),this.updateValue(this.transformEl,this.formatTime(t)),this.updateValue(this.renderEl,this.formatTime(r)),a!==void 0&&a>0?(this.cpuSortEl||(this.cpuSortEl=this.createStatItem("CPU-Sort","0ms"),this.container.appendChild(this.cpuSortEl)),this.updateValue(this.cpuSortEl,this.formatTime(a))):this.cpuSortEl&&(this.container.removeChild(this.cpuSortEl),this.cpuSortEl=null))}updateValue(e,t){const r=e.querySelector(".stat-value");r&&(r.textContent=t)}formatTime(e){return e.toFixed(1)+"ms"}}const _=document.getElementById("canvas");let w;function F(){const c=window.devicePixelRatio||1,e=window.innerWidth,t=window.innerHeight;_.width=Math.floor(e*c),_.height=Math.floor(t*c),_.style.width=`${e}px`,_.style.height=`${t}px`,w==null||w.handleResize()}function Me(c){function e(){if(!w)return;const t=w.getPerformanceStats();c.update(t.flameTime,t.transformTime,t.renderTime,t.cpuSortTime),requestAnimationFrame(e)}requestAnimationFrame(e)}async function Ae(){const c=new Se;try{F(),c.show("正在加载 WASM..."),w=new Be,await w.initialize(_);const e=new _e(w),t=new Ce("performance-stats");e.setOnPlaybackEnded(()=>{console.log("✅ 播放完成")}),c.hide(),e.show(),document.getElementById("performance-stats").style.display="block",Me(t),console.log("✅ Avatar App 初始化成功")}catch(e){console.error("❌ 初始化失败:",e),c.showError(e.message||"初始化失败")}}window.addEventListener("resize",F);window.addEventListener("orientationchange",F);window.addEventListener("DOMContentLoaded",Ae);
