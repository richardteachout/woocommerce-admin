/**
 * External dependencies
 */

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import apiFetch from '@wordpress/api-fetch';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/* global addTaskData */
const markTaskComplete = () => {
	apiFetch( {
		path: '/wc-admin/options',
		method: 'POST',
		data: { woocommerce_admin_add_task_example_complete_two: true },
	} )
		.then( () => {
			// Set the local `isComplete` to `true` so that task appears complete on the list.
			addTaskData.isComplete = true;
			// Redirect back to the root WooCommerce Admin page.
			getHistory().push( getNewPath( {}, '/', {} ) );
		} )
		.catch( ( error ) => {
			// Something went wrong with our update.
			console.log( error );
		} );
};

const markTaskIncomplete = () => {
	apiFetch( {
		path: '/wc-admin/options',
		method: 'POST',
		data: { woocommerce_admin_add_task_example_complete_two: false },
	} )
		.then( () => {
			addTaskData.isComplete = false;
			getHistory().push( getNewPath( {}, '/', {} ) );
		} )
		.catch( ( error ) => {
			console.log( error );
		} );
};

const Task = () => {
	return (
		<Card className="is-narrow">
			{ __( 'Example task card content.', 'plugin-domain' ) }
			<br />
			<br />
			<div>
				{ addTaskData.isComplete ? (
					<button onClick={ markTaskIncomplete }>
						{ __( 'Mark task incomplete', 'plugin-domain' ) }
					</button>
				) : (
					<button onClick={ markTaskComplete }>
						{ __( 'Mark task complete', 'plugin-domain' ) }
					</button>
				) }
			</div>
		</Card>
	);
};

/**
 * Use the 'woocommerce_admin_onboarding_task_list' filter to add a task page.
 */
addFilter(
	'woocommerce_admin_onboarding_task_list',
	'plugin-domain',
	( tasks ) => {
		return [
			...tasks,
			{
				key: 'example-1',
				title: __( 'Example 1', 'plugin-domain' ),
				content: __( 'This is an example task.', 'plugin-domain' ),
				container: <Task />,
				completed: addTaskData.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '2 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task 'example-1' was dismissed" ),
				type: 'extension'
			},
			{
				key: 'example-2',
				title: __( 'Example 2', 'plugin-domain' ),
				content: __( 'This is another example task.', 'plugin-domain' ),
				container: <Task />,
				completed: addTaskData.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '3 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task 'example-2' was dismissed" ),
				type: 'extension'
			},
			{
				key: 'example-3',
				title: __( 'Example 3', 'plugin-domain' ),
				content: __( 'This is an example task.', 'plugin-domain' ),
				container: <Task />,
				completed: addTaskData.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '2 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task 'example-3' was dismissed" ),
				type: 'extension'
			},
			{
				key: 'example-4',
				title: __( 'Example 4', 'plugin-domain' ),
				content: __( 'This is another example task.', 'plugin-domain' ),
				container: <Task />,
				completed: addTaskData.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '3 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task 'example-4' was dismissed" ),
				type: 'extension'
			},
			{
				key: 'example-5',
				title: __( 'Example 5', 'plugin-domain' ),
				content: __( 'This is an example task.', 'plugin-domain' ),
				container: <Task />,
				completed: addTaskData.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '2 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task 'example-5' was dismissed" ),
				type: 'extension'
			},
			{
				key: 'example-6',
				title: __( 'Example 6', 'plugin-domain' ),
				content: __( 'This is another example task.', 'plugin-domain' ),
				container: <Task />,
				completed: addTaskData.isComplete,
				visible: true,
				additionalInfo: __( 'Additional info here', 'woocommerce-admin' ),
				time: __( '3 minutes', 'woocommerce-admin' ),
				isDismissable: true,
				onDismiss: () => console.log( "The task 'example-6' was dismissed" ),
				type: 'extension'
			},
		];
	}
);
