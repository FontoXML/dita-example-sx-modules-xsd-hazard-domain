define([
	'fontoxml-families/configureAsImageInFrame'
], function (
	configureAsImageInFrame
) {
	'use strict';

	// This file removes the permanentId which is the other way around then for cross reference,
	// for compatability reasons.
	return function configureHazardSymbolWithoutPermanentId (sxModule) {
		// To disable permanentId's in hazard symbols (also known as the reference pipeline), set
		// isPermanentId to false.

		configureAsImageInFrame(sxModule, 'self::hazardsymbol', undefined, {
			priority: 2,
			referenceQuery: '@href',
			isPermanentId: false
		});
	};
});
