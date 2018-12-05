<?php

    add_action( 'wp_ajax_add_ticket_to_cart', 'add_ticket_to_cart' );

    function add_ticket_to_cart(){
        $cart = EE_Registry::instance()->CART;
        $ticket_id = $_GET['params']['ticket_id'];

        $purchased_ticket = EEM_Ticket::instance()->get_one_by_ID($ticket_id);
        
        $cart->add_ticket_to_cart($purchased_ticket);
        
        
        foreach ($tickets as $key =>$ticket){
            if($key == $ticket_id){
                $cart->add_ticket_to_cart($ticket);
            }

        }// foreach

        wp_die(); // All ajax handlers die when finished
    }

?>
