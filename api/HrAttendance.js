import http from './http'
import env from './env'

class HrAttendanceService {

  /**
  * @description 考勤天数统计 
  * @param { String }  yearAndMonth
  */
  getByEmpAndMonth(params) { return http.get(`/v0/attendance/getByEmpAndMonth?yearAndMonth=${params.yearAndMonth}`, { baseURL: env.baseURL('cas') }) }

  /**
  * @description 获取考勤模板
  * @param { Object } params
  */
  getHrAttendancetemplate(params) { return http.post('/v0/attendance/getHrAttendancetemplate', params, { baseURL: env.baseURL('cas') }) }
}

export default new HrAttendanceService()
