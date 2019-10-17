const shopList = [
	{
		name: 'shop/edit',
		path: '/pages/shop/edit/index'
	},
]

const categoryList = [
	{
		name: 'category/list',
		path: '/pages/category/list/index'
	},
	{
		name: 'category/edit',
		path: '/pages/category/edit/index'
	},
]

const foodList = [
	{
		name: 'food/list',
		path: '/pages/food/list/index'
	},
	{
		name: 'food/edit',
		path: '/pages/food/edit/index'
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
		path: '/pages/orderDetail/index'
	},
	...shopList,
	...categoryList,
	...foodList,
]
export default routerList