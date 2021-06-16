<?php
namespace GM\BlockFullImgTxt;
/**
 * Plugin Name:       Gm Block Full Img Txt
 * Description:       Block full width with image and content.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Faramaz Patrick <infos@goodmotion.fr>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gm-block-full-img-txt
 *
 * @package           goodmotion
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', __NAMESPACE__ . '\block_init' );
