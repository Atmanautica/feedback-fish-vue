!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).vue={})}(this,function(e){e.FeedbackFish={mounted:function(){var e=this;this.$nextTick(function(){var t=document.createElement("script");t.setAttribute("src","https://feedback.fish/ff.js?pid="+e.$props.projectId),t.defer=!0,document.body.appendChild(t)})},props:{projectId:{type:String,required:!0}},render:function(){return null}}});
//# sourceMappingURL=feedback-fish.umd.js.map