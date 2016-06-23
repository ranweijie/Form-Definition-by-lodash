
var jsonData = {
	"status":"preView",
	"formData":[]
};

function changeJsonStatus() {
	var oldSatus = jsonData.status;
	jsonData.status = oldSatus === "preView" ? "edit" :"preView";
}

function addJsonFormItem(formItem) {
	jsonData.formData.push(formItem);
}

function removeJsonFormItem(id) {
	for(var i in jsonData.formData){
		if(jsonData.formData[i]["id"] == id){
			jsonData.formData.splice(i,1);
			break;
		}
	}
}

function changePageStatus() {
	changeJsonStatus();
	render(jsonData);
}

function addFormItem() {
	var addItemType = $('input[name="input-type"]:checked').val();
	var addItemId = parseInt((new Date()).getTime());
	var addItemText = addItemType == "text" ? "我是文本"+addItemId :"我是日期"+addItemId;
	var addItem = {"type":addItemType,"id":addItemId,"text":addItemText};
	addJsonFormItem(addItem);
	closePopUp();
	render(jsonData);
}

function removeFormItem(itemId) {
	removeJsonFormItem(itemId);
	render(jsonData)
}

function createPopUpBox(){
	var popUpBox = $('#pop_up_box'),
		popUpBoxTpl = $('#pop_up_box_tpl').html(),
		create = _.template(popUpBoxTpl);
	var popUpBoxHtml = create();
	popUpBox.html(popUpBoxHtml);

	$("#pop_up_box").show();
}

function closePopUp() {
	// $("#pop_up_box").html("");
	$("#pop_up_box").hide();
}

$(document).ready(function(){
	render();
});

function render() {
	var mainBox = $('#main_box'),
		mainBoxTpl = $('#main_box_tpl').html(),
		create = _.template(mainBoxTpl);
	var mainBoxHtml = create(jsonData);
	mainBox.html(mainBoxHtml);
}