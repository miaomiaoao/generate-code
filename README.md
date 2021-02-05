# kd-swagger

自动生成swagger api 接口文件工具
## 下载
下载安装kd-swagger
```
npm install -g kd-swagger
```
## 使用
只传swagger文档地址
```
kd-swagger -u http://192.168.3.173:8888/mvc/v2/api-docs 
```

传入生成api文件目录地址
```
kd-swagger -u http://192.168.3.173:8888/mvc/v2/api-docs -d src　// 在当前目录创建src/api文件夹并生成接口文档
```

传入生成模块名称,多模块时以逗号分隔
```
kd-swagger -u http://192.168.3.173:8888/mvc/v2/api-doc -m User,Test
```

http://192.168.3.173:8888/mvc/v2/api-docs为swagger文档地址   
 
参数解释:<br>
  -u --swagger-doc-url &lt;value&gt;　swagger-doc访问的地址，必传;  
  -d --target-dir &lt;value&gt;　生成的api文件目录(相对于当前目录,只能传相对路径)，为空时，默认在当前目录下生成api文件夹;  
  -m --module-name &lt;value&gt;　模块名称,只生成当前模块接口;  


