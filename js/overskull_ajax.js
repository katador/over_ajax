/**
 * Created by Personal on 17/09/2015.
 * orestes villavicencio
 * orestesv@overskull.pe
 * OVERSKULL
 */
var nombre_boton = '';
var over_tag = '';
var over_name = '';

var over_url    = '';
var data_over   = '';
var over_metodo = 'POST';
var over_tyboton = '';

    $('document').ready(function(){
        $('body').prepend('<div class="overskull_progress"></div>');
    });

(function($){

    $.fn.overskull_ajax = function(opciones){

        var configuracion = {
            over_padre: document,/*utilizar si requiere un carga interna*/
            over_text:'<div class="loader loader_color1"></div> procesa',
            over_salida:null,
            over_hijo:null,/*utilizar si requiere un carga interna*/
            over_reset:0,
            over_tag_html:null,/*utilizar si requiere un carga interna*/
            over_event_success:null,
            over_event_before:null,
            over_event_complete:null

        }

        if(configuracion){
            options = $.extend(configuracion,opciones);
        }

        return this.each(function(){

            var os = options;

            $principal = $(this);


            if(os.over_tag_html==null){
                over_tag = $(this).get(0).nodeName;
            }else{
                over_tag = os.over_tag_html;
            }

            if(os.over_hijo==null){
                os.over_hijo = '#'+this.id;
            }

            switch(over_tag){

                case "FORM":
                   $(os.over_padre).on("submit",os.over_hijo,function(event){
                       event.preventDefault();
                       var submit_btn = $(os.over_hijo+' :submit');
                       nombre_boton =  submit_btn.text();
                       submit_btn.html(os.over_text);

                       over_url    = this.action;
                       data_over   = $(this).serialize();
                       over_metodo = this.method;
                       over_tyboton = ' :submit';

                       preloader(this);
                    });
                    break;
                case "A":
                    $(os.over_padre).on('click',os.over_hijo,function(event){
                        event.preventDefault();
                        var submit_btn = $(os.over_hijo);
                        nombre_boton =  submit_btn.text();
                        submit_btn.html(os.over_text);

                        over_url    = this.href;
                        data_over   = $(this).data('options');
                        over_tyboton = '';
                        os.over_reset = 1;
                        preloader(this);
                    });
                    break;
                case "DIV":
                case "BUTTON":
                    $(os.over_padre).on('click',os.over_hijo,function(event){
                        event.preventDefault();
                        var submit_btn = $(os.over_hijo);
                        nombre_boton =  submit_btn.text();
                        submit_btn.html(os.over_text);

                        over_url    =  $(this).data('url');
                        data_over   = $(this).data('options');
                        over_tyboton = '';
                        os.over_reset = 1;
                        preloader(this);
                    });
                    break;

            }

           function preloader(variable) {


               var over_id     = variable.id;

               if(os.over_salida==null){
                   over_name   = "#salida_"+over_id;
               }else{
                   over_name  = os.over_salida;
               }


                $.ajax({
                    xhr: function(){

                        if (window.ActiveXObject) {
                            var xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
                        } else {
                            var xhr = new window.XMLHttpRequest();
                        }

                        xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
                                $('.overskull_progress').css({
                                    width: percentComplete * 100 + '%'
                                });
                            }
                        }, false);

                        xhr.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
                                $('.overskull_progress').css({
                                    width: percentComplete * 100 + '%'
                                });
                            }
                        }, false);
                        return xhr;
                    },
                    async:true,
                    method:over_metodo,
                    url:over_url,
                    data:data_over,
                    success: function (data) {

                       if(typeof os.over_event_success == 'function'){
                            os.over_event_success.call(data);
                        }
                        if ($(over_name).length) {
                            $(over_name).html(data);
                        }
                    },
                    beforeSend:function(){
                        if(typeof os.over_event_before == 'function'){
                            os.over_event_before.call(this);
                        }
                    },
                    complete:function(evt){

                        if(typeof os.over_event_complete == 'function'){
                            os.over_event_complete.call(this);
                        }

                        if(os.over_reset==0){
                            $(variable)[0].reset();
                        }

                        $('#'+over_id+over_tyboton).html(nombre_boton);
                        $('.overskull_progress').animate({
                            width:  0 + '%'
                        });

                    }
                });
            }
        });


    }

})(jQuery);
