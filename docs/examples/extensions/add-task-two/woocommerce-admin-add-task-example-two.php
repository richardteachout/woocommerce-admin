<?php
/**
 * Plugin Name: WooCommerce Admin Add Task Example Two
 *
 * @package WooCommerce\Admin
 */

use Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * Register the JS.
 */
function add_task_register_script_two() {

	if (
		! class_exists( 'Automattic\WooCommerce\Admin\Loader' ) ||
		! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ||
		! Onboarding::should_show_tasks()
	) {
		return;
	}

	wp_register_script(
		'add-task',
		plugins_url( '/dist/index.js', __FILE__ ),
		array(
			'wp-hooks',
			'wp-element',
			'wp-i18n',
			'wc-components',
		),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' ),
		true
	);

	$client_data = array(
		'isComplete' => get_option( 'woocommerce_admin_add_task_example_complete_two', false ),
	);
	wp_localize_script( 'add-task', 'addTaskData', $client_data );
	wp_enqueue_script( 'add-task' );
	do_action( 'add_woocommerce_extended_task_list_item', 'woocommerce_admin_add_task_example_name_two' );
}
add_action( 'admin_enqueue_scripts', 'add_task_register_script_two' );
