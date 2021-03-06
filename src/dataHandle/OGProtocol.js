
const OGID_REQ = 0x00000000 //请求消息类型
const OGID_ACK = 0x08000000 //应答消息类型

// 服务间心跳-
const OGID_MSG_IDLE = 0x00000001

//---------------------------------------------------------------------------
//      OGBroadCastSystem 系统消息基础值定义			  (4096个)
//---------------------------------------------------------------------------
const OGID_MSGBASE_OGBCS = 0x00008000
const OGID_MSGBASE_OGBCS_MAX = 0x00008FFF

//---------------------------------------------------------------------------
//      OGBCSAuthService 转播系统消息基础值定义        (256个)
//---------------------------------------------------------------------------
const OGID_MSGBASE_OGBCSAUTH = OGID_MSGBASE_OGBCS + 0x00
const OGID_MSGBASE_OGBCSAUTH_MAX = OGID_MSGBASE_OGBCS + 0xFF

//---------------------------------------------------------------------------
//      OGBCSChatService 转播系统消息基础值定义        (256个)
//---------------------------------------------------------------------------
const OGID_MSGBASE_OGBCSCHAT = OGID_MSGBASE_OGBCS + 0x100
const OGID_MSGBASE_OGBCSCHAT_MAX = OGID_MSGBASE_OGBCS + 0x1FF

//---------------------------------------------------------------------------
//      OGBCSWebService 转播系统消息基础值定义        (256个)
//---------------------------------------------------------------------------
const OGID_MSGBASE_OGBCSWEB = OGID_MSGBASE_OGBCS + 0x200
const OGID_MSGBASE_OGBCSWEB_MAX = OGID_MSGBASE_OGBCS + 0x2FF

//---------------------------------------------------------------------------
//      OGBCSReBroadCastService 转播系统消息基础值定义        (256个)
//---------------------------------------------------------------------------
const OGID_MSGBASE_OGBCSREBROADCAST = OGID_MSGBASE_OGBCS + 0x300
const OGID_MSGBASE_OGBCSREBROADCAST_MAX = OGID_MSGBASE_OGBCS + 0x3FF

//---------------------------------------------------------------------------
//      OGBCSFrontService 转播系统消息基础值定义        (256个)
//---------------------------------------------------------------------------
const OGID_MSGBASE_OGBCSFRONT = OGID_MSGBASE_OGBCS + 0x400
const OGID_MSGBASE_OGBCSFRONT_MAX = OGID_MSGBASE_OGBCS + 0x4FF

//////////////////////////////////////OGBCSAuthService
//通用应答消息
const OGID_MSG_ACK = OGID_MSGBASE_OGBCSAUTH + 1

//登陆
const OGID_MSGUSER_LOGIN = OGID_MSGBASE_OGBCSAUTH + 2

//退出
const OGID_MSGUSER_LEAVE = OGID_MSGBASE_OGBCSAUTH + 3

//注册
const OGID_MSGUSER_REGISTER = OGID_MSGBASE_OGBCSAUTH + 4

//前端服务注册
const OGID_MSGUSER_FRONTREGISTER = OGID_MSGBASE_OGBCSAUTH + 5

//认证服务踢人
const OGID_MSGUSER_KICKFRONTPLAYER = OGID_MSGBASE_OGBCSAUTH + 6

//主动推送CCU
const OGID_MSGUSER_CCU = OGID_MSGBASE_OGBCSAUTH + 7

//前端服务重启
const OGID_MSGUSER_FRONTREBOOT = OGID_MSGBASE_OGBCSAUTH + 8

//////////////////////////////////////OGBCSChatService

// 前端服务注册
const OGID_MSG_FRONTCHATREGISTER = OGID_MSGBASE_OGBCSCHAT + 1

// 创建新通道
const OGID_MSG_CREATECHANNEL = OGID_MSGBASE_OGBCSCHAT + 2

// 注销通道
const OGID_MSG_DELETECHANNEL = OGID_MSGBASE_OGBCSCHAT + 3

// 系统消息
const OGID_MSG_SYSTEMCHATINFO = OGID_MSGBASE_OGBCSCHAT + 4

// 聊天消息
const OGID_MSG_USERCHATINFO = OGID_MSGBASE_OGBCSCHAT + 5

// 广播用户聊天
const OGID_MSGBC_CHATINFO = OGID_MSGBASE_OGBCSCHAT + 6

// 通知前端缓存更新消息
const OGID_MSG_UPDATECHATINFO = OGID_MSGBASE_OGBCSCHAT + 7

// 用户请求转播中的系统消息
const OGID_MSGUSER_SCINFO = OGID_MSGBASE_OGBCSCHAT + 8

//////////////////////////////////////OGBCSWebService

// 请求更新火热推荐信息
const OGID_MSG_REQUPDATEHOTINFO = OGID_MSGBASE_OGBCSWEB + 1

