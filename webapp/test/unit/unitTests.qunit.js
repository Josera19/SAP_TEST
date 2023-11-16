/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projectnew2/project2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
