import { get, post } from './request'

// 获取验证码
export const getCode = params => get('/ioc/app/code/sms', params);
// 登录
export const login = params => post('/ioc/app/login/mobile', params);
// 退出登录
export const loginOut = params => post('/ioc/app/logout', params);
// 获取轮播图
export const getSlideshow = params => post('/ioc/app/business/config/list', params);
// 购车租车
// 获取车辆种类列表
export const getCarList = params => post('/ioc/app/car/carInfoConfig/getList', params);
// 根据品牌和型号查询车辆信息
export const getCarConfig = params => post('/ioc/app/car/carInfoConfig/getCarInfoConfig', params);
// 一键预约
export const precontract = params => post('/ioc/app/car/shortRent/add', params);
// 邀请好友
// 
export const invite = params => post('/ioc/app/user/inviteFriend/add', params);
// 充值管理
// 用户充值
export const recharge = params => post('/ioc/app/recharge/add', params);
// 查询充值信息
export const rechargeRecord = params => post('/ioc/app/recharge/getRechargeByUser', params);
// 查询到期时间
export const deadline = params => get('/ioc/app/transaction/getEndTime', params);

// 我的
// 修改紧急联系人
export const updateContactByUser = params => post('/ioc/app/user/updateContactByUser', params);
// 用户信息
export const getUserInfo = params => post('/ioc/app/user/get', params);
// 公司信息
export const getCompanyInfo= params => post('/ioc/app/companyInfo/find', params);
// 收款
export const gathring= params => get('/ioc/app/getPaymentSource', params);
// 提现申请
export const withdrawApply= params => get('/ioc/app/car/drawMoney/add', params);
// 提现查询
export const withdrawQuery= params => get('/ioc/app/car/drawMoney/find', params);

