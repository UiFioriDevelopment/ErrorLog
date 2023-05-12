sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, oMsgBox) {
	"use strict";

	return Controller.extend("com.itell.bradford.ZERROR_LOG.controller.ListReport", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.itell.bradford.ZERROR_LOG.view.ListReport
		 */
		onInit: function () {
			var a = [];
			var Obj = {
				"KeyField1": "TG11",
				"KeyField2": "1735",
				"KeyField3": "1.00",
				"Field4": "Test Mat4",
				"Field5": "Test Mat5"
			};
			var Obj1 = {
				"KeyField1": "TG12",
				"KeyField2": "1710",
				"KeyField3": "1.00",
				"Field4": "Test Mat4",
				"Field5": "Test Mat5"
			};
			a.push(Obj);
			a.push(Obj1);
			var TestData = new JSONModel(a);
			this.getView().setModel(TestData, "TestData");
			//Initiate Routing
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRoutePatternMatched(this._handleRouteMatched, this);
		},
		_handleRouteMatched: function (oEvt) {
			var param = oEvt.getParameter("name");
			if (param !== "Main") {
				return;
			}
		},
		//to handle navigation clicks
		onNavigation: function (oEvt) {
			var selectedData = oEvt.getSource().getSelectedItem().getBindingContext("TestData").getObject();
			this.displayErrorLogObjPage(selectedData);
		},

		displayErrorLogObjPage: function (selectedData) {
			this.oRouter.navTo("DisplayErrorLogObjPage", {
				KeyField1: selectedData.KeyField1,
				KeyField2: selectedData.KeyField2,
				KeyField3: selectedData.KeyField3,
				Field4: selectedData.Field4
			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.itell.bradford.ZERROR_LOG.view.ListReport
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.itell.bradford.ZERROR_LOG.view.ListReport
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.itell.bradford.ZERROR_LOG.view.ListReport
		 */
		//	onExit: function() {
		//
		//	}

	});

});