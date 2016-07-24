angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('storeService',[function() {
	var stores = [
	{
		name : "처갓집 난곡신림역점",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 79,
		cnt_picture : 16,
		cnt_ceo : 32,
		is_call : true,
		is_now_oder : true,
		is_meet : false
	},	{
		name : "치킨 소울",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 53,
		cnt_picture : 12,
		cnt_ceo : 32,
		is_call : false,
		is_now_oder : true,
		is_meet : false
	},	{
		name : "치킨파티",
		img : "../img/chicken.png",
		rate : 5,
		cnt_review : 103,
		cnt_picture : 53,
		cnt_ceo : 83,
		is_call : true,
		is_now_oder : true,
		is_meet : true
	},	{
		name : "삼형제 두마리치킨",
		img : "../img/chicken.png",
		rate : 3,
		cnt_review : 58,
		cnt_picture : 12,
		cnt_ceo : 34,
		is_call : false,
		is_now_oder : true,
		is_meet : false
	},	{
		name : "BHC 난곡점",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 12,
		cnt_picture : 7,
		cnt_ceo : 0,
		is_call : true,
		is_now_oder : true,
		is_meet : true
	},	{
		name : "원더치킨엔떡볶이",
		img : "../img/chicken.png",
		rate : 3,
		cnt_review : 3,
		cnt_picture : 0,
		cnt_ceo : 0,
		is_call : true,
		is_now_oder : true,
		is_meet : false
	},	{
		name : "케이피씨치킨",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 75,
		cnt_picture : 13,
		cnt_ceo : 0,
		is_call : true,
		is_now_oder : true,
		is_meet : false
	},	{
		name : "티바두마리치킨",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 46,
		cnt_picture : 13,
		cnt_ceo : 31,
		is_call : true,
		is_now_oder : true,
		is_meet : true
	},	{
		name : "투존치킨 서울대점",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 76,
		cnt_picture : 20,
		cnt_ceo : 0,
		is_call : true,
		is_now_oder : true,
		is_meet : false
	},	{
		name : "지코바 양념치킨 신림1호점",
		img : "../img/chicken.png",
		rate : 4,
		cnt_review : 6,
		cnt_picture : 3,
		cnt_ceo : 6,
		is_call : true,
		is_now_oder : true,
		is_meet : true
	}
	];

	var storesService = {};
	storesService.getStores = function() {
		return stores;
	};

	return storesService;

}]);
