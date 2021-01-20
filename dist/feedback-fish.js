exports.FeedbackFish={mounted:function(){var e=this;this.$nextTick(function(){var t=document.createElement("script");t.setAttribute("src","https://feedback.fish/ff.js?pid="+e.$props.projectId),t.defer=!0,document.body.appendChild(t)})},props:{projectId:{type:String,required:!0}},render:function(){return null}};
//# sourceMappingURL=feedback-fish.js.map
