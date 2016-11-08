
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");

                //cc.director.runScene('MainScene');


            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hey , guys!", "Arial", 138);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = 0;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5,
            rotation: 180
        });
        this.addChild(this.sprite, 0);

        this.sprite.runAction(
            cc.sequence(
                cc.rotateTo(2, 0),
                cc.scaleTo(2, 1, 1)
            )
        );
        helloLabel.runAction(
            cc.spawn(
                cc.moveBy(2.5, cc.p(0, size.height - 140)),
                cc.tintTo(2.5,255,125,0)
            )
        );
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);

        var mainscene = ccs.load(res.Layer1_json);
        this.addChild(mainscene.node);

    }
});












if (typeof dcodeIO === 'undefined' || !dcodeIO.ProtoBuf) {
    throw(new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions."));
}


var  zlib = require('zlib');	//加载zlib模块
var  Buffer = require('buffer').Buffer;	//加载buffer模块


//ArrayBuffer 转 buffer
function toBuffer(ab) {
    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
    }
    return buffer;
}
//buffer 转 ArrayBuffer
function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}


// Connect to our server: node server.js
//var socket = new WebSocket("ws://127.0.0.1:8080");
var socket = new WebSocket("ws://172.21.28.63:18000/");
socket.binaryType = "arraybuffer"; // We are talking binary   arraybuffer


socket.onopen = function() {

    cc.log( "Connected");


    PB_template.init();
    //PB_template.se_ReqUserLogin('#LZZS15003','87669696');

};


socket.onerror = function(e) {

    console.log(e);

    cc.log( "error");
};


socket.onclose = function(e) {

    cc.log(e);

    cc.log( "Disconnected");
};

function send1() {
    if (socket.readyState == WebSocket.OPEN) {

        //消息体
        var msg = new MovePieces(23,2,xmlBuf.fill(str),3,'fff');	//new pb实例


        socket.send(addHeader(msg.toBuffer()).toArrayBuffer());

    } else {
        cc.log( "Not connected");
    }
}

/*
socket.onmessage1232 = function(evt) {
    try {
        // Decode the Message


        //将 ArrayBuffer 转为 buffer 调用nodejs的zlib库解压
        zlib.inflate(toBuffer(evt.data), function(err,res){

            var msg = MovePieces.decode(res);	//从 buffer 解析 pb
            var MovePiecesInfo = msg.MovePiecesInfo.readString(msg.MovePiecesInfo.limit - msg.MovePiecesInfo.offset);	//从 pb 的buffer类型 字段中读取字符串
            msg.MovePiecesInfo = xml2json.fromStr( MovePiecesInfo );	//解析 xml
            cc.log(msg.MovePiecesInfo);
            cc.log(value += "Received: "+msg.MovePiecesInfo.playInfo.stepInfo.toRow['#text'] +'\r\n');
        })


    } catch (err) {
        cc.log(value += "Error: "+err+"\n");
    }
};
*/

