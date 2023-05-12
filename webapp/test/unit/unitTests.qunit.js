/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/itell/bradford/ZERROR_LOG/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});