//<scroll>
function smooth_scroll(anchor){
    TweenLite.to(window, 1, {scrollTo:anchor.offset().top});
}

$("a[href^='#']").click(function(e) {
    e.preventDefault();
    $this = $(this);
    var anchor = $($this.attr('href'));
   smooth_scroll($(anchor));
});
//</scroll>

//<products>

//cria e popula array com infos de cada product
var product_array = [];
var obj_array = [0,1,2,3,4,5,6];
var type_array = ['a','b','c','d','e','f','g'];
var store_array = [];

$.each($('#modal li'), function(i){
    $this = $(this);
    store = $this.find('a').attr('data-store');
    store_array.push(store);
});

$('#modal ul').html('');

//define o product aberto inicialmente como o atual
var product_current_constant = 3;

$.each($('.products .list .item'), function(i){
    //if (i===0) return;
    $this = $(this);
    thisType = $this.attr('data-type').replace('type_','');
    title = $.trim($this.text().replace(/(\r\n|\n|\r)/gm, ''));

    
    switch(thisType) {
        case 'a':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[0],
                    link:'https://www.carrefour.com.br/Sustagen-Kids-Sabor-Morango-Sache-190g/p/8952566?utm_source=LP_Sustagenmorango&utm_medium=carrefour&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[7],
                    link:'https://busca.magazineluiza.com.br/busca?q=sustagen%20kids&utm_source=LP_Sustagenkids&utm_medium=magalu&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;

        case 'b':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[0],
                    link:'https://www.carrefour.com.br/Sustagen-Kids-Sabor-Baunilha-380g/p/8707847?utm_source=LP_Sustagenbaunilha&utm_medium=carrefour&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[1],
                    link:'https://www.paodeacucar.com/produto/87433/alimento-nutritivo-sabor-baunilha-sustagen-kids-lata-380g?utm_source=LP_Sustagenbaunilha&utm_medium=gpa&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[2],
                    link:'https://www.paguemenos.com.br/sustagen-kids-baunilha-380g/p?utm_source=LP_Sustagenbaunilha&utm_medium=paguemenos&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[3],
                    link:'https://www.panvel.com/panvel/sustagen-kids-baunilha-380g/p-490020?utm_source=LP_Sustagenbaunilha&utm_medium=panvel&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[4],
                    link:'https://www.farmadelivery.com.br/marca/rb/sustagen?utm_source=LP_Sustagenkids&utm_medium=farmadelivery&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[5],
                    link:'https://www.drogariaspacheco.com.br/suplemento-alimentar-sustagen-kids-baunilha-380g/p?utm_source=LP_Sustagenbaunilha&utm_medium=pacheco&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[6],
                    link:'https://www.drogariasaopaulo.com.br/suplemento-alimentar-sustagen-kids-baunilha-380g/p?utm_source=LP_Sustagenbaunilha&utm_medium=saopaulo&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[7],
                    link:'https://busca.magazineluiza.com.br/busca?q=sustagen%20kids&utm_source=LP_Sustagenkids&utm_medium=magalu&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;
            
        case 'c':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[0],
                    link:'https://www.carrefour.com.br/Sustagen-Kids-Sabor-Chocolate-380g/p/8707766?utm_source=LP_Sustagenchocolate&utm_medium=carrefour&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[1],
                    link:'https://www.paodeacucar.com/produto/149353/alimento-nutritivo-sabor-chocolate-sustagen-kids-lata-380g?utm_source=LP_Sustagenchocolate&utm_medium=gpa&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[2],
                    link:'https://www.paguemenos.com.br/sustagen-kids-chocolate-380g/p?utm_source=LP_Sustagenchocolate&utm_medium=paguemenos&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[3],
                    link:'https://www.panvel.com/panvel/sustagen-kids-chocolate-380g/p-490010?utm_source=LP_Sustagenchocolate&utm_medium=panvel&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[4],
                    link:'https://www.farmadelivery.com.br/marca/rb/sustagen?utm_source=LP_Sustagenkids&utm_medium=farmadelivery&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[5],
                    link:'https://www.drogariaspacheco.com.br/suplemento-alimentar-sustagen-kids-chocolate-380g/p?utm_source=LP_Sustagenchocolate&utm_medium=pacheco&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[6],
                    link:'https://www.drogariasaopaulo.com.br/suplemento-alimentar-sustagen-kids-chocolate-380g/p?utm_source=LP_Sustagenchocolate&utm_medium=saopaulo&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[7],
                    link:'https://busca.magazineluiza.com.br/busca?q=sustagen%20kids&utm_source=LP_Sustagenkids&utm_medium=magalu&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;
            
        case 'd':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[0],
                    link:'https://www.carrefour.com.br/Sustagen-Kids-Sabor-Morango-380g/p/8707855?utm_source=LP_Sustagenmorango&utm_medium=carrefour&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[1],
                    link:'https://www.paodeacucar.com/produto/116959/alimento-nutritivo-sabor-morango-sustagen-kids-lata-380g?utm_source=LP_Sustagenmorango&utm_medium=gpa&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[2],
                    link:'https://www.paguemenos.com.br/sustagen-kids-morango-380g/p?utm_source=LP_Sustagenmorango&utm_medium=paguemenos&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[4],
                    link:'https://www.farmadelivery.com.br/marca/rb/sustagen?utm_source=LP_Sustagenkids&utm_medium=farmadelivery&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[5],
                    link:'https://www.drogariaspacheco.com.br/suplemento-alimentar-sustagen-kids-morango-380g/p?utm_source=LP_Sustagenmorango&utm_medium=pacheco&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[6],
                    link:'https://www.drogariasaopaulo.com.br/suplemento-alimentar-sustagen-kids-morango-380g/p?utm_source=LP_Sustagenmorango&utm_medium=saopaulo&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[7],
                    link:'https://busca.magazineluiza.com.br/busca?q=sustagen%20kids&utm_source=LP_Sustagenkids&utm_medium=magalu&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;
            
        case 'e':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[1],
                    link:'https://www.paodeacucar.com/produto/355190/alimento-nutritivo-sabor-vitamina-de-frutas-sustagen-kids-lata-380g?utm_source=LP_Sustagenvitamina&utm_medium=gpa&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;
        
        case 'f':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[0],
                    link:'https://www.carrefour.com.br/Sustagen-Kids-Nutricao-Infantil-Chocolate-190Gr-Sache/p/MV18710316?utm_source=LP_Sustagenchocolate&utm_medium=carrefour&utm_campaign=sustagen_ias&utm_term=RB'
                },
                {
                    name:store_array[1],
                    link:'https://www.paodeacucar.com/produto/107226/alimento-nutritivo-sabor-chocolate-sustagen-kids-sache-190g?utm_source=LP_Sustagenchocolate&utm_medium=gpa&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;
        
        case 'g':
            product_array.push({
                id:i,
                current: i==product_current_constant ? true : false,
                type: thisType,
                stores: [
                {
                    name:store_array[0],
                    link:'https://www.carrefour.com.br/Sustagen-Kids-Sabor-Baunilha-Sache-190g/p/8952655?utm_source=LP_Sustagenbaunilha&utm_medium=carrefour&utm_campaign=sustagen_ias&utm_term=RB'
                }
            ]});
            break;

        default:
            console.log('error. type: '+thisType);
            break;
    }
});

