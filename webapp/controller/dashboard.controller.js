sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("itrequest.controller.dashboard", {
        onInit: function () {
            // Get the OData model (alias must match manifest.json)
            // Get the service URL from the model
         
        },

        createTicket: function () {
            this.getOwnerComponent().getRouter().navTo("create");
        },

        viewRequests: function () {
            this.getOwnerComponent().getRouter().navTo("viewRequests");
        },

        StatisticsPress: function () {
            this.getOwnerComponent().getRouter().navTo("StatisticData");
        },

        NotifictionPress: function () {
            this.getOwnerComponent().getRouter().navTo("notification");
        },

        help: function () {
            var oView = this.getView();
            if (!this._oDialog) {
                Fragment.load({
                    id: oView.getId(),
                    name: "itrequest.view.fragments.Help",
                    controller: this
                }).then(function (oDialog) {
                    this._oDialog = oDialog;
                    oView.addDependent(oDialog);
                    oDialog.open();
                }.bind(this));
            } else {
                this._oDialog.open();
            }
        },

        onOK: function () {
            this._oDialog.close();
        }
    });
});
