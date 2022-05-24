sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("dynamic.pageDynamicPageDemo.controller.App", {
		onInit: function() {
			var jsonModel = new sap.ui.model.json.JSONModel({
				"DepartmentSet": [{
					"DeptId": "100"
				}]
			});

			this.getOwnerComponent().setModel(jsonModel, "model1");
		},
		onDepartmentChange: function() {
			var jsonModel = new sap.ui.model.json.JSONModel({
				"DepartmentSet": [{
					"DeptId": "100"
				}]
			});
			setTimeout(function() {
				this.getOwnerComponent().setModel(jsonModel);
			}.bind(this), 3000);
		},
		onDepartmentUpdateCustom: function(oEvent) {
			var oComboBox = this.getView().byId("idDepartment");
			var aItems = oComboBox.getItems();
			if (aItems.length === 1) {
				var oItem = aItems[0];
				oComboBox.setSelectedKey(oItem.getKey());
			}
		},
		onEdit: function(){
			MessageBox.error("Not Implemented!");
		},
		onSubmit: function() {
			console.log("submit");
		},
		onCancel: function() {
			console.log("cancel");
		}
	});
});
