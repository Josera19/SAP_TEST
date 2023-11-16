sap.ui.define([
    "sap/ui/core/mvc/Controller",
    './Formatter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectnew2.project2.controller.View1", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();

                var oModel = this.getView().getModel("invoice");
                this.getView().setModel(oModel);
            },
            handleItemPress: function (oEvent) {
                // var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2),
				// supplierPath = oEvent.getSource().getSelectedItem().getBindingContext("products").getPath(),
				// supplier = supplierPath.split("/").slice(-1).pop();

			    this.oRouter.navTo("Details");
            },
        });
    });
