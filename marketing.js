    $(document).ready(function () {
        if(localStorage.getItem('user'))
        {
            $( "#products h1" ).text( "Welcome back "+localStorage.getItem('user') );
    $.getJSON("stock.json",
    function (json) {
        $.getJSON("stock.json",
    function (json) {
        var li;
        $('#lstviews').empty();
       for (var i = 0; i < json.length; i++) {
            if(json[i].category==1)
            {
                li = $('<li id='+json[i].id+' data-icon="false" onclick="dynamic(this)">');
                li.append("<a href='#poper' data-rel='popup'><img src="+json[i].image+"> "+json[i].name+"<br>&nbsp&nbsp&nbsp<input type='button' id="+json[i].id+" data-icon='plus' value='Add To Cart'></a>");
                $('#lstviews').append(li);
            }  
        }
        $('#lstviews').listview('refresh');
    });
        $('#lstviews').listview('refresh');
    });
    var cartitems=JSON.parse(localStorage.getItem('cart'));
        var cart=cartitems.products;
    $.getJSON("stock.json",
    function (json) {
        var li;
       for (var i = 0; i < json.length; i++) {
            if(cart.indexOf(""+(i+1))!==-1)
            {
            li = $('<li id='+json[i].id+' data-icon="false" onclick="dynamic(this)">');
            li.append("<a href='#poper' data-rel='popup'><img src="+json[i].image+"> "+json[i].name+"<br>Price:"+json[i].cost+"<br>Remaining:"
                    +json[i].count+"&nbsp&nbsp&nbsp<button id="+json[i].id+">Delete</button></a>");
            $('#lstcart').append(li);
        }
        }
        $('#lstcart').listview('refresh');
    });
        }else{
            window.location.href="index.html";
        } 
});

$(document).on('click', '#lstcart button', function(e){
           
           deleteitem(this.id)
                });
function deleteitem(id) {
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));   
        var cart1=cart.products;
        var index = cart1.indexOf(id);
        if (index > -1) {
    cart.products.splice(index, 1);
         }
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload(true);
    } 
}

$(document).on('click', '#lstviews input[type=button]', function(e){    
           addToCart(this.id)
                });
function addToCart(id) {
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));            
        cart.products.push(id);
        localStorage.setItem('cart', JSON.stringify(cart));
    } 
    $.ajax({
                type: "POST",
                url: "stock.php",
                data: {idc:id},
                success:function(data){
                    window.location.reload(true);
           }
       });
} 

function shirts(obj)
{
    $.getJSON("stock.json",
    function (json) {
        var li;
        $('#lstviews').empty();
       for (var i = 0; i < json.length; i++) {
            if(json[i].category==obj.id)
            {
                li = $('<li id='+json[i].id+' data-icon="false" onclick="dynamic(this)">');
                li.append("<a href='#poper' data-rel='popup'><img src="+json[i].image+"> "+json[i].name+"<br>&nbsp&nbsp&nbsp<input type='button' id="+json[i].id+" data-icon='plus' value='Add To Cart'></a>");
                $('#lstviews').append(li);
            }  
        }
        $('#lstviews').listview('refresh');
    });
}

function pants(obj)
{
    $.getJSON("stock.json",
    function (json) {
        var li;
        $('#lstviews').empty();
       for (var i = 0; i < json.length; i++) {
            if(json[i].category==obj.id)
            {
                li = $('<li id='+json[i].id+' data-icon="false" onclick="dynamic(this)">');
                li.append("<a href='#poper' data-rel='popup'><img src="+json[i].image+"> "+json[i].name+"<br>&nbsp&nbsp&nbsp<input type='button' id="+json[i].id+" data-icon='plus' value='Add To Cart'></a>");
                 $('#lstviews').append(li);
            }  
        }
        $('#lstviews').listview('refresh');
    });
}

function logout()
    {
       localStorage.clear(); 
       window.location.href="index.html";
    }