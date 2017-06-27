let financeData =[["Project No.项目号","","","","","Date日期","",""],["Tool No.模具号","Tool No.模具号","","","","Machine No.机台号","",""],["No.","Item项目","","","","Yes是","No否","Remark备注"],["1","Are samples approved by customer?\n样品是否得到客户承认？","","","","","",""],["2","Are BOM officially released? Are BOM content correct?          \nBOM 是否正式发行？BOM表中的产品重量、工艺中重量是否一致？","","","","","",""],["3","Are WI/Package standard officially released? Are WI/Package standard content correct?\n作业指导/包装规范是否正式发行？作业指导/包装规范内容是否正确？是否都是统一为最新版本？ 作业指导书、包装规范、工艺中的客户料号是否一致？内部料号是否一致？版本是否一致？","","","","","",""],["4","Are resin/insert etc. prepared and incoming inspection OK? \n原料/镶件是否准备到位，入料检是否正常？","","","","","",""],["5","Is pre-launch CPofficially released? Is CP content correct？\n试产CP 是否正式发行？试产C P内容是否正确？","","","","","",""],["6","Is Inspection Standard officially released? If correct aligned with CP?\n检验指导书是否正式发行？指导书内容是否和CP相一致？","","","","","",""],["7","Are Operator/inspector trained? \n作业员/检验员/测量员是否接受过培训？","","","","","",""],["8","Are all the gages and fixtures ready?\n所需量具，检具，夹具都准备好了并校验吗？","","","","","",""],["9","Are all the gages and fixtures in customer's incoming inspection same as ours?\n客户端的量具/检具/夹具是否是我方统一制作提供？","","","","","",""],["10","If  the gages and fixtures are not from our side, do we take back and finish the allignment test?\n如果客户端量具/检具/夹具不是由我方提供，是否取回与我方的一起参照图纸做一致性测量比对？","","","","","",""],["11","Are all open issue of tool closed or deviation agreed by team? \n模具问题点是否都已结案或得到团队的一致同意？","","","","","",""],["12","Are molding standard parameter fixed?\n成型工艺的标准参数是否确定？","","","","","",""],["13","Are auxiliary ready for trial?\n试产辅助装置是否准备好？","","","","","",""],["14","Are disposition of parts decided?\n是否已决定产出产品如何处理？","","","","","",""],["15","Are task/responsibility assigned during trial run? \n参与者的任务/责任是否在试产中分配好？","","","","","",""],["质量/日期：","","","模具/日期：","","","供应链/日期：",""],["生产/日期：","","","项目/日期：","","","商务/日期：",""],["制定/日期:","","","审核/日期:","","","",""]];
let mergeCells =[{"row":2,"col":1,"rowspan":1,"colspan":4},{"row":1,"col":0,"rowspan":1,"colspan":2},{"row":0,"col":0,"rowspan":1,"colspan":2},{"row":0,"col":6,"rowspan":1,"colspan":2},{"row":1,"col":6,"rowspan":1,"colspan":2},{"row":1,"col":2,"rowspan":1,"colspan":3},{"row":0,"col":2,"rowspan":1,"colspan":3},{"row":3,"col":1,"rowspan":1,"colspan":4},{"row":4,"col":1,"rowspan":1,"colspan":4},{"row":5,"col":1,"rowspan":1,"colspan":4},{"row":6,"col":1,"rowspan":1,"colspan":4},{"row":7,"col":1,"rowspan":1,"colspan":4},{"row":8,"col":1,"rowspan":1,"colspan":4},{"row":9,"col":1,"rowspan":1,"colspan":4},{"row":10,"col":1,"rowspan":1,"colspan":4},{"row":11,"col":1,"rowspan":1,"colspan":4},{"row":12,"col":1,"rowspan":1,"colspan":4},{"row":13,"col":1,"rowspan":1,"colspan":4},{"row":14,"col":1,"rowspan":1,"colspan":4},{"row":15,"col":1,"rowspan":1,"colspan":4},{"row":16,"col":1,"rowspan":1,"colspan":4},{"row":17,"col":1,"rowspan":1,"colspan":4},{"row":18,"col":1,"rowspan":1,"colspan":2},{"row":19,"col":1,"rowspan":1,"colspan":2},{"row":18,"col":4,"rowspan":1,"colspan":2},{"row":19,"col":4,"rowspan":1,"colspan":2},{"row":20,"col":1,"rowspan":1,"colspan":2},{"row":20,"col":4,"rowspan":1,"colspan":2}];
let timeCells=[{row:0,col:6},{row:18,col:1},{row:18,col:4},{row:18,col:7},{row:19,col:1},{row:19,col:4},{row:19,col:7},{row:20,col:1},{row:20,col:4}];
let readonlyCells=[{row:0,col:5},{row:1,col:5},{row:18,col:3},{row:18,col:6},{row:19,col:3},{row:19,col:6},{row:20,col:3},{row:20,col:6},{row:20,col:7},{row:20,col:8}];