// 请求更新赛事信息
const OGID_MSG_REQUPDATEMATCHINFO = OGID_MSGBASE_OGBCSWEB + 2

// 请求更新转播信息
const OGID_MSG_REQUPDATEBROADCASTINFO = OGID_MSGBASE_OGBCSWEB + 3

// 走马灯消息
const OGID_MSG_MARQUEESINFO = OGID_MSGBASE_OGBCSWEB + 4

// 广播后台更新火热推荐信息
const OGID_MSGBC_UPDATEHOTINFO = OGID_MSGBASE_OGBCSWEB + 5

// 广播后台更新赛事信息
const OGID_MSGBC_UPDATEMATCHINFO = OGID_MSGBASE_OGBCSWEB + 6

// 广播后台更新转播信息
const OGID_MSGBC_UPDATEBROADCASTINFO = OGID_MSGBASE_OGBCSWEB + 7

// 广播后台走马灯消息
const OGID_MSGBC_MARQUEESINFO = OGID_MSGBASE_OGBCSWEB + 8

//////////////////////////////////////OGBCSReBroadCastService

// 火热推荐信息
const OGID_MSGBC_HOTINFO = OGID_MSGBASE_OGBCSREBROADCAST + 1

// 赛事列表信息
const OGID_MSGBC_MATCHLIST = OGID_MSGBASE_OGBCSREBROADCAST + 2

// 转播列表信息
const OGID_MSGBC_BCLIST = OGID_MSGBASE_OGBCSREBROADCAST + 3

// 创建转播
const OGID_MSGBCOR_CREATEBC = OGID_MSGBASE_OGBCSREBROADCAST + 4

// 删除转播
const OGID_MSGBCOR_DELETEBC = OGID_MSGBASE_OGBCSREBROADCAST + 5

// 编辑转播信息
const OGID_MSGBCOR_EDITBC = OGID_MSGBASE_OGBCSREBROADCAST + 6

// 开始转播
const OGID_MSGBCOR_STARTBC = OGID_MSGBASE_OGBCSREBROADCAST + 7

// 结束转播
const OGID_MSGBCOR_FINISHBC = OGID_MSGBASE_OGBCSREBROADCAST + 8

// 添加选手名
const OGID_MSGBCOR_ADDPLAYERSNAME = OGID_MSGBASE_OGBCSREBROADCAST + 9

// 开始一局转播
const OGID_MSGBCOR_BEGINBC = OGID_MSGBASE_OGBCSREBROADCAST + 10

// 结束一局转播
const OGID_MSGBCOR_ENDBC = OGID_MSGBASE_OGBCSREBROADCAST + 11

// 走一步棋
const OGID_MSGBCOR_MOVECHESS = OGID_MSGBASE_OGBCSREBROADCAST + 12

// 撤销
const OGID_MSGBCOR_RESCINDMOVE = OGID_MSGBASE_OGBCSREBROADCAST + 13

// 设置修改转播结果
const OGID_MSGBCOR_REVISERESULT = OGID_MSGBASE_OGBCSREBROADCAST + 14

// 请求人气值
const OGID_MSGBC_POPULARITYINFO = OGID_MSGBASE_OGBCSREBROADCAST + 15

// 搜索转播
const OGID_MSGBCOR_SEARCHBCID = OGID_MSGBASE_OGBCSREBROADCAST + 16

// 请求转播信息
const OGID_MSGBCOR_SEARCHBCINFO = OGID_MSGBASE_OGBCSREBROADCAST + 17

// 转播服务注册
const OGID_MSGBC_FRONTREGISTER = OGID_MSGBASE_OGBCSREBROADCAST + 18

// 广播转播创建或者修改
const OGID_MSGBC_BCINFOCHANGE = OGID_MSGBASE_OGBCSREBROADCAST + 19

// 广播删除转播
const OGID_MSGBC_DELETEBC = OGID_MSGBASE_OGBCSREBROADCAST + 20

// 广播开始一局消息
const OGID_MSGBC_BEGINBC = OGID_MSGBASE_OGBCSREBROADCAST + 21

// 广播修改一局选手名
const OGID_MSGBC_ADDPLAYERNAME = OGID_MSGBASE_OGBCSREBROADCAST + 22

// 广播开始转播
const OGID_MSGBC_STARTBC = OGID_MSGBASE_OGBCSREBROADCAST + 23

// 广播行棋
const OGID_MSGBC_MOVECHESS = OGID_MSGBASE_OGBCSREBROADCAST + 24

// 广播撤销
const OGID_MSGBC_RESCINDMOVE = OGID_MSGBASE_OGBCSREBROADCAST + 25

// 进入房间
const OGID_MSGBCOR_ENTERROOM = OGID_MSGBASE_OGBCSREBROADCAST + 26

// 离开房间
const OGID_MSGBCOR_LEAVEROOM = OGID_MSGBASE_OGBCSREBROADCAST + 27

