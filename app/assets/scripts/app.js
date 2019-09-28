//<timer>

var countDownDate = new Date("Oct 1, 2019 00:00:00").getTime();
    
var x = setInterval(function() {
    var now = new Date().getTime();
    
    var distance = countDownDate - now;

    var days = ('0'+Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var hours = ('0'+Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var minutes = ('0'+Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var seconds = ('0'+Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

    var template =  "<span>" + days + "</span>dias <span>"+ hours +"</span>horas <br><span>"+minutes+"</span>min<i>uto</i>s <span>"+seconds+"</span>seg<i>undo</i>s";
    document.getElementById("timer").innerHTML = template;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("score").innerHTML = "<span>00</span>dias <span>00</span>horas <br><span>00</span>min<i>uto</i>s <span>00</span>seg<i>undo</i>s";
    }
}, 1000);

//</timer>

//<products>

//cria e popula array com infos de cada product
var product_array = [];
var obj_array = [0,1,2,3,4,5,6];

//define o product aberto inicialmente como o atual
var product_current_constant = 3;

$.each($('.products .list .item'), function(i){
    if (i===0) return;
    $this = $(this);
    type = $this.attr('data-type').replace('type_','');
    title = $.trim($this.text().replace(/(\r\n|\n|\r)/gm, ''));

    product_array.push({
        id:i,
        current: i==product_current_constant ? true : false
    });
});

//product_current_variable = product_array[product_current_constant].id;

//clique em um link da nav de products
$(document).on('click', '.products .dynamic-link', function(e){
    $this = $(this);
    order = $this.attr('data-order').replace('order_', '');
    direction = null;
    e.preventDefault();
    e.stopPropagation();

    //só age se não tiver clicado no item atual
    if(order != product_current_constant){

        //muda ordem dos arrays
        if(order > product_current_constant){
            product_array.unshift(product_array.pop());
            obj_array.unshift(obj_array.pop());
            direction = 'next';
        }else{
            product_array.push(product_array.shift());
            obj_array.push(obj_array.shift());
            direction = 'prev';
        }

        //muda item atual (current)
        $.each(product_array, function(i){
            $this = this;
            //this.id = i;
            $this.current = i==2 ? true : false;
        });

        //muda objetos de lugar
        $.each($('.products .list .item'), function(i){
            $this = $(this);
            $this.attr('data-order', 'order_'+obj_array[i]);
        });

        //define quais elementos são escondidos (fora da tela)
        if(direction == 'next'){
            hidden_slave = $('.products .list .item[data-order=order_6][data-type=type_f]');
            hidden_master = $('.products .list .item[data-order=order_0][data-type=type_g]');
        }else{
            hidden_slave = $('.products .item[data-order=order_0][data-type=type_g]');
            hidden_master = $('.products .item[data-order=order_6][data-type=type_f]');
        }
        
        //redefine atributos dos elementos escondidos
        //hidden_slave.attr('data-type', hidden_master.attr('data-type'));
        //hidden_slave.text($.trim(hidden_master.text().replace(/(\r\n|\n|\r)/gm, '')));

        //troca quais elementos são clicáveis
        $('.products .item').attr('class', 'item dynamic-link');
        hidden_master.removeClass('dynamic-link');
        hidden_slave.removeClass('dynamic-link');

        type = $('.products .item[data-order=order_'+product_current_constant+']').attr('data-type').replace('type_','');
        
        //muda texto ativo
        /*TweenMax.to($('.games .description.active'), .4, {
            className:'description inactive',
            onComplete:function(){
                $('.games .description[data-type=type_'+type+']').attr('class', 'description active');
                $('.games .description').removeClass('inactive');
            }
        });*/
    }
});
//</games>