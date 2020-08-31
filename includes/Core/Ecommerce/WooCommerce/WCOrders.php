<?php

namespace WeDevs\WeMail\Core\Ecommerce\WooCommerce;

use WeDevs\WeMail\Traits\Singleton;

class WCOrders {

    use Singleton;

    /**
     * Get a collection of orders
     *
     * @return array|\WP_Error|\WP_HTTP_Response|\WP_REST_Response
     * Details: https://www.businessbloomer.com/woocommerce-easily-get-product-info-title-sku-desc-product-object/
     * @since 1.0.0
     */
    public function all( ) {
        $statuses = ['completed'];

        $args = [
            'orderby' => 'date',
            'order' => 'DESC',
            'status' => $statuses
        ];

        $collection = wc_get_orders( $args );

        $orders = [];

        foreach ($collection as $order) {
            $orders[] = [
                'id'        => $order->get_id(),
                'user_id'      => $order->get_user_id(),
                'status'    => $order->get_status(),
                'currency'     => $order->get_currency(),
                'payment_method_title'  => $order->get_payment_method_title(),
                'date_created'     => $order->get_date_created(),
                'permalink' => get_permalink($order->get_id())
            ];
        }

        return $orders;
    }

    /**
     * Get a single campaign
     *
     * @param string $id
     * @return array|false|\WC_Product
     * @since 1.0.0
     */
    public function get( $id ) {
        return wc_get_product ($id);
    }

}
