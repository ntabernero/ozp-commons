/*global $, define */

/*
 * We'll return an instance of jQuery as jquery-ui doesn't define its own object -
 * it just extends jQuery - which is the other reason we define the module here.
 */
define("jquery-ui", function() {
	return $;
});
