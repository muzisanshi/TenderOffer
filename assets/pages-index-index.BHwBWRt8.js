import{m as e,o as t,c as l,w as a,r as i,a as o,b as r,t as u,n,d,i as s,e as p,u as f,h as c,f as h,g,I as m,j as y,k as b,l as x,p as S,F as _}from"./index-pjMFBzbH.js";const k=(e,t)=>{const l=e.__vccOpts||e;for(const[a,i]of t)l[a]=i;return l};const B=k({components:{FuiText:k({name:"fui-text",emits:["click"],props:{type:{type:String,default:"black"},text:{type:[Number,String],default:""},size:{type:[Number,String],default:0},unit:{type:String,default:""},color:{type:String,default:""},fontWeight:{type:[Number,String],default:400},align:{type:String,default:"left"},decoration:{type:String,default:"none"},lineHeight:{type:Boolean,default:!1},padding:{type:Array,default:()=>["0","0"]},block:{type:Boolean,default:!1},textType:{type:String,default:"text"},format:{type:Boolean,default:!1},call:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},userSelect:{type:Boolean,default:!1},decode:{type:Boolean,default:!1},highlight:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},unShrink:{type:Boolean,default:!1},param:{type:[Number,String],default:""}},computed:{getSize(){const e=uni&&uni.$fui&&uni.$fui.fuiText&&uni.$fui.fuiText.size||32,t=uni&&uni.$fui&&uni.$fui.fuiText&&uni.$fui.fuiText.unit||"rpx";return(this.size||e)+(this.unit||t)},getColor(){return this.color||""}},methods:{getText(e,t,l){let a=e;return l&&("mobile"===t?a=this.numberFormatter(e):"amount"===t?a=this.moneyFormatter(e):"name"===t&&(a=this.nameFormatter(e))),a},numberFormatter:e=>11===e.length?e.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):e,moneyFormatter:e=>parseFloat(e).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join(""),trimAll:e=>e.toString().replace(/\s+/g,""),nameFormatter(e){let t=this.trimAll(e||"");if(t&&t.length>=2){const e=t.split("");t=e[0]+"*",e.length>2&&(t+=e[e.length-1])}return t},handleTap(){this.disable||(this.$emit("click",{text:this.text,param:this.param}),this.call&&e({phoneNumber:this.text,success:function(){},fail:function(){}}))}}},[["render",function(e,f,c,h,g,m){const y=s,b=p;return t(),l(b,{class:n(["fui-text__wrap",[c.block?"fui-text__block":"fui-text__inline","fui-text__"+c.align,c.highlight&&!c.disable?"fui-text__active":""]]),style:d({textAlign:c.align,paddingTop:c.padding[0]||0,paddingRight:c.padding[1]||0,paddingBottom:c.padding[2]||c.padding[0]||0,paddingLeft:c.padding[3]||c.padding[1]||0}),onClick:m.handleTap},{default:a((()=>[i(e.$slots,"default",{},void 0,!0),o(y,{class:n(["fui-text__content",[c.color?"":"fui-text__"+c.type,c.unShrink?"fui-text__unshrink":""]]),style:d({color:m.getColor,fontSize:m.getSize,lineHeight:c.lineHeight?m.getSize:"auto",textAlign:c.align,textDecoration:c.decoration,fontWeight:c.fontWeight}),selectable:c.selectable,userSelect:c.userSelect,decode:c.decode},{default:a((()=>[r(u(m.getText(c.text,c.textType,c.format)),1)])),_:1},8,["style","class","selectable","userSelect","decode"]),i(e.$slots,"right",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-36dd9055"]]),FuiInput:k({name:"fui-input",emits:["input","update:modelValue","focus","blur","confirm","click","keyboardheightchange"],behaviors:["uni://form-field"],props:{required:{type:Boolean,default:!1},requiredColor:{type:String,default:""},label:{type:String,default:""},labelSize:{type:[Number,String],default:0},labelColor:{type:String,default:"#333"},labelWidth:{type:[Number,String],default:140},clearable:{type:Boolean,default:!1},clearColor:{type:String,default:"#CCCCCC"},focus:{type:Boolean,default:!1},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},name:{type:String,default:""},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},modelModifiers:{default:()=>({})},number:{type:Boolean,default:!1},type:{type:String,default:"text"},password:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledStyle:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},min:{type:[Number,String],default:"NaN"},max:{type:[Number,String],default:"NaN"},cursorSpacing:{type:Number,default:0},confirmType:{type:String,default:"done"},confirmHold:{type:Boolean,default:!1},cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},autoBlur:{type:Boolean,default:!1},alwaysEmbed:{type:Boolean,default:!1},size:{type:[Number,String],default:0},color:{type:String,default:"#333"},inputBorder:{type:Boolean,default:!1},isFillet:{type:Boolean,default:!1},radius:{type:[Number,String],default:8},borderTop:{type:Boolean,default:!1},topLeft:{type:[Number,String],default:0},topRight:{type:[Number,String],default:0},borderBottom:{type:Boolean,default:!0},bottomLeft:{type:[Number,String],default:32},bottomRight:{type:[Number,String],default:0},borderColor:{type:String,default:""},trim:{type:Boolean,default:!0},textRight:{type:Boolean,default:!1},textAlign:{type:String,default:"left"},padding:{type:Array,default:()=>["28rpx","32rpx"]},backgroundColor:{type:String,default:"#FFFFFF"},marginTop:{type:[Number,String],default:0}},data:()=>({placeholderStyl:"",focused:!1,val:""}),computed:{getRadius(){let e=this.radius+"rpx";return this.isFillet&&(e="120px"),e},getBorderRadius(){let e=2*Number(this.radius)+"rpx";return this.isFillet&&(e="240px"),e},getSize(){const e=uni.$fui&&uni.$fui.fuiInput&&uni.$fui.fuiInput.size||32;return`${this.size||e}rpx`},getLabelSize(){const e=uni.$fui&&uni.$fui.fuiInput&&uni.$fui.fuiInput.labelSize||32;return`${this.labelSize||e}rpx`},dangerColor(){const e=uni&&uni.$fui&&uni.$fui.color;return e&&e.danger||"#FF2B2B"}},watch:{focus(e){this.$nextTick((()=>{setTimeout((()=>{this.focused=e}),20)}))},placeholderStyle(){this.fieldPlaceholderStyle()},modelValue(e){this.val=e},value(e){this.val=e}},created(){this.fieldPlaceholderStyle(),setTimeout((()=>{this.value&&!this.modelValue?this.val=this.value:this.val=this.modelValue}),50)},mounted(){this.$nextTick((()=>{setTimeout((()=>{this.focused=this.focus}),300)}))},methods:{fieldPlaceholderStyle(){if(this.placeholderStyle)this.placeholderStyl=this.placeholderStyle;else{const e=uni.$fui&&uni.$fui.fuiInput&&uni.$fui.fuiInput.size||32,t=f(this.size||e);this.placeholderStyl=`fontSize:${t}px;`}},onInput(e){let t=e.detail.value;this.trim&&(t=this.trimStr(t)),this.val=t;const l=Number(t);if((this.modelModifiers.number||this.number||"digit"===this.type||"number"===this.type)&&!isNaN(l)&&Number.isSafeInteger(l)){let e="digit"===this.type?t:l;if("number"==typeof e){const t=Number(this.min),a=Number(this.max);"number"==typeof t&&l<t?e=t:"number"==typeof a&&a<l&&(e=a)}t=isNaN(e)?t:e}this.$nextTick((()=>{""!==e.detail.value&&(this.val=String(t))}));const a=""!==e.detail.value?t:"";this.$emit("input",a),this.$emit("update:modelValue",a)},onFocus(e){this.$emit("focus",e)},onBlur(e){this.$emit("blur",e)},onConfirm(e){this.$emit("confirm",e)},onClear(e){this.disabled&&!this.readonly||(c(),this.val="",this.$emit("input",""),this.$emit("update:modelValue",""))},fieldClick(){this.$emit("click",{name:this.name,target:"wrap"})},fieldClickAndroid(e){},getParent(e="fui-form-item"){let t=this.$parent,l=t.$options.name;for(;l!==e;){if(t=t.$parent,!t)return!1;l=t.$options.name}return t},onKeyboardheightchange(e){this.$emit("keyboardheightchange",e.detail)},trimStr:e=>e.replace(/^\s+|\s+$/g,"")}},[["render",function(e,f,c,y,b,x){const S=p,_=s,k=m;return t(),l(S,{class:n(["fui-input__wrap",{"fui-input__border-nvue":c.inputBorder}]),style:d({paddingTop:c.padding[0]||0,paddingRight:c.padding[1]||0,paddingBottom:c.padding[2]||c.padding[0]||0,paddingLeft:c.padding[3]||c.padding[1]||0,background:c.backgroundColor,marginTop:c.marginTop+"rpx",borderRadius:x.getRadius,borderColor:c.borderColor}),onClick:x.fieldClick},{default:a((()=>[c.borderTop&&!c.inputBorder?(t(),l(S,{key:0,style:d({background:c.borderColor,left:c.topLeft+"rpx",right:c.topRight+"rpx"}),class:n(["fui-input__border-top",{"fui-input__background":!c.borderColor}])},null,8,["style","class"])):h("",!0),c.inputBorder?(t(),l(S,{key:1,class:n(["fui-input__border",{"fui-input__bordercolor":!c.borderColor}]),style:d({borderRadius:x.getBorderRadius,borderColor:c.borderColor})},null,8,["class","style"])):h("",!0),c.required?(t(),l(S,{key:2,class:"fui-input__required",style:d({color:c.requiredColor||x.dangerColor})},{default:a((()=>[r("*")])),_:1},8,["style"])):h("",!0),c.label?(t(),l(S,{key:3,class:"fui-input__label",style:d({minWidth:c.labelWidth+"rpx"})},{default:a((()=>[o(_,{style:d({fontSize:x.getLabelSize,color:c.labelColor})},{default:a((()=>[r(u(c.label),1)])),_:1},8,["style"])])),_:1},8,["style"])):h("",!0),i(e.$slots,"left",{},void 0,!0),o(k,{class:n(["fui-input__self",{"fui-input__text-right":c.textRight,"fui-input__disabled-styl":c.disabled&&c.disabledStyle,"fui-input__disabled":c.disabled}]),style:d({fontSize:x.getSize,color:c.color,textAlign:c.textRight?"right":c.textAlign}),"placeholder-class":"fui-input__placeholder",type:c.type,name:c.name,value:b.val,placeholder:b.val?"":c.placeholder,password:c.password||"password"===c.type||null,"placeholder-style":b.placeholderStyl,disabled:c.disabled||c.readonly,"cursor-spacing":c.cursorSpacing,maxlength:c.maxlength,focus:b.focused,"confirm-type":c.confirmType,"confirm-hold":c.confirmHold,cursor:c.cursor,"selection-start":c.selectionStart,"selection-end":c.selectionEnd,"adjust-position":c.adjustPosition,"hold-keyboard":c.holdKeyboard,"auto-blur":c.autoBlur,enableNative:!1,"always-embed":c.alwaysEmbed,onFocus:x.onFocus,onBlur:x.onBlur,onInput:x.onInput,onConfirm:x.onConfirm,onKeyboardheightchange:x.onKeyboardheightchange},null,8,["class","style","type","name","value","placeholder","password","placeholder-style","disabled","cursor-spacing","maxlength","focus","confirm-type","confirm-hold","cursor","selection-start","selection-end","adjust-position","hold-keyboard","auto-blur","always-embed","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"]),c.clearable&&""!=b.val?(t(),l(S,{key:4,class:"fui-input__clear-wrap",style:d({background:c.clearColor}),onClick:g(x.onClear,["stop"])},{default:a((()=>[o(S,{class:"fui-input__clear"},{default:a((()=>[o(S,{class:"fui-input__clear-a"})])),_:1}),o(S,{class:"fui-input__clear"},{default:a((()=>[o(S,{class:"fui-input__clear-b"})])),_:1})])),_:1},8,["style","onClick"])):h("",!0),i(e.$slots,"default",{},void 0,!0),c.borderBottom&&!c.inputBorder?(t(),l(S,{key:5,style:d({background:c.borderColor,left:c.bottomLeft+"rpx",right:c.bottomRight+"rpx"}),class:n(["fui-input__border-bottom",{"fui-input__background":!c.borderColor}])},null,8,["style","class"])):h("",!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-a3c16d13"]]),FuiTextarea:k({name:"fui-textarea",emits:["input","update:modelValue","focus","blur","confirm","click","linechange","keyboardheightchange"],behaviors:["uni://form-field"],props:{required:{type:Boolean,default:!1},requiredColor:{type:String,default:""},requiredTop:{type:String,default:"34rpx"},label:{type:String,default:""},labelSize:{type:[Number,String],default:32},labelColor:{type:String,default:"#333"},labelWidth:{type:[Number,String],default:140},focus:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},name:{type:String,default:""},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},disabledStyle:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},cursorSpacing:{type:Number,default:0},showConfirmBar:{type:Boolean,default:!0},cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},height:{type:String,default:"200rpx"},minHeight:{type:String,default:"30rpx"},flexStart:{type:Boolean,default:!1},size:{type:[Number,String],default:32},color:{type:String,default:"#333"},textareaBorder:{type:Boolean,default:!1},borderTop:{type:Boolean,default:!0},topLeft:{type:[Number,String],default:0},topRight:{type:[Number,String],default:0},borderBottom:{type:Boolean,default:!0},bottomLeft:{type:[Number,String],default:0},bottomRight:{type:[Number,String],default:0},borderColor:{type:String,default:""},radius:{type:[String,Number],default:0},trim:{type:Boolean,default:!0},textRight:{type:Boolean,default:!1},padding:{type:Array,default:()=>["32rpx","32rpx"]},backgroundColor:{type:String,default:"#FFFFFE"},marginTop:{type:Number,default:0},isCounter:{type:Boolean,default:!1},counterColor:{type:String,default:"#B2B2B2"},counterSize:{type:[Number,String],default:28}},computed:{getRadius(){return 2*Number(this.radius)+"rpx"},getRequiredColor(){let e=this.requiredColor;if(!e||!0===e){const t=uni&&uni.$fui&&uni.$fui.color;e=t&&t.danger||"#FF2B2B"}return e}},data:()=>({placeholderStyl:"",count:0,focused:!1,val:""}),watch:{focus(e){this.$nextTick((()=>{setTimeout((()=>{this.focused=e}),20)}))},placeholderStyle(){this.fieldPlaceholderStyle()},modelValue(e){this.val=this.getVal(e),this.count=this.getCount(String(this.val).length)},value(e){this.val=this.getVal(e),this.count=this.getCount(String(this.val).length)}},created(){this.fieldPlaceholderStyle(),setTimeout((()=>{this.value&&!this.modelValue?this.val=this.getVal(this.value):this.val=this.getVal(this.modelValue),this.count=this.getCount(String(this.val).length)}),50)},mounted(){this.$nextTick((()=>{setTimeout((()=>{this.focused=this.focus}),300)}))},methods:{getVal:e=>e||0===e?e:"",fieldPlaceholderStyle(){if(this.placeholderStyle)this.placeholderStyl=this.placeholderStyle;else{const e=f(this.size);this.placeholderStyl=`fontSize:${e}px;`}},getCount(e){const t=Number(this.maxlength);return e>t&&-1!==t?t:e},onInput(e){let t=e.detail.value;this.trim&&(t=this.trimStr(t));let l=t.length;const a=Number(this.maxlength);l>a&&-1!==a&&(l=a,t=t.substring(0,a-1)),this.count=l,this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(e){this.$emit("focus",e)},onBlur(e){this.$emit("blur",e)},onConfirm(e){this.$emit("confirm",e)},fieldClick(){this.$emit("click",{name:this.name})},onLinechange(e){this.$emit("linechange",e)},onKeyboardheightchange(e){this.$emit("keyboardheightchange",e)},trimStr:e=>e.replace(/^\s+|\s+$/g,"")}},[["render",function(e,f,c,g,m,b){const x=p,S=s,_=y;return t(),l(x,{class:n(["fui-textarea__wrap",{"fui-textarea__flex-start":c.flexStart,"fui-textarea__border-nvue":c.textareaBorder}]),style:d({paddingTop:c.padding[0]||0,paddingRight:c.padding[1]||0,paddingBottom:c.padding[2]||c.padding[0]||0,paddingLeft:c.padding[3]||c.padding[1]||0,background:c.backgroundColor,borderRadius:c.radius+"rpx",borderColor:c.borderColor,marginTop:c.marginTop+"rpx"}),onClick:b.fieldClick},{default:a((()=>[c.borderTop&&!c.textareaBorder?(t(),l(x,{key:0,style:d({background:c.borderColor,left:c.topLeft+"rpx",right:c.topRight+"rpx"}),class:n(["fui-textarea__border-top",{"fui-textarea__background":!c.borderColor}])},null,8,["style","class"])):h("",!0),c.textareaBorder?(t(),l(x,{key:1,class:n(["fui-textarea__border",{"fui-textarea__bordercolor":!c.borderColor}]),style:d({borderRadius:b.getRadius,borderColor:c.borderColor})},null,8,["class","style"])):h("",!0),c.required?(t(),l(x,{key:2,class:n(["fui-textarea__required",{"fui-required__flex-start":c.flexStart}]),style:d({color:b.getRequiredColor,top:c.flexStart?c.requiredTop:"50%"})},{default:a((()=>[r("*")])),_:1},8,["class","style"])):h("",!0),c.label?(t(),l(x,{key:3,class:"fui-textarea__label",style:d({minWidth:c.labelWidth+"rpx"})},{default:a((()=>[o(S,{style:d({fontSize:c.labelSize+"rpx",color:c.labelColor})},{default:a((()=>[r(u(c.label),1)])),_:1},8,["style"])])),_:1},8,["style"])):h("",!0),i(e.$slots,"left",{},void 0,!0),o(x,{class:"fui-textarea__flex-1"},{default:a((()=>[o(_,{ref:"fuiTextarea",class:n(["fui-textarea__self",{"fui-text__right":c.textRight,"fui-textarea__disabled-styl":c.disabled&&c.disabledStyle}]),style:d({height:c.height,minHeight:c.minHeight,fontSize:c.size+"rpx",color:c.color}),"placeholder-class":"fui-textarea-placeholder",name:c.name,value:m.val,placeholder:m.val?"":c.placeholder,placeholderStyle:m.placeholderStyl,disabled:c.disabled,"cursor-spacing":c.cursorSpacing,maxlength:c.maxlength,focus:m.focused,"auto-height":c.autoHeight,fixed:c.fixed,"show-confirm-bar":c.showConfirmBar,cursor:c.cursor,"selection-start":c.selectionStart,"selection-end":c.selectionEnd,"adjust-position":c.adjustPosition,"hold-keyboard":c.holdKeyboard,"disable-default-padding":c.disableDefaultPadding,enableNative:!1,"show-count":!1,onFocus:b.onFocus,onBlur:b.onBlur,onInput:b.onInput,onConfirm:b.onConfirm,onLinechange:b.onLinechange,onKeyboardheightchange:b.onKeyboardheightchange},null,8,["class","style","name","value","placeholder","placeholderStyle","disabled","cursor-spacing","maxlength","focus","auto-height","fixed","show-confirm-bar","cursor","selection-start","selection-end","adjust-position","hold-keyboard","disable-default-padding","onFocus","onBlur","onInput","onConfirm","onLinechange","onKeyboardheightchange"]),c.isCounter?(t(),l(x,{key:0,class:"fui-textarea__counter"},{default:a((()=>[o(S,{style:d({fontSize:c.counterSize+"rpx",color:c.counterColor})},{default:a((()=>[r(u(-1!=c.maxlength?`${m.count}/${c.maxlength}`:m.count),1)])),_:1},8,["style"])])),_:1})):h("",!0)])),_:1}),i(e.$slots,"default",{},void 0,!0),c.borderBottom&&!c.textareaBorder?(t(),l(x,{key:4,style:d({background:c.borderColor,left:c.bottomLeft+"rpx",right:c.bottomRight+"rpx"}),class:n(["fui-textarea__border-bottom",{"fui-textarea__background":!c.borderColor}])},null,8,["style","class"])):h("",!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-61f200f3"]])},data:()=>({kongzhi:"",pingshen:"",k1:"",k2:"",k3:"",jizhun:"-",fenshu:[]}),watch:{kongzhi(){this.calculate()},pingshen(){this.calculate()},k1(){this.calculate()},k2(){this.calculate()},k3(){this.calculate()}},onLoad(){},methods:{calculate(){let e=Number(this.kongzhi),t=this.pingshen?this.pingshen.replace(/\s+/g,"").split(";"):[],l=0,a=0;for(let s=0;s<t.length;s++)""!==t[s]&&Number(t[s])&&(l+=Number(t[s]),a++);let i=a>0?l/a:null,o=Number(this.k1),r=Number(this.k2),u=Number(this.k3);if(!(e&&0!=t.length&&i&&o&&r&&u))return void(this.jizhun="-");let n=e*o*r+i*u;if(!Number(n))return void(this.jizhun="-");this.jizhun=n.toFixed(2);let d=[];for(let s=0;s<t.length;s++)if(""!==t[s]&&Number(t[s])){let e=(100*(Number(t[s])-this.jizhun)/this.jizhun).toFixed(2),l=this.pingshen>=this.jizhun?1:.5,a=Math.abs(e*l).toFixed(2),i=(100-a).toFixed(2);d.push({pingshen:Number(t[s]),koufen:a,defen:i})}this.fenshu=d}}},[["render",function(e,i,n,d,s,f){const c=b("fui-text"),g=b("fui-input"),m=p,y=b("fui-textarea");return t(),l(m,{class:"content"},{default:a((()=>[o(m,{style:{"margin-top":"100rpx"},class:"item"},{default:a((()=>[o(c,{text:"招标控制价:",size:"40"}),o(g,{type:"number",placeholder:"请输入",modelValue:s.kongzhi,"onUpdate:modelValue":i[0]||(i[0]=e=>s.kongzhi=e)},null,8,["modelValue"])])),_:1}),o(m,{style:{"margin-top":"20rpx"},class:"item"},{default:a((()=>[o(c,{text:"投标评审价:",size:"40"}),o(y,{type:"text",placeholder:"支持多个评审价,请以英文分号(;)分隔",modelValue:s.pingshen,"onUpdate:modelValue":i[1]||(i[1]=e=>s.pingshen=e)},null,8,["modelValue"])])),_:1}),o(m,{style:{"margin-top":"20rpx"},class:"item"},{default:a((()=>[o(c,{text:"权重 K1:",size:"40"}),o(g,{type:"number",placeholder:"从0.95,0.94,0.93,0.92,0.91,0.90中随机抽取",modelValue:s.k1,"onUpdate:modelValue":i[2]||(i[2]=e=>s.k1=e)},null,8,["modelValue"])])),_:1}),o(m,{style:{"margin-top":"20rpx"},class:"item"},{default:a((()=>[o(c,{text:"权重 K2:",size:"40"}),o(g,{type:"number",placeholder:"k2+k3=1",modelValue:s.k2,"onUpdate:modelValue":i[3]||(i[3]=e=>s.k2=e)},null,8,["modelValue"])])),_:1}),o(m,{style:{"margin-top":"20rpx"},class:"item"},{default:a((()=>[o(c,{text:"权重 K3:",size:"40"}),o(g,{type:"number",placeholder:"k3不得小于0.4",modelValue:s.k3,"onUpdate:modelValue":i[4]||(i[4]=e=>s.k3=e)},null,8,["modelValue"])])),_:1}),o(m,{style:{"margin-top":"20rpx"},class:"item"},{default:a((()=>[o(c,{text:"评标基准价:",size:"40"}),o(g,{type:"text",placeholder:"请输入",value:s.jizhun,disabled:""},null,8,["value"])])),_:1}),s.fenshu&&s.fenshu.length>0?(t(),l(m,{key:0,class:"table"},{default:a((()=>[o(m,{class:"thead"},{default:a((()=>[o(m,{class:"thead-item"},{default:a((()=>[r("评审价")])),_:1}),o(m,{class:"thead-item"},{default:a((()=>[r("扣分")])),_:1}),o(m,{class:"thead-item"},{default:a((()=>[r("得分")])),_:1})])),_:1}),o(m,{class:"tbody"},{default:a((()=>[(t(!0),x(_,null,S(s.fenshu,((e,i)=>(t(),l(m,{class:"trow",key:i},{default:a((()=>[o(m,{class:"tbody-item"},{default:a((()=>[r(u(e.pingshen),1)])),_:2},1024),o(m,{class:"tbody-item"},{default:a((()=>[r(u(e.koufen),1)])),_:2},1024),o(m,{class:"tbody-item"},{default:a((()=>[r(u(e.defen),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):h("",!0)])),_:1})}],["__scopeId","data-v-4fc56772"]]);export{B as default};