//product_current_variable = product_array[product_current_constant].id;

//clique em um link da nav de products
var clicked = false;
$(document).on('click', '.products .dynamic-link', function(e){
    $this = $(this);
    e.preventDefault();
    e.stopImmediatePropagation();

    // impede clique rápido
    if (!clicked){
        clicked = true;
        setTimeout(function(){ clicked = false; }, 300);       
        product_nav($this,null);
    } else {
        return false; 
    }
});

$('.products .nav').swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        $this = $(this);
        direction = direction==='left' ? 'next' : 'prev';
        product_nav($this,direction);
      },
       threshold:10
});

function product_nav($this,direction){
    $this = $this;
    order = direction=== null ? $this.attr('data-order').replace('order_', '') : -1;

    //só age se não tiver clicado no item atual
    if(order != product_current_constant){

        //muda ordem dos arrays
        if(order > product_current_constant || direction==='next'){
            product_array.unshift(product_array.pop());
            obj_array.unshift(obj_array.pop());
            direction = 'next';
        }else if(order < product_current_constant || direction==='prev'){
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
        text = $('.products .item[data-order=order_'+product_current_constant+']').text();
        
        $('.products .buy').attr('data-type', 'type_'+type);
        $('.products .product-name').fadeOut(200);
        $('.products .product-name').text(text);
        $('.products .product-name').fadeIn(200);

        
    }
}


//modal stores
function store_template(url,name){
    return '<li><a href='+url+' data-store='+name+' target="_blank">'+name+'</a></li>';
}

$(document).on('click', '.products .buy, .products .item[data-order=order_3]', function(e){
    $('#modal ul').html('');
    $this = $(this);
    thisType = $this.attr('data-type').replace('type_', '');
    e.preventDefault();
    e.stopImmediatePropagation();

    //store_list = $.inArray(product_array, thisType);
    /*store_list = $.grep(product_array, function(type){
        return type = thisType;
    });*/
    //store_list = product_array.filter(x => x.type === thisType).map(x => x.stores);

    product_item = product_array.filter(function(i){
        return i.type === thisType;
    });

    stores = product_item[0].stores;


    
    stores.map(function(arrayItem){
        new_content = $('#modal ul').append(store_template(arrayItem.link, arrayItem.name));
    });
    $('#modal').addClass('active');
});

$(document).on('click', '#modal .close', function(){
    $('#modal').removeClass('active');
});

$('#modal window').on('focusout', function(){
    $('#modal').removeClass('active');
});
//</products>

//<regulamento>
$(document).on('click', '.regulamento .show-more', function(e){
    e.stopImmediatePropagation();

    $('.regulamento').toggleClass('active');
});

//</regulamento>

//<responsive-menu>
var clickedMenu = false;

$(document).on('click', '.menu .responsive-menu, .menu.active .list .item', function(e){
    //impede clique rápido
    e.stopImmediatePropagation();
    if (!clickedMenu){
        clickedMenu = true;
        setTimeout(function(){ clickedMenu = false; }, 600);
        $('.menu').toggleClass('active');
    } else {
        return false; 
    }
});
//</responsive-menu>