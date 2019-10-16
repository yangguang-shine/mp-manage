const shopList = [
	{
		name: 'shop/list',
		path: '/pages/manage/shop/list/index'
	},
	{
		name: 'shop/edit',
		path: '/pages/manage/shop/edit/index'
	},
]

const categoryList = [
	{
		name: 'category/list',
		path: '/pages/manage/category/list/index'
	},
	{
		name: 'category/edit',
		path: '/pages/manage/category/edit/index'
	},
]

const foodList = [
	{
		name: 'food/list',
		path: '/pages/manage/food/list/index'
	},
	{
		name: 'food/edit',
		path: '/pages/manage/food/edit/index'
	},
]

const routerList = [
	{
		name: 'home',
		path: '/pages/home/index'
	},
	{
		name: 'register',
		path: '/pages/register/index'
	},
	{
		name: 'login',
		path: '/pages/login/index'
	},
	{
		name: 'orderList',
		path: '/pages/order/index'
	},
	{
		name: 'orderDetail',
		path: '/pages/order/orderDetail/index'
	},
	...shopList,
	...categoryList,
	...foodList,
]
export default routerList