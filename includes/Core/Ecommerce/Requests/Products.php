<?php

namespace WeDevs\WeMail\Core\Ecommerce\Requests;

use WeDevs\WeMail\Traits\Singleton;

class Products {

    use Singleton;

    /**
     * @param $payload
     * @param $source
     */
    public function store( $payload, $source ) {
        wemail()->api->ecommerce()->products()->post([
            'source'      => $source,
            'name'        => $payload['name'],
            'slug'        => $payload['slug'],
            'images'      => $payload['images'],
            'status'      => $payload['status'],
            'price'       => $payload['price'],
            'total_sales' => $payload['total_sales'],
            'rating'      => $payload['rating'],
            'permalink'   => $payload['permalink'],
            'categories'  => $payload['categories']
        ]);
    }
}
