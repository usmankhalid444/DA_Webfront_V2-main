/** 
 * This is based on html5 front-end image tool，compression tool. 
 */  
var ImageResizer=function(opts){  
    var settings={  
        resizeMode:"auto"//compressed mode，there are three in total auto,width,height auto indicates that it is automatically compressed according to the maximum width and height ratio，width indicates whether proportional compression is required only based on the width，height similar.  
        ,dataSource:"" //data source.data source refers to data source that needs to be compressed，There are three types，image image element，base64 string，canvas object，there is also a file object when selecting a file...  
        ,dataSourceType:"image" //image  base64 canvas  
        ,maxWidth:298 //maximum width allowed  
        ,maxHeight:200 //maximum height allowed
        ,onTmpImgGenerate:function(img){} //execution method when the intermediate image is generated..please don't modify this image indiscriminately at this time，otherwise compressed result will be messed up.  
        ,success:function(resizeImgBase64,canvas){  
  
        }//After the successful compression of image base64 string data.  
        ,debug:false //whether start debug mode.  
  
    };  
    var appData={};  
    $.extend(settings,opts);  
  
    var _debug=function(str,styles){  
        if(settings.debug==true){  
            if(styles){  
                console.log(str,styles);  
            }  
            else{  
                console.log(str);  
            }  
        }  
    };  
var innerTools={  
        getBase4FromImgFile:function(file,callBack){  
  
            var reader = new FileReader();  
            reader.onload = function(e) {  
                var base64Img= e.target.result;  
                //var $img = $('<img>').attr("src", e.target.result)  
                //$('#preview').empty().append($img)  
                if(callBack){  
                    callBack(base64Img);  
                }  
            };  
            reader.readAsDataURL(file);  
        }  
  
    //-- process data source....Process all data sources into image objects，easy to handle.  
        ,getImgFromDataSource:function(datasource,dataSourceType,callback){  
            var _me=this;  
            var img1=new Image();  
            if(dataSourceType=="img"||dataSourceType=="image"){  
            img1.src=$(datasource).attr("src");  
            if(callback){  
             callback(img1);  
            }  
            }  
            else if(dataSourceType=="base64"){  
                img1.src=datasource;  
            if(callback){  
             callback(img1);  
            }            }  
            else if(dataSourceType=="canvas"){  
            img1.src = datasource.toDataURL("image/jpeg");  
            if(callback){  
             callback(img1);  
            }  
            }  
            else if(dataSourceType=="file"){  
                _me.getBase4FromImgFile(function(base64str){  
                    img1.src=base64str;  
                    if(callback){  
                        callback(img1);  
                    }  
                });  
            }  
  
        }  
       //calculate the size of the image that needs to be compressed.certainly，compressed mode，compression limit directly from setting inside take appear.  
    ,getResizeSizeFromImg:function(img){  
       var _img_info={  
                w:$(img)[0].naturalWidth,  
                h:$(img)[0].naturalHeight  
            };  
        console.log("real size：");  
        console.log(_img_info);  
       var _resize_info={  
           w:0  
           ,h:0  
       };  
        if(_img_info.w<=settings.maxWidth&&_img_info.h<=settings.maxHeight){  
            return _img_info;  
        }  
        if(settings.resizeMode=="auto"){  
        var _percent_scale=parseFloat(_img_info.w/_img_info.h);  
            var _size1={  
                w:0  
                ,h:0  
            };  
            var _size_by_mw={  
                w:settings.maxWidth  
                ,h:parseInt(settings.maxWidth/_percent_scale)  
            };  
            var _size_by_mh={  
                w:parseInt(settings.maxHeight*_percent_scale)  
                ,h:settings.maxHeight  
            };  
            if(_size_by_mw.h<=settings.maxHeight){  
                return _size_by_mw;  
            }  
            if(_size_by_mh.w<=settings.maxWidth){  
                return _size_by_mh;  
            }  
  
            return {  
                w:settings.maxWidth  
                ,h:settings.maxHeight  
            };  
  
        }  
        if(settings.resizeMode=="width"){  
            if(_img_info.w<=settings.maxWidth){  
                return _img_info;  
            }  
            var _size_by_mw={  
                w:settings.maxWidth  
                ,h:parseInt(settings.maxWidth/_percent_scale)  
            };  
            return _size_by_mw;  
        }  
  
        if(settings.resizeMode=="height"){  
            if(_img_info.h<=settings.maxHeight){  
  
                return _img_info;  
            }  
            var _size_by_mh={  
                w:parseInt(settings.maxHeight*_percent_scale)  
                ,h:settings.maxHeight  
            };  
            return _size_by_mh;  
        }  
  
    }  
    //--Draw related image objects to canvas go inside.  
    ,drawToCanvas:function(img,theW,theH,realW,realH,callback){  
  
    var canvas = document.createElement("canvas");  
        canvas.width=theW;  
        canvas.height=theH;  
        var ctx = canvas.getContext('2d');  
        ctx.drawImage(img,  
0,//sourceX,  
0,//sourceY,  
realW,//sourceWidth,  
realH,//sourceHeight,  
0,//destX,  
0,//destY,  
theW,//destWidth,  
theH//destHeight  
 );  
  
        //--Obtain base64 string and canvas object passed to success function.  
        var base64str=canvas.toDataURL("image/jpeg");  
        if(callback){  
            callback(base64str,canvas);  
        }  
    }  
    };  
  
    //-- start processing.  
    (function(){  
        innerTools.getImgFromDataSource(settings.dataSource,settings.dataSourceType,function(_tmp_img){  

            setTimeout(function(){
                var __tmpImg=_tmp_img;  
                settings.onTmpImgGenerate(_tmp_img);  
                //-- calculate size.  
                var _limitSizeInfo=innerTools.getResizeSizeFromImg(__tmpImg);  
                console.log(_limitSizeInfo);  
                var _img_info={  
                    w:$(__tmpImg)[0].naturalWidth,  
                    h:$(__tmpImg)[0].naturalHeight  
                };  
            
                innerTools.drawToCanvas(__tmpImg,_limitSizeInfo.w,_limitSizeInfo.h,_img_info.w,_img_info.h,function(base64str,canvas){  
                  settings.success(base64str,canvas);  
                }); 
            },1000);
             
  
        });  
    })();  
  
    var returnObject={  
  
  
    };  
  
    return returnObject;  
};  