// 请求日期列表
const OGID_MSGBCOR_DATELIST = OGID_MSGBASE_OGBCSREBROADCAST + 28

// 请求转播信息
const OGID_MSGBC_BCINFO = OGID_MSGBASE_OGBCSREBROADCAST + 29

// 广播结束转播
const OGID_MSGBC_FINISHBC = OGID_MSGBASE_OGBCSREBROADCAST + 30

// 广播结束一局消息
const OGID_MSGBC_ENDBC = OGID_MSGBASE_OGBCSREBROADCAST + 31

// 解说员点开始研究
const OGID_MSGMOR_STARTCMT = OGID_MSGBASE_OGBCSREBROADCAST + 32

// 解说员点结束研究
const OGID_MSGMOR_ENDCMT = OGID_MSGBASE_OGBCSREBROADCAST + 33

// 解说员行棋消息
const OGID_MSGMOR_MOVECMT = OGID_MSGBASE_OGBCSREBROADCAST + 34

// 广播开始研究
const OGID_MORBC_STARTCMT = OGID_MSGBASE_OGBCSREBROADCAST + 35

// 广播结束研究
const OGID_MORBC_ENDCMT = OGID_MSGBASE_OGBCSREBROADCAST + 36

// 广播行棋消息
const OGID_MORBC_MOVECMT = OGID_MSGBASE_OGBCSREBROADCAST + 37

// 请求解说数据
const OGID_MSGUSER_CMTINFO = OGID_MSGBASE_OGBCSREBROADCAST + 38

// 转播员请求自己创建的正在进行及预告的转播
const OGID_MSGBCOR_BCORBCL = OGID_MSGBASE_OGBCSREBROADCAST + 39

// 广播修改转播结果
const OGID_MSGBCOR_BCREVISERESULT = OGID_MSGBASE_OGBCSREBROADCAST + 40

// 广播人气值
const OGID_MSGBC_BCPOPULARITY = OGID_MSGBASE_OGBCSREBROADCAST + 41

// 广播给所有该游戏中的人转播开始
const OGID_MSGBC_BCSTARTTOALL = OGID_MSGBASE_OGBCSREBROADCAST + 42

// 导播控制效果
const OGID_MSG_DIRECTORCONTROL = OGID_MSGBASE_OGBCSREBROADCAST + 43

// 导播控制消息广播
const OGID_MSGBC_DIRECTORCONTROL = OGID_MSGBASE_OGBCSREBROADCAST + 44

// 跑马灯广播
const OGID_MSGBC_BCMARQUEES = OGID_MSGBASE_OGBCSREBROADCAST + 45

// 根据赛事ID列表搜索转播ID列表
const OGID_MSGBCOR_SEARCHBCIDBYMATCHID = OGID_MSGBASE_OGBCSREBROADCAST + 46

// 打点统计
const OGID_MSGBC_USERACTION = OGID_MSGBASE_OGBCSREBROADCAST + 47

// 根据转播ID请求转播信息（web）
const OGID_MSGBCOR_REQBROADCASTINFO = OGID_MSGBASE_OGBCSREBROADCAST + 48

// 视频通知消息
const OGID_MSGBC_VIDEOCONTROL = OGID_MSGBASE_OGBCSREBROADCAST + 49

// 广播视频通知消息
const OGID_MSGBC_BCVIDEOCONTROL = OGID_MSGBASE_OGBCSREBROADCAST + 50

// 请求视频名
const OGID_MSG_REQVIDEONAME = OGID_MSGBASE_OGBCSREBROADCAST + 51

//////////////////////////////////////OGBCSFrontService
// 心跳
const OGID_IDLE = OGID_MSGBASE_OGBCSFRONT + 1

// 更新火热推荐数据
const OGID_MSGUD_HOTINFO = OGID_MSGBASE_OGBCSFRONT + 2

// 更新赛事列表
const OGID_MSGUD_MATCHLIST = OGID_MSGBASE_OGBCSFRONT + 3

// 更新标签日期列表
const OGID_MSGUD_DATELIST = OGID_MSGBASE_OGBCSFRONT + 4

// 更新标签列表数据
const OGID_MSGUD_DATEBCLIST = OGID_MSGBASE_OGBCSFRONT + 5

// 更新转播历史数据
const OGID_MSGUD_BCHISTROY = OGID_MSGBASE_OGBCSFRONT + 6

// 用户进入房间
const OGID_MSGUSER_ENTERROOM = OGID_MSGBASE_OGBCSFRONT + 7

// 用户断线
const OGID_MSGUSER_USERBREAK = OGID_MSGBASE_OGBCSFRONT + 8

// 更新解说信息数据
const OGID_MSGCMT_CMTINFO = OGID_MSGBASE_OGBCSFRONT + 9

// 最近结束的转播ID列表数据
const OGID_MSGBC_RECBCIF = OGID_MSGBASE_OGBCSFRONT + 10
