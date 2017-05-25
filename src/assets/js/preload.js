//(function($){
	
	function PreLoad(imgs,options){
		this.imgs = (typeof imgs === 'string')?[imgs]:imgs;
		this.opts = $.extend({},PreLoad.defaults,options);
		
		this._unordered();
	}
	
	PreLoad.defaults = {
		each:null,		//每一张图片加载完成后执行
		all:null		//所有图片加载完毕后执行
	}
	
	//无序加载
	PreLoad.prototype._unordered = function(){
		var imgs = this.imgs;
		var opts = this.opts;
		var count = 0;
		var len = imgs.length;
		
		imgs.forEach(function(src,i){
			if(typeof src != 'string') return;
			
			var imgobj = new Image();
			
			$(imgobj).on('load error', function(){
				opts.each && opts.each(count);
				if(count >= len - 1){
					opts.all && opts.all();
				}
				
				count++;
			});
			
			imgobj.src = src;
		});
	};
	
	
	export default PreLoad;
//})(jQuery);