socket.onmessage = function(evt) {
    cc.log('onmessage');
    var data = PB_template.enDataHeader(toBuffer(evt.data));

    if(!data) return false;

    cc.log(data.h1);

    switch(data.h1){

        //登陆返回
        case OGID_MSGUSER_LOGIN :{
            cc.log('登陆返回');
            var msg = PB_template.re_AckUserLogin(data.body);
            cc.log(msg)
            if(msg.AckLogin.Result){
                //登陆成功
                //请求转播列表 （测试用）
                PB_template.se_ReqBroadCastList('2015-06-29');
                //根据id 获取转播数据
                PB_template.se_EnterBroadCast(711);
            }
        }break;

        //转播列表 返回
        case OGID_MSGBC_BCLIST :{
            cc.log('转播列表');
            var msg = PB_template.re_BroadCastList(data.body);
            cc.log(msg);
            if(msg.result){

            }
        }break;
        //进入转播 返回
        case OGID_MSGBCOR_ENTERROOM :{
            cc.log('进入转播');
            var msg = PB_template.re_HistroyBroadcastData(data.body);
            cc.log(msg);
        }break;

        //开始转播 推送
        case OGID_MSGBC_BCINFOCHANGE :{
            cc.log('开始转播');
            var msg = PB_template.re_BroadCastList(data.body);
            cc.log(msg);
        }break;

        //开始一局 推送
        case OGID_MSGBC_BEGINBC :{
            cc.log('开始一局');
            var msg = PB_template.re_PlayedInfo(data.body);
            cc.log(msg);
        }break;

        //行棋 推送
        case OGID_MSGBC_MOVECHESS :{
            cc.log('行棋');
            var msg = PB_template.re_MovePieces(data.body);
            cc.log(msg);
        }break;

        //修改选手名及先手顺序 推送
        case OGID_MSGBC_ADDPLAYERNAME :{
            cc.log('修改选手名及先手顺序');
            var msg = PB_template.re_SetGameInfo(data.body);
            cc.log(msg);
        }break;

        //撤销 推送
        case OGID_MSGBC_RESCINDMOVE :{
            cc.log('撤销');
            var msg = PB_template.re_RescindInfo(data.body);
            cc.log(msg);
        }break;

         //结束一局或修改一局结果 推送
        case OGID_MSGBC_ENDBC :{
            cc.log('结束一局');
            var msg = PB_template.re_PlayedInfo(data.body);

            cc.log(msg);
        }break;

         //结束转播 推送
        case OGID_MSGBC_FINISHBC :{
            cc.log('结束转播');
            var msg = PB_template.re_EndBroadCast(data.body);

            cc.log(msg);
        }break;

        //删除转播 推送
        case OGID_MSGBC_FINISHBC :{
            cc.log('删除转播');
            var msg = PB_template.re_DropBroadCast(data.body);

            cc.log(msg);
        }break;


        default:{
            cc.log('default');
            cc.log(data);
        }
    }

};




