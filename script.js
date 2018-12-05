 $('.ticket-container').on('click', '.btn-add-ticket-to-cart', function(e){
        e.stopPropagation();
        let obj ={};
        let valid_ticket= false;
        if($(".selected_number_ticket:selected").length > 0){

            $('.ticket-container').find('.selected_number_ticket').map(function(){
                if($(this).val()== 1){
                    let info = $(this).attr('id');
                    let ticket_info = info.split("-");
                    obj = {event_id: ticket_info[0], ticket_id : ticket_info[1]};
                }
            });

            valid_ticket = true;

        }else{
            console.log(valid_ticket);
            $('#add_ticket_to_cart_modal').modal('show')

        }
        if (valid_ticket) {
            $.ajax({
                url : ajaxObj.ajax_url,
                type : 'GET',
                data : {
                    action:'add_ticket_to_cart',
                    params: obj
                },
                dataType: 'json',
                success : function( response ) {
                    //alert(response)
                }
            });
        }

        //  $(this).attr("selected","selected");


    });
