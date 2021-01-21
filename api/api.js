[
	{
		"path": "/error",
		"methods": "patch",
		"tags": [
			"basic-error-controller"
		],
		"summary": "error",
		"operationId": "errorUsingPATCH",
		"consumes": [
			"application/json"
		],
		"produces": [
			"*/*"
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "object",
					"additionalProperties": {
						"type": "object"
					}
				}
			},
			"204": {
				"description": "No Content"
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/VersionController/kund/getCurrentVersion",
		"methods": "get",
		"tags": [
			"version-controller"
		],
		"summary": "当前版本信息",
		"operationId": "getCurrentAppVersionUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "version",
				"in": "query",
				"description": "version",
				"required": false,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/SysApkVersion",
					"originalRef": "SysApkVersion"
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/VersionController/kund/getVersion",
		"methods": "post",
		"tags": [
			"version-controller"
		],
		"summary": "获取app最新版本",
		"operationId": "getVersionUsingPOST",
		"consumes": [
			"application/json"
		],
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "version",
				"in": "query",
				"description": "version",
				"required": false,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/SysApkVersion",
					"originalRef": "SysApkVersion"
				}
			},
			"201": {
				"description": "Created"
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAddEmplyoeeId",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "获取项目打卡的新增人员列表",
		"operationId": "getAddEmplyoeeIdUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "name",
				"in": "query",
				"description": "name",
				"required": false,
				"type": "string"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/HrEmployeePm",
						"originalRef": "HrEmployeePm"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAllLborer",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "获取所有临时工人员（如果projectId不为空，则获取该项目下的临时工）",
		"operationId": "getAllLborerListUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "keyName",
				"in": "query",
				"description": "keyName",
				"required": false,
				"type": "string"
			},
			{
				"name": "projectId",
				"in": "query",
				"description": "projectId",
				"required": false,
				"type": "integer",
				"format": "int32"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/laberRequest",
						"originalRef": "laberRequest"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAllProjectList",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "所有项目列表（自己所属排在最前）",
		"operationId": "getAllProjectListUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "keyName",
				"in": "query",
				"description": "keyName",
				"required": false,
				"type": "string"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/Pm_ProjectInfo",
						"originalRef": "Pm_ProjectInfo"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAttendanceModel",
		"methods": "post",
		"tags": [
			"attendance-controller"
		],
		"summary": "获取考勤模板，用于自动打卡",
		"operationId": "getAttendanceModelUsingPOST",
		"consumes": [
			"application/json"
		],
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/HrAttendancetemplate",
					"originalRef": "HrAttendancetemplate"
				}
			},
			"201": {
				"description": "Created"
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAttendanceStatistics",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "获取考勤统计的数据",
		"operationId": "getStatisticsListUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "deptId",
				"in": "query",
				"description": "deptId",
				"required": false,
				"type": "string"
			},
			{
				"name": "projectId",
				"in": "query",
				"description": "projectId",
				"required": false,
				"type": "integer",
				"format": "int64"
			},
			{
				"name": "time",
				"in": "query",
				"description": "time",
				"required": false,
				"type": "string"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/Hr_attendanceStaticsRequest",
						"originalRef": "Hr_attendanceStaticsRequest"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAttendanceStatisticsDetailRecord",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "根据人员获取考勤打卡记录数据",
		"operationId": "getStatisticsDetailAllListUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "empId",
				"in": "query",
				"description": "empId",
				"required": false,
				"type": "integer",
				"format": "int32"
			},
			{
				"name": "time",
				"in": "query",
				"description": "time",
				"required": false,
				"type": "integer",
				"format": "int64"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/Hr_attendanceStaticsClockNumberRequest",
					"originalRef": "Hr_attendanceStaticsClockNumberRequest"
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAttendanceStatisticsDetails",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "根据人员id跟年月获取考勤详情数据",
		"operationId": "getStatisticsDetailsListUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "empId",
				"in": "query",
				"description": "empId",
				"required": false,
				"type": "integer",
				"format": "int32"
			},
			{
				"name": "time",
				"in": "query",
				"description": "time",
				"required": false,
				"type": "string"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/Hr_attendanceStaticsClockRequest",
						"originalRef": "Hr_attendanceStaticsClockRequest"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getAttendanceStatusByYearAndMonth",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "根据年月获取当月的考勤状态",
		"operationId": "GetHrAttendanceStatusUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "days",
				"in": "query",
				"description": "days",
				"required": false,
				"type": "string"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/Hr_attendanceStatusRequest",
						"originalRef": "Hr_attendanceStatusRequest"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getByEmpAndMonth",
		"methods": "get",
		"tags": [
			"hr-attendance-controller"
		],
		"summary": "考勤天数统计",
		"operationId": "getByEmpAndMonthUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			},
			{
				"name": "yearAndMonth",
				"in": "query",
				"description": "yearAndMonth",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/HrAttendanCensus",
					"originalRef": "HrAttendanCensus"
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getHrAttendancetemplate",
		"methods": "post",
		"tags": [
			"hr-attendance-controller"
		],
		"summary": "获取考勤模板",
		"operationId": "getHrAttendancetemplateUsingPOST",
		"consumes": [
			"application/json"
		],
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/HrAttendancetemplate",
					"originalRef": "HrAttendancetemplate"
				}
			},
			"201": {
				"description": "Created"
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	},
	{
		"path": "/v0/attendance/getLborerAllList",
		"methods": "get",
		"tags": [
			"hr-attendance-get-controller"
		],
		"summary": "获取临时工打卡月历统计",
		"operationId": "getLborerClandarListUsingGET",
		"produces": [
			"*/*"
		],
		"parameters": [
			{
				"name": "emplyoeeId",
				"in": "query",
				"description": "emplyoeeId",
				"required": false,
				"type": "integer",
				"format": "int32"
			},
			{
				"name": "projectId",
				"in": "query",
				"description": "projectId",
				"required": false,
				"type": "integer",
				"format": "int32"
			},
			{
				"name": "time",
				"in": "query",
				"description": "time",
				"required": false,
				"type": "string"
			},
			{
				"name": "token",
				"in": "header",
				"description": "token",
				"required": true,
				"type": "string"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/laberCalendarRequest",
						"originalRef": "laberCalendarRequest"
					}
				}
			},
			"401": {
				"description": "Unauthorized"
			},
			"403": {
				"description": "Forbidden"
			},
			"404": {
				"description": "Not Found"
			}
		},
		"deprecated": false
	}
]