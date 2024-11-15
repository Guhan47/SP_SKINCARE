

    // $('.product_img').click(function() {
    //     $(this).siblings('.pro').find('h2, p').not('.new').fadeOut('slow', function() {
    //         $('.new').fadeIn('slow');
    //     });
    // });
    // $('#bar').click(function () {
    //     let $det = $('.details');
    //     $det.toggleClass('showme');

    // });


    // $('#login').click(function () {
    //     $('.form_popup').slideDown('slow');
    // });

    // $('.close_btn').click(function () {
    //     $('.form_popup').slideUp('slow');
    // })

    // $('.product_img').click(function () {
    //     let $pic = $(this).find('.more_info');
    //     let $pro = $(this).siblings('.pro');
    //     if ($pro.find('.new').is(':visible')) {


    //         $pro.find('.new').fadeOut('slow', function () {
    //             $pro.find('h2 , ul').not('.new').fadeIn('slow');
    //             $pic.fadeIn('slow');
    //         });


    // $pro.find('h2, p').not('.new').fadeIn('slow', function() {
    //     $pro.find('.new').fadeOut('slow');
    // });
    //     } else {
    //         $pro.find('h2, ul').not('.new').fadeOut('slow', function () {
    //             $pro.find('.new').fadeIn('slow');
    //             $pic.fadeOut('slow');


    //         });

    //     }
    // });
      

    let total=0;



    $('.car').click(function () {
        $('.cart_ah_podu').toggleClass('varum');
        // if($('.carts')==''){
        //     $('.carts').text("no items");
        // }
    });


    $('.ps').click(function () {
        var $this = $(this);
        var $a = $this.parent().parent().find('.a');

        // Toggle the class 'addi' on the .a div
        $a.toggleClass('addi');

        // Change the text inside .ps based on the toggle state
        if ($a.hasClass('addi')) {
            $this.find('p').text('---');
        } else {
            $this.find('p').text('+');
        }
    });


    // Hide elements with class 'podu' when an element with ID 'gv' is clicked
    $('#gv').click(function () {


        let sgst = $('#gt').val();
        if (sgst === '') {
            alert('please enter your age');
            return;
        }

        else if (sgst > 0 && sgst <= 10) {
            $('.factor1 img').attr('src', '/oilimages/coconutoil.jpg');
            $('.factor1 h4').text('coconut oil').css('color', 'white');


            $('.factor2 img').attr('src', '/soapimages/hyb.jpg');
            $('.factor2 h4').text('Hybiscuss soap').css('color', 'white');


            $('.factor3 img').attr('src', '/soapimages/rosesoap.jpg');
            $('.factor3 h4').text('Rose Soap').css('color', 'white');


        } else {
            $('.factor1 img').attr('src', '/oilimages/jajobaoil.jpg');
            $('.factor1 h4').text('jajoba oil').css('color', 'white');

            $('.factor2 img').attr('src', '/soapimages/charsoap.jpg');
            $('.factor2 h4').text('charcoal soap').css('color', 'white');


            $('.factor3 img').attr('src', '/soapimages/sandalsoap.jpg');
            $('.factor3 h4').text('sandal soap').css('color', 'white');


        }
        $('.podu').css('display', 'block');
        $('.cheek').addClass('blur');
    });

    // Show elements with class 'podu' when an element with class 'clx' is clicked
    $('.cxl ').click(function () {
        $('.podu').css('display', 'none');
        $('.cheek').removeClass('blur');
    });





// ADD TO CART.....................................................................................................................
$('.add_to_cart').click(function() {
            let imgSrc = $(this).data('img');
            let name = $(this).data('name');
            let price = parseFloat($(this).data('price'));

            let cartItem = `
                <div class="cart_contain" data-price="${price}">
                    <div class="cart">
                        <img src="${imgSrc}" alt="${name}" height="70px" width="70px">
                    </div>
                    <div class="cart_detail">
                        <p class="cd1 sep">Price: RS:${price.toFixed(2)}</p>
                        <div class="cd2">
                            <p class="">QTY</p>
                            <input type="number" class="quantity" name="quantity" min="1" max="5" value="1">
                        </div>
                    </div>
                    <div class="trashb">
                        <i class="fa fa-trash trash-icon" style="font-size:20px"></i>
                    </div>
                    <hr color="#063435">
                </div>`;

            $('.carts').append(cartItem);
            calculateGrandTotal();
        });

        // Update price when quantity changes
        $('body').on('input', '.quantity', function() {
            let $cartItem = $(this).closest('.cart_contain');
            let itemPrice = parseFloat($cartItem.data('price'));
            let quantity = parseInt($(this).val()) || 0;
            let itemTotal = itemPrice * quantity;

            $cartItem.find('.cd1').text('Price: RS:' + itemTotal.toFixed(2));
            calculateGrandTotal();
        });

        // Remove cart item on trash icon click
        $('body').on('click', '.trash-icon', function() {
            $(this).closest('.cart_contain').remove();
            calculateGrandTotal();
        });

        // Calculate grand total
        function calculateGrandTotal() {
            let grandTotal = 0;
            $('.cart_contain').each(function() {
                let itemTotal = parseFloat($(this).find('.cd1').text().replace('Price: RS:', '')) || 0;
                grandTotal += itemTotal;
            });
            $('.cart_rslt').text('Total: RS:' + grandTotal.toFixed(2)); // Display with 2 decimal places
        };


       







