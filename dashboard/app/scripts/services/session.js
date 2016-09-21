App.factory("AddEditDel", function() {
	var showFlag={
		backcoverShow: false,
		addShow: false,
		editShow: false,
		delShow: false
	};

	return {
		getBack: function() {
			return showFlag.backcoverShow;
		},
		getAdd: function() {
			return showFlag.addShow;
		},
		getEdit: function() {
			return showFlag.editShow;
		},
		getDel: function() {
			return showFlag.delShow;
		},
		setFlag: function(back, add, edit, del) {
			showFlag.backcoverShow=back;
			showFlag.addShow=add;
			showFlag.editShow=edit;
			showFlag.delShow=del;
		},
	};
});
