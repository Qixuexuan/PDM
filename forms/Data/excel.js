let financeData =[["产品名称(Product Name):","","零件号(Part No.):","","模号(tool No.)：","","日期(Date)：","","",null],["顾客(Customer)：","","版本(Edition)：","","产品类型：","","（汽车类， 医疗类，工业类，电子类）","","",null],["","","","","","","","","",null],["过程质量控制等级( A.B.C):","","","","","","","","",null],["1、初始过程能力研究","","","样 品 数 量 Samples Quantity ：","","","","","",""],["Initial Process Capability Research短期制程能力 process short-term capability","","","No.","要求 Requirement","","实际 Actual","可接受 Acceptance","让步concession accept","备注remark"],["","","","1","","PPK≥","","","",null],["","","","2","","PPK≥","","","",null],["","","","3","","PPK≥","","","",null],["","","","4","","PPK≥","","","",null],["","","","5","","PPK≥","","","",null],["","","","6","","PPK≥","","","",null],["","","","7","","PPK≥","","","",null],["","","","","","","","","",null],["2、初始生产样品特性类别","","","标准样品：","","PCS","","限度样品：","","PCS"],["Initial Production Samples Category","","","目标 target","实际 Actual","可接受Acceptance","可接受Acceptance","让步concession accept","备注remark","备注remark"],["关键尺寸 Key Dimension","","","","","","","","",null],["外观 Appearance","","","","","","","","",null],["成型周期 Cycle Time","","","","","","","","",null],["产品单重 Part Weight","","","","","","","","",null],["料头重量 Gate Weight","","","","","","","","",null],["人力 Labor","","","","","","","","",null],["性能 Function","","","","","","","","",null],["","","","","","","","","",null],["3、量具和试验装置","","","要求YES/NO","完成状态","可接受Acceptance","","让步concession accept","","备注remark"],["测量系统分析 Measuring System Analysis","","","","","","","","",null],["测量检具夹具 Measurement Garge and Tools/fixtures","","","","","","","","",null],["客户端入货检查测量检具夹具 Customer end Gage and fixtures","","","","","","","","",null],["","","","","","","","","",null],["4、过程监测 Process Monitoring","","","要求YES/NO","完成状态","可接受Acceptance","","让步concession accept","","备注remark"],["冷却水流量设定 Water flow study（verify with GPM flow meter)","","","","","","","","",null],["参数上下限设定工艺单(Parameter adjustment based on challenge)","","","","","","","","",null],["文件夹卷宗Folder file（模具验收单，工艺点检表，标准工艺，WI, 包装规范，检验指导书SIP,）","","","","","","","","",null],["","","","","","","","","",null],["","","","","","","","","",null],["","","","","","","","","",null],["","","","","","","","","",null],["5、包装 Package","","","完成状态(YES/NO)","可接受Acceptance","","让步concession accept","","备注remark",null],["包装批准 Package Approval","","","","","","","","",null],["","","","","","","","","",null],["6、认定 Confirmation","","","","","","","","",null],["QE/日期：","","","PE/日期","","","模具保养/日期：","","",null],["生产技术/日期：","","","PM项目/日期","","","生产总监/日期：","","",null],["","","","","","","","","",null],["7、最终结论 final conclusion：","","","","","","","","",null],["","","","","","","","","",null],["*为跟踪进展情况，需要制定一个措施计划。 For tracking the progress, it is necessary to prepare a corrective action plan","","","","","","","","",null],[null,null,null,null,null,null,null,null,null,null]];
let mergeCells =[{"row":1,"col":6,"rowspan":1,"colspan":4},{"row":2,"col":0,"rowspan":1,"colspan":10},{"row":3,"col":0,"rowspan":1,"colspan":10},{"row":5,"col":4,"rowspan":1,"colspan":2},{"row":4,"col":3,"rowspan":1,"colspan":3},{"row":4,"col":6,"rowspan":1,"colspan":4},{"row":4,"col":0,"rowspan":1,"colspan":3},{"row":5,"col":0,"rowspan":8,"colspan":3},{"row":13,"col":0,"rowspan":1,"colspan":10},{"row":14,"col":0,"rowspan":1,"colspan":3},{"row":15,"col":0,"rowspan":1,"colspan":3},{"row":16,"col":0,"rowspan":1,"colspan":3},{"row":17,"col":0,"rowspan":1,"colspan":3},{"row":18,"col":0,"rowspan":1,"colspan":3},{"row":19,"col":0,"rowspan":1,"colspan":3},{"row":20,"col":0,"rowspan":1,"colspan":3},{"row":21,"col":0,"rowspan":1,"colspan":3},{"row":22,"col":0,"rowspan":1,"colspan":3},{"row":15,"col":5,"rowspan":1,"colspan":2},{"row":15,"col":7,"rowspan":1,"colspan":2},{"row":16,"col":5,"rowspan":1,"colspan":2},{"row":17,"col":5,"rowspan":1,"colspan":2},{"row":18,"col":5,"rowspan":1,"colspan":2},{"row":19,"col":5,"rowspan":1,"colspan":2},{"row":20,"col":5,"rowspan":1,"colspan":2},{"row":21,"col":5,"rowspan":1,"colspan":2},{"row":22,"col":5,"rowspan":1,"colspan":2},{"row":16,"col":7,"rowspan":1,"colspan":2},{"row":17,"col":7,"rowspan":1,"colspan":2},{"row":18,"col":7,"rowspan":1,"colspan":2},{"row":19,"col":7,"rowspan":1,"colspan":2},{"row":20,"col":7,"rowspan":1,"colspan":2},{"row":21,"col":7,"rowspan":1,"colspan":2},{"row":22,"col":7,"rowspan":1,"colspan":2},{"row":23,"col":0,"rowspan":1,"colspan":10},{"row":24,"col":7,"rowspan":1,"colspan":2},{"row":24,"col":5,"rowspan":1,"colspan":2},{"row":24,"col":0,"rowspan":1,"colspan":3},{"row":25,"col":0,"rowspan":1,"colspan":3},{"row":26,"col":0,"rowspan":1,"colspan":3},{"row":27,"col":0,"rowspan":1,"colspan":3},{"row":25,"col":5,"rowspan":1,"colspan":2},{"row":26,"col":5,"rowspan":1,"colspan":2},{"row":27,"col":5,"rowspan":1,"colspan":2},{"row":25,"col":7,"rowspan":1,"colspan":2},{"row":26,"col":7,"rowspan":1,"colspan":2},{"row":27,"col":7,"rowspan":1,"colspan":2},{"row":28,"col":0,"rowspan":1,"colspan":10},{"row":29,"col":0,"rowspan":1,"colspan":3},{"row":29,"col":7,"rowspan":1,"colspan":2},{"row":29,"col":5,"rowspan":1,"colspan":2},{"row":30,"col":5,"rowspan":1,"colspan":2},{"row":31,"col":5,"rowspan":1,"colspan":2},{"row":32,"col":5,"rowspan":1,"colspan":2},{"row":33,"col":5,"rowspan":1,"colspan":2},{"row":34,"col":5,"rowspan":1,"colspan":2},{"row":35,"col":5,"rowspan":1,"colspan":2},{"row":35,"col":7,"rowspan":1,"colspan":2},{"row":34,"col":7,"rowspan":1,"colspan":2},{"row":33,"col":7,"rowspan":1,"colspan":2},{"row":32,"col":7,"rowspan":1,"colspan":2},{"row":31,"col":7,"rowspan":1,"colspan":2},{"row":30,"col":7,"rowspan":1,"colspan":2},{"row":36,"col":0,"rowspan":1,"colspan":10},{"row":30,"col":0,"rowspan":1,"colspan":3},{"row":31,"col":0,"rowspan":1,"colspan":3},{"row":32,"col":0,"rowspan":2,"colspan":3},{"row":34,"col":0,"rowspan":2,"colspan":3},{"row":37,"col":0,"rowspan":1,"colspan":3},{"row":37,"col":4,"rowspan":1,"colspan":2},{"row":37,"col":6,"rowspan":1,"colspan":2},{"row":38,"col":6,"rowspan":1,"colspan":2},{"row":38,"col":4,"rowspan":1,"colspan":2},{"row":39,"col":0,"rowspan":1,"colspan":10},{"row":38,"col":0,"rowspan":1,"colspan":3},{"row":40,"col":0,"rowspan":1,"colspan":10},{"row":41,"col":1,"rowspan":1,"colspan":2},{"row":42,"col":1,"rowspan":1,"colspan":2},{"row":41,"col":4,"rowspan":1,"colspan":2},{"row":42,"col":4,"rowspan":1,"colspan":2},{"row":41,"col":7,"rowspan":1,"colspan":3},{"row":42,"col":7,"rowspan":1,"colspan":3},{"row":43,"col":0,"rowspan":1,"colspan":10},{"row":44,"col":0,"rowspan":1,"colspan":10},{"row":45,"col":0,"rowspan":1,"colspan":10},{"row":46,"col":0,"rowspan":1,"colspan":10},{"row":47,"col":0,"rowspan":1,"colspan":10}];