import http from './http'
import env from './env'

class HrAttendanceGetService {

  /**
  * @description 获取考勤统计的数据 
  * @param { String }  deptId
  * @param { Integer }  projectId
  * @param { String }  time
  */
  getAttendanceStatistics(params) { return http.get(`/v0/attendance/getAttendanceStatistics?deptId=${params.deptId}projectId=${params.projectId}time=${params.time}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 根据人员获取考勤打卡记录数据 
  * @param { Integer }  empId
  * @param { Integer }  time
  */
  getAttendanceStatisticsDetailRecord(params) { return http.get(`/v0/attendance/getAttendanceStatisticsDetailRecord?empId=${params.empId}time=${params.time}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 根据人员id跟年月获取考勤详情数据 
  * @param { Integer }  empId
  * @param { String }  time
  */
  getAttendanceStatisticsDetails(params) { return http.get(`/v0/attendance/getAttendanceStatisticsDetails?empId=${params.empId}time=${params.time}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 根据年月获取当月的考勤状态 
  * @param { String }  days
  */
  getAttendanceStatusByYearAndMonth(params) { return http.get(`/v0/attendance/getAttendanceStatusByYearAndMonth?days=${params.days}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取临时工打卡月历统计 
  * @param { Integer }  emplyoeeId
  * @param { Integer }  projectId
  * @param { String }  time
  */
  getLborerAllList(params) { return http.get(`/v0/attendance/getLborerAllList?emplyoeeId=${params.emplyoeeId}projectId=${params.projectId}time=${params.time}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取临时工打卡详情 
  * @param { Integer }  days
  * @param { Integer }  projectId
  */
  getLborerList(params) { return http.get(`/v0/attendance/getLborerList?days=${params.days}projectId=${params.projectId}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取未打卡记录 
  * @param { Integer }  rows
  */
  getNotClockByEmplyoeeId(params) { return http.get(`/v0/attendance/getNotClockByEmplyoeeId?rows=${params.rows}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取自己所属的项目(包括自己是项目经理或者项目人员) 
  */
  getOwnAllProjectList() { return http.get(`/v0/attendance/getOwnAllProjectList`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取当天打卡信息(项目部)(根据projectId) 
  * @param { Integer }  projectId
  */
  getOwnClockByProjectId(params) { return http.get(`/v0/attendance/getOwnClockByProjectId?projectId=${params.projectId}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取当天打卡信息(项目部)(如果当天在某个项目打过卡则返回打卡信息，如果当天未打卡，则返回最后一次打卡的项目名称) 
  */
  getOwnLastClock() { return http.get(`/v0/attendance/getOwnLastClock`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取自己所属的项目 
  */
  getOwnProjectList() { return http.get(`/v0/attendance/getOwnProjectList`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取项目打卡信息 
  * @param { Integer }  days
  * @param { Integer }  projectId
  */
  getPmEmplyoeeId(params) { return http.get(`/v0/attendance/getPmEmplyoeeId?days=${params.days}projectId=${params.projectId}`, { baseURL: env.baseURL('cas') }) }
}

export default new HrAttendanceGetService()