var  PB_template = {

    init:function(){

        // Initialize ProtoBuf.js
        var ProtoBuf = dcodeIO.ProtoBuf;
        this.ReqUserLogin = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("ReqUserLogin");	//加载ProtoBuf 对象 //登陆
        this.Idle = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("Idle");

        this.AckUserLogin = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("AckUserLogin");   //登陆返回
        this.ReqBroadCastList = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("ReqBroadCastList");   //请求转播列表
        this.BroadCastList = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("BroadCastList");   //转播列表返回
        this.EnterBroadCast = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("EnterBroadCast");   //进入转播
        this.HistroyBroadcastData = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("HistroyBroadcastData");   //转播数据
        this.BroadCastList = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("BroadCastList");   //开始转播
        this.PlayedInfo = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("PlayedInfo");   //开始一局
        this.MovePieces = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("MovePieces");   //行棋消息
        this.SetGameInfo = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("SetGameInfo");   //修改选手名及先手顺序（可能没有） 、修改选手名及先手顺序（可能没有）- 服务主动推送
        this.RescindInfo = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("RescindInfo");   //撤销（可能没有） 、撤销（可能没有）- 服务主动推送
        this.EndBroadCast = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("EndBroadCast");   //结束转播 、结束转播- 服务主动推送
        this.DropBroadCast = ProtoBuf.loadProtoFile("./src/dataHandle/OGBCSProtobuf.proto").build("DropBroadCast");   //如果这整个过程中收到转播删除消息，则用户会被强制提出房间 、如果这整个过程中收到转播删除消息，则用户会被强制提出房间 - 服务主动推送


    },


    //删除转播
    re_DropBroadCast : function(buf){
        return this.DropBroadCast.decode(buf);
    },
    //结束转播
    re_EndBroadCast : function(buf){
        return this.EndBroadCast.decode(buf);
    },
    //撤销
    re_RescindInfo : function(buf){
        return this.RescindInfo.decode(buf);
    },
    //修改选手名及先手顺序
    re_SetGameInfo : function(buf){
        return this.SetGameInfo.decode(buf);
    },
    //行棋消息
    re_MovePieces : function(buf){
        return this.MovePieces.decode(buf);
    },

    //开始一局
    re_PlayedInfo :function(buf){
        return this.PlayedInfo.decode(buf);
    },
    //开始转播
    re_StartBroadCast :function(buf){

    },

    //转播数据
    re_HistroyBroadcastData : function(buf){

        //将 ArrayBuffer 转为 buffer 调用nodejs的zlib库解压
        var buf_pb = zlib.inflateSync(buf);
        //从 buffer 解析 pb
        var data_pb = this.HistroyBroadcastData.decode(buf_pb);
        //从 pb 的buffer类型 字段中读取字符串  并解析xml
        //data_pb.HistoryData =  xml2json.fromStr( data_pb.HistoryData.toString() );

        return data_pb;


    },

    //进入转播
    se_EnterBroadCast : function(BCid){
        return this.send(OGID_MSGBCOR_ENTERROOM | OGID_REQ , new this.EnterBroadCast(BCid , 10000));
    },

    //请求转播列表
    se_ReqBroadCastList : function(_date){
        return this.send(OGID_MSGBC_BCLIST | OGID_REQ , new this.ReqBroadCastList(_date , 10000));
    },

    //转播列表返回
    re_BroadCastList : function(buf){
        return this.BroadCastList.decode(buf);
    },

    //用户登录
    se_ReqUserLogin: function(UserName,Password,Version,UserIP,MachineType,Gameid){
        this.send(OGID_MSGUSER_LOGIN | OGID_REQ , new this.ReqUserLogin(UserName,Password,'0.0.1','',3,'','',10000,''));
    },

    //登陆返回
    re_AckUserLogin : function(buf){
        return this.AckUserLogin.decode(buf);
    },



    send : function(msgID,msg) {
        if (socket.readyState == WebSocket.OPEN) {

            //消息体
           // var msg = new MovePieces(23,2,xmlBuf.fill(str),3,'fff');	//new pb实例

            //cc.log(addHeader(msgID,msg.toBuffer()).toArrayBuffer());
           return socket.send(this.addHeader(msgID,msg.toBuffer()).toArrayBuffer());
            //socket.send('asdasdfasdfadsfad');

        } else {
            console.log( "Not connected");
        }
    },

    //添加消息头 12字节 (消息id/消息长度/预留)  （非必须）
    addHeader:function (msgID,buffer){

        if(typeof buffer.copy == 'undefined') buffer = toBuffer(buffer);

        //创建新buffer 长度为 消息长度+消息头长度
        var _Buffer = new Buffer(buffer.byteLength + 12);

        //写入消息头
        _Buffer.writeUInt32LE(msgID,0);	//消息id
        _Buffer.writeUInt32LE(buffer.byteLength,4);	//消息长度
        _Buffer.writeUInt32LE(0,8);	//预留

        //拷贝消息体到新buffer
        buffer.copy(_Buffer,12,0);cc.log(_Buffer);
        return _Buffer;
    },

    /*************
     *从消息中解析消息头 并做验证
     *
     * @param buf （buffer）
     *
     *
     *
     *
     */

    enDataHeader:function (buf){

        var h1 = new Buffer(4);
        var h2 = new Buffer(4);
        var h3 = new Buffer(4);
        buf.copy(h1 , 0 ,0 ,3); 	//消息id
        buf.copy(h2 , 0 ,4 ,7); 	//消息长度
        buf.copy(h3 , 0 ,8 ,11);

        //校验消息体长度
        var  msgLen = h2.readUInt32LE(0);
        if( msgLen != ( buf.length - 12) ){
            return false;
        }

        var body = new Buffer(msgLen);
        buf.copy(body , 0 ,12 );

        return {

            'h1' : h1.readUInt32LE(0),
            'h2' : h2.readUInt32LE(0),
            'h3' : h3.readUInt32LE(0),
            'body' : body
        };
    },

    receive :function(data){


    }
};
