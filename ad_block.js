var ad_block={
    iframe_url:[],
    img_url:[],
    a_url:[],
    class_ar:[],
    id_ar:[],
    tag_ar:[],
    block:function(){
        if(this.iframe_url.length){
            this.iframe_block();
        }
        if(this.img_url.length){
            this.img_block();
        }
        if(this.a_url.length){
            this.a_block();
        }
        if(this.class_ar.length){
            this.class_block();
        }
        if(this.id_ar.length){
            this.id_block();
        }
        if(this.tag_ar.length){
            this.tag_block();
        }
    },
    class_block:function(){
        for(var x=0;x<this.class_ar.length;x++){
            if(document.querySelector('.'+this.class_ar[x])){
                var cl=document.querySelectorAll('.'+this.class_ar[x]);
                for(var i=0;i<cl.length;i++){
                    cl[i].style.display='none';
                }
            }
        }
    },
    id_block:function(){
        for(var x=0;x<this.id_ar.length;x++){
            if(document.querySelector('#'+this.id_ar[x])){
                document.querySelector('#'+this.id_ar[x]).style.display='none';
            }
        }
    },
    tag_block:function(){
        for(var x=0;x<this.tag_ar.length;x++){
            if(document.querySelector(this.tag_ar[x])){
                var tag=document.querySelectorAll(this.tag_ar[x]);
                for(var i=0;i<tag.length;i++){
                    tag[i].style.display='none';
                }
            }
        }
    },
    iframe_block:function(){
        for(var x=0;x<this.iframe_url.length;x++){
            var index=this.iframe_url[x];
            var iframe=document.querySelectorAll('iframe');
            for(var i=0;i<iframe.length;i++){
                var str=iframe[i].src;
                if(str.indexOf(index)>-1){
                    iframe[i].parentNode.style.display='none';
                }
            }
        }
    },
    img_block:function(){
        for(var x=0;x<this.img_url.length;x++){
            var index=this.img_url[x];
            var img=document.querySelectorAll('img');
            for(var i=0;i<img.length;i++){
                var str=img[i].src;
                if(str.indexOf(index)>-1){
                    if(img[i].parentNode.nodeName!='body'){
                        img[i].parentNode.style.display='none';
                    }
                }
            }
        }
    },
    a_block:function(){
        for(var x=0;x<this.a_url.length;x++){
            var index=this.a_url[x];
            var a=document.querySelectorAll('a');
            for(var i=0;i<a.length;i++){
                var str=a[i].href;
                if(str.indexOf(index)>-1){
                    if(a[i].parentNode.nodeName!='body'){
                        a[i].parentNode.style.display='none';
                    }
                }
            }
        }
    }
}
ad_block.a_url=[];
ad_block.iframe_url=[];
ad_block.img_url=[];
ad_block.class_ar=[];
ad_block.tag_ar=[];
ad_block.id_ar=[];
ad_block.block